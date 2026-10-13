export const projects = [
    {
        name: "Student Portal",
        img: "/projects/studentportal/studentportal1.png",
        description: "High-performance Student Portal serving 8,000+ daily users at KIET Group Of Institutions. Features attendance tracking, class schedules, fee payment system, and PWA capabilities with offline support.",
        techStack: ["react.webp", "tailwind.webp", "materialui.png", "django.webp"],
        details: [
            "Scalable architecture supporting 8,000+ daily active users.",
            "Attendance Tracking: Real-time attendance monitoring for students.",
            "Class Schedules: Students can view and manage their class timetables.",
            "Exam Admit Cards: Download and view exam admit cards directly from the portal.",
            "Online Fee Payment: Secure payment of hostel and academic fees.",
            "Progress Tracking: Students can view their academic performance and marks for each subject.",
            "PWA Capabilities: Installable app with offline support for seamless access.",
            "Modern UI: Built with React, Material UI, and Tailwind CSS for a responsive and user-friendly experience.",
            "Robust Backend: Django ensures secure and efficient data management."
        ],
        screenshots: [
            "/projects/studentportal/studentportal1.png",
            "/projects/studentportal/studentportal2.png",
            "/projects/studentportal/studentportal3.png"
        ],
        liveLink: "https://tech.kiet.edu/StudentPortal"
    },
    {
        name: "FileSync",
        img: "/projects/filesync/filesync1.png",
        description: "FileSync is a website that allows users to send files from one computer to another using peer-to-peer connections. It uses PeerJS for direct, two-way data sharing between devices, enabling fast and secure file transfers.",
        techStack: ["react.webp", "webrtc.svg", "tailwind.webp"],
        details: [
            "Peer-to-peer file sharing: Send and receive files directly between computers using PeerJS.",
            "Two-way data transfer: Both users can share files with each other in real time.",
            "Simple interface: Easy-to-use UI for connecting and sharing files.",
        ],
        screenshots: [
            "/projects/filesync/filesync1.png",
            "/projects/filesync/filesync2.png",
            "/projects/filesync/filesync3.png",
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/file-transfer",
        liveLink: "https://easyfilesync.vercel.app/"
    },
    {
        name: "KIET Official Website",
        img: "/projects/kietwebsite/kietwebsite1.png",
        description: "Official institutional portal for KIET Group of Institutions built with Next.js. Engineered with high-performance SSR architecture, advanced SEO optimization, structured metadata.",
        techStack: ["next.webp", "react.webp", "tailwind.webp", "nodejs.webp"],
        details: [
            "Official College Website: Architected and developed the main institutional website for KIET Deemed to be University.",
            "Optimized and deployed the platform to efficiently handle 3500+ daily visitors, ensuring high availability and fast load times.",
            "Advanced SEO Optimization: Implemented dynamic meta tags, structured data, sitemaps, and dynamic routing for maximum search engine visibility.",
            "Performance & Core Web Vitals: Leveraged Next.js SSR, automatic image optimization, and code splitting to ensure lightning-fast page loads.",
            "Interactive UI: Designed with modern Tailwind CSS components ensuring seamless cross-device responsiveness."
        ],
        screenshots: [
            "/projects/kietwebsite/kietwebsite1.png",
            "/projects/kietwebsite/kietwebsite2.png",
            "/projects/kietwebsite/kietwebsite3.png",
            "/projects/kietwebsite/kietwebsite4.png",
            "/projects/kietwebsite/kietwebsite5.png",
        ],
        liveLink: "https://www.kiet.edu/"
    },
    {
        name: "DevKit",
        img: "/projects/devkit/devkit1.png",
        description: "All in one developer workspace built on Next.js featuring a Email Template Builder for cold mailing according to user resume, interactive Photo Editor, JSON Formatter , virtualized 3D Flipbook PDF reader, and QR Code Generator.",
        techStack: ["next.webp", "react.webp", "tailwind.webp", "js.webp"],
        details: [
            "Modular Developer Suite: Multi-tool productivity platform built using Next.js with high-performance client-side processing.",
            "Email Template Builder: Interactive email template designer with social toggles, responsive blocks, and HTML code export fetches data from user resume.",
            "Photo Editor: Browser-based image editing suite offering filters, cropping, resizing, and canvas enhancement controls.",
            "JSON Formatter : Real-time JSON parser, syntax beautifier, and error diagnostics.",
            "Interactive Flipbook: Virtualized 3D page-flipping reader for large PDF documents with gesture support and realistic page turning effects.",
            "QR Code Studio: Customizable QR code generation with high-resolution download formats."
        ],
        screenshots: [
            "/projects/devkit/devkit1.png",
            "/projects/devkit/devkit2.png",
            "/projects/devkit/devkit3.png",
            "/projects/devkit/devkit4.png",
            "/projects/devkit/devkit5.png",
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/DevKit",
        liveLink: "https://dev-kit-ease.vercel.app/",
    },
    {
        name: "Certifier",
        img: "/projects/certifier/certifier1.webp",
        description: "A bulk certificate generator project that automates personalized certificate creation using student data, integrates  file management, and features a responsive React frontend with Django and Pillow for backend image processing.",
        techStack: ["react.webp", "redux.webp", "tailwind.webp", "django.webp"],
        details: [
            "Built a bulk certificate generator that uses templates and student data from Excel/CSV files to create personalized certificates.",
            "Integrated file management system with features to create folders, move files, delete items, and restore from trash.",
            "Developed a responsive frontend using React and managed global state efficiently with Redux.",
            "Used Django and Pillow for backend logic and image processing to dynamically render certificates",
        ],
        screenshots: [
            "/projects/certifier/certifier1.webp",
            "/projects/certifier/certifier2.webp",
            "/projects/certifier/certifier3.webp",
            "/projects/certifier/certifier4.webp",
            "/projects/certifier/certifier5.webp",
            "/projects/certifier/certifier6.webp",
            "/projects/certifier/certifier7.webp",
            "/projects/certifier/certifier8.webp",
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/certifier",
        liveLink: "https://tech.kiet.edu/certifier/"


    },
    {
        name: "StayEasy",
        img: "/projects/wanderlust/stayease1.png",
        description: " StayEasy is a web application inspired by Airbnb, where users can list their homes, explore listings, and leave reviews. It’s designed to make home-sharing easy, offering users the ability to list, browse, and review accommodations.",
        techStack: ["ejs.webp", "bootstrap.webp", "nodejs.webp", "express.webp", "mongodb.webp"],
        details: [
            "User Authentication: Secure login and registration with Passport.js.",
            "List and Review Homes: Users can add their properties, browse other listings, and post reviews.",
            "Map Integration: Uses Mapbox to show locations of listed properties.",
            "Image Storage: Image hosting and management with Cloudinary.",
            "Data Validation: Schema validation for requests with Joi.",
            "Responsive Design: Styled with Bootstrap for a mobile-friendly experience.",
        ],
        screenshots: [
            "/projects/wanderlust/stayease1.png",
            "/projects/wanderlust/stayease2.png",
            "/projects/wanderlust/stayease3.png",
            "/projects/wanderlust/stayease4.png"
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/StayEase",
        liveLink: "https://wanderlust-production-96de.up.railway.app/"
    },
    {
        name: "Quick Mart",
        img: "/projects/quickMart/quickMart1.webp",
        description: " Quick Mart is an e-commerce platform offering users the ability to browse products, manage carts, and make secure payments. Admins can efficiently manage products, track orders, and process transactions via Razorpay.",
        techStack: ["angular.webp", "bootstrap.webp", "js.webp", "django.webp"],
        details: [
            " Quick Mart offers a seamless shopping experience where users can browse a wide range of products, add items to their shopping cart, and complete their purchases with ease.",
            "The platform provides a robust admin page for managing products, including adding, updating, or removing items, as well as tracking customer orders and managing inventory.",
            "Quick Mart integrates Razorpay to handle secure and smooth payment transactions, allowing users to pay for their purchases through multiple payment methods, including credit/debit cards, wallets, and UPI.",
            "The system ensures efficient order processing, with features for both users to track their orders and admins to monitor the status of all pending, completed, and returned orders.",
        ],
        screenshots: [
            "/projects/quickMart/quickMart1.webp",
            "/projects/quickMart/quickMart2.webp",
            "/projects/quickMart/quickMart3.webp",
            "/projects/quickMart/quickMart4.webp",
            "/projects/quickMart/quickMart5.webp",
            "/projects/quickMart/quickMart6.webp",
            "/projects/quickMart/quickMart7.webp",
            "/projects/quickMart/quickMart8.webp",
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/Quick-Mart/tree/main/frontend",

    },
    {
        name: "Thrivefy",
        img: "/projects/thrivefy/thrivefy1.webp",
        description: " Thrivefy is a healthcare platform that allows users to check bed availability, ambulance services, and buy medicine. The admin panel ensures real-time updates from local hospitals for accurate information.",
        techStack: ["ejs.webp", "bootstrap.webp", "nodejs.webp", "express.webp", "mongodb.webp"],
        details: [
            "Bed & Doctor Availability: Users can check real-time availability of beds and doctors at nearby hospitals.",
            "Medicine Store: A built-in store allows users to purchase medicines directly through the platform.",
            "Ambulance Service: Users can view the availability of ambulances from specific hospitals for emergencies.",
            "Admin Panel: Hospital admins can update bed availability, doctor schedules, and other services, ensuring accurate and up-to-date information.",
        ],
        screenshots: [
            "/projects/thrivefy/thrivefy1.webp",
            "/projects/thrivefy/thrivefy2.webp",
            "/projects/thrivefy/thrivefy3.webp",
            "/projects/thrivefy/thrivefy4.webp",
            "/projects/thrivefy/thrivefy5.webp",
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/innotech-2024/tree/main",
        liveLink: "https://innotech-2024.onrender.com"
    },

]
