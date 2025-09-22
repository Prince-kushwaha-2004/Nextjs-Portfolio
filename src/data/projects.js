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
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/file-transfer",
        liveLink: "https://file-transfer-tan-six.vercel.app/"
    },
    {
        name: "Wanderlust",
        img: "/projects/wanderlust/wanderlust1.webp",
        description: " Wanderlust is a web application inspired by Airbnb, where users can list their homes, explore listings, and leave reviews. It’s designed to make home-sharing easy, offering users the ability to list, browse, and review accommodations.",
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
            "/projects/wanderlust/wanderlust1.webp",
            "/projects/wanderlust/wanderlust2.webp",
            "/projects/wanderlust/wanderlust3.webp"
        ],
        githubLink: "https://github.com/Prince-kushwaha-2004/Wanderlust",
        liveLink: "https://wanderlust-1-y0wm.onrender.com/listings"
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
