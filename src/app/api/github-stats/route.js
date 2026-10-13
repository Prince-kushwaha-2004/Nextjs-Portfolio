import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Prince-kushwaha-2004";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  // Baseline defaults representing public + private activity
  let repos = 37;
  let commits = 500;
  let prs = 34;
  let followers = 9;

  // 1. If GITHUB_TOKEN is available, use GitHub GraphQL API to fetch private + public totals
  if (token) {
    try {
      const query = `
        query($login: String!) {
          user(login: $login) {
            followers { totalCount }
            repositories(ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
              totalCount
            }
            pullRequests {
              totalCount
            }
            contributionsCollection {
              totalCommitContributions
              restrictedContributionsCount
              totalPullRequestContributions
            }
          }
        }
      `;

      const gqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": "Nextjs-Portfolio",
        },
        body: JSON.stringify({
          query,
          variables: { login: GITHUB_USERNAME },
        }),
        next: { revalidate: 1800 },
      });

      if (gqlRes.ok) {
        const gqlData = await gqlRes.json();
        const user = gqlData?.data?.user;
        if (user) {
          if (user.repositories?.totalCount) repos = user.repositories.totalCount;
          if (user.followers?.totalCount) followers = user.followers.totalCount;
          if (user.pullRequests?.totalCount) prs = user.pullRequests.totalCount;

          const coll = user.contributionsCollection;
          if (coll) {
            // totalCommitContributions + restrictedContributionsCount (private commits)
            const publicCommits = coll.totalCommitContributions || 0;
            const privateCommits = coll.restrictedContributionsCount || 0;
            const totalCalcCommits = publicCommits + privateCommits;
            if (totalCalcCommits > 0) {
              commits = Math.max(commits, totalCalcCommits);
            }
            if (coll.totalPullRequestContributions) {
              prs = Math.max(prs, coll.totalPullRequestContributions);
            }
          }

          return NextResponse.json({
            repos: String(repos),
            commits: `${commits}+`,
            prs: String(prs),
            followers: String(followers),
            source: "github-authenticated",
          });
        }
      }
    } catch {
      // Continue to fallback REST search
    }
  }

  // 2. Fetch using REST API with optional token
  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "Nextjs-Portfolio",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };

    const [uRes, cRes, prRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 1800 },
      }),
      fetch(
        `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}&per_page=1`,
        {
          headers: {
            ...headers,
            Accept: "application/vnd.github.cloak-preview+json",
          },
          next: { revalidate: 1800 },
        }
      ),
      fetch(
        `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr&per_page=1`,
        {
          headers,
          next: { revalidate: 1800 },
        }
      ),
    ]);

    if (uRes.ok) {
      const u = await uRes.json();
      repos = (u.total_private_repos ? u.public_repos + u.total_private_repos : u.public_repos) ?? repos;
      followers = u.followers ?? followers;
    }

    if (cRes.ok) {
      const c = await cRes.json();
      if (typeof c.total_count === "number" && c.total_count > 0) {
        commits = Math.max(commits, c.total_count);
      }
    }

    if (prRes.ok) {
      const pr = await prRes.json();
      if (typeof pr.total_count === "number" && pr.total_count > 0) {
        prs = Math.max(prs, pr.total_count);
      }
    }
  } catch {
    // Keep fallback numbers
  }

  return NextResponse.json({
    repos: String(repos),
    commits: `${commits}+`,
    prs: String(prs),
    followers: String(followers),
    source: token ? "github-rest-authenticated" : "fallback",
  });
}
