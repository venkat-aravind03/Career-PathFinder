// Domain data
const domains = [
    {
        title: 'Web Development',
        icon: 'fa-globe',
        description: 'Create modern web applications',
        roadmap: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        notes: [
            {
                title: 'HTML Fundamentals',
                content: 'HTML is the backbone of web development. Start with semantic elements, forms, and accessibility.',
                //videoUrl: 'https://www.youtube.com/watch?v=qz0aGYrrlhU'
                videoUrl: 'https://www.youtube.com/watch?v=qz0aGYrrlhU'
            },
            {
                title: 'CSS Mastery',
                content: 'Learn modern CSS including Flexbox, Grid, and responsive design principles.',
                videoUrl: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc'
            },
            {
                title: 'JavaScript Essentials',
                content: 'Master core concepts like async/await, promises, and DOM manipulation.',
                videoUrl: 'https://youtu.be/VlPiVmYuoqw?si=X_RI7NWYqs4rZzS'
            }
            {
                title: 'React',
                content: '"React.js: A powerful JavaScript library for building fast, interactive, and scalable user interfaces with reusable components.".',
                videoUrl: 'https://youtu.be/CgkZ7MvWUAA?si=uF4UbV24DQMZ3bde'
            }
            {
                title: 'Node JS',
                content: 'Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside the browser.',
                videoUrl: 'https://youtu.be/Oe421EPjeBE?si=MNiOWUYe5YRTYH0C'
            }
        ]
    },
    {
        title: 'Full Stack Development',
        icon: 'fa-layer-group',
        description: 'Master both frontend and backend',
        roadmap: ['Frontend', 'Backend', 'Database', 'DevOps'],
        notes: [
            {
                title: 'Frontend Development',
                content: 'Learn modern frontend frameworks and state management.',
                videoUrl: 'https://youtu.be/nu_pCVPKzTk?si=KEE3EOsd1z_j6nar'
            },
            {
                title: 'Backend Development',
                content: 'Master server-side programming and API development.',
                videoUrl: 'https://youtu.be/7fjOw8ApZ1I?si=spG2un2e28Ly0VqA'
            },
            {
                title: 'Database Design',
                content: 'Learn database modeling, SQL, and NoSQL databases.',
                videoUrl: 'https://youtu.be/hlGoQC332VM?si=srS6FvxLOtOZ2Fcm'
            }
        ]
    },
    {
        title: 'AI & Machine Learning',
        icon: 'fa-brain',
        description: 'Build intelligent systems',
        roadmap: ['Python', 'Mathematics', 'Neural Networks', 'Deep Learning'],
        notes: [
            {
                title: 'Python for AI',
                content: 'Master Python libraries like NumPy, Pandas, and Scikit-learn.',
                videoUrl: 'https://www.youtube.com/watch?v=WFr2WgN9_xE'
            },
            {
                title: 'Neural Networks',
                content: 'Understanding neural networks and deep learning fundamentals.',
                videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk'
            },
            {
                title: 'Machine Learning Basics',
                content: 'Learn supervised and unsupervised learning algorithms.',
                videoUrl: 'https://www.youtube.com/watch?v=jGwO_UgTS7I'
            }
        ]
    },
    {
        title: 'Data Science',
        icon: 'fa-chart-bar',
        description: 'Analyze and visualize data',
        roadmap: ['Statistics', 'Python', 'Data Analysis', 'Machine Learning'],
        notes: [
            {
                title: 'Statistics Fundamentals',
                content: 'Learn probability, hypothesis testing, and statistical analysis.',
                videoUrl: 'https://www.youtube.com/watch?v=xxpc-HPKN28'
            },
            {
                title: 'Data Visualization',
                content: 'Master tools like Matplotlib, Seaborn, and Plotly.',
                videoUrl: 'https://www.youtube.com/watch?v=a9UrKTVEeZA'
            },
            {
                title: 'Big Data Analytics',
                content: 'Learn big data processing and analytics techniques.',
                videoUrl: 'https://www.youtube.com/watch?v=1LlG6ZE3AG8'
            }
        ]
    },
    {
        title: 'Cyber Security',
        icon: 'fa-shield-alt',
        description: 'Protect digital assets',
        roadmap: ['Network Security', 'Cryptography', 'Ethical Hacking'],
        notes: [
            {
                title: 'Network Security',
                content: 'Understanding network protocols and security measures.',
                videoUrl: 'https://www.youtube.com/watch?v=qiQR5rTSshw'
            },
            {
                title: 'Ethical Hacking',
                content: 'Learn penetration testing and security assessment.',
                videoUrl: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE'
            },
            {
                title: 'Cryptography',
                content: 'Master encryption algorithms and security protocols.',
                videoUrl: 'https://www.youtube.com/watch?v=6_Cxj5WKpIw'
            }
        ]
    },
    {
        title: 'Mobile Development',
        icon: 'fa-mobile-alt',
        description: 'Create mobile applications',
        roadmap: ['React Native', 'iOS', 'Android', 'Cross-platform'],
        notes: [
            {
                title: 'React Native Basics',
                content: 'Build cross-platform mobile apps with React Native.',
                videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc'
            },
            {
                title: 'iOS Development',
                content: 'Learn Swift and iOS app development fundamentals.',
                videoUrl: 'https://www.youtube.com/watch?v=comQ1-x2a1Q'
            },
            {
                title: 'Android Development',
                content: 'Master Kotlin and Android app development.',
                videoUrl: 'https://www.youtube.com/watch?v=fis26HvvDII'
            }
        ]
    },
    {
        title: 'DevOps',
        icon: 'fa-cogs',
        description: 'Streamline development operations',
        roadmap: ['CI/CD', 'Docker', 'Kubernetes', 'Cloud Services'],
        notes: [
            {
                title: 'CI/CD Pipeline',
                content: 'Learn continuous integration and deployment practices.',
                videoUrl: 'https://www.youtube.com/watch?v=R8_veQiYBjI'
            },
            {
                title: 'Docker Containers',
                content: 'Master containerization with Docker.',
                videoUrl: 'https://www.youtube.com/watch?v=fqMOX6JJhGo'
            },
            {
                title: 'Kubernetes',
                content: 'Learn container orchestration with Kubernetes.',
                videoUrl: 'https://www.youtube.com/watch?v=X48VuDVv0do'
            }
        ]
    },
    {
        title: 'Database Management',
        icon: 'fa-database',
        description: 'Master data storage solutions',
        roadmap: ['SQL', 'NoSQL', 'Data Modeling', 'Performance'],
        notes: [
            {
                title: 'SQL Fundamentals',
                content: 'Learn SQL queries, joins, and database design.',
                videoUrl: 'https://www.youtube.com/watch?v=HXV3zeQKqGY'
            },
            {
                title: 'NoSQL Databases',
                content: 'Master MongoDB and other NoSQL solutions.',
                videoUrl: 'https://www.youtube.com/watch?v=-56x56UppqQ'
            },
            {
                title: 'Database Performance',
                content: 'Learn optimization techniques and indexing.',
                videoUrl: 'https://www.youtube.com/watch?v=HubXt90MLfE'
            }
        ]
    }
];

// Company and interview questions data
const companies = [
    {
        name: 'FAANG Must Do Problems',
        icon: 'fa-star',
        questions: [
            { id: 1, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum' },
            { id: 2, title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters' },
            { id: 3, title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/description/' },
            { id: 4, title: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/description/' },
            { id: 5, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 6, title: 'Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/' },
            { id: 7, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },
            { id: 8, title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' },
            { id: 9, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/' },
            { id: 10, title: 'Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' },
            { id: 11, title: 'Combination Sum', url: 'https://leetcode.com/problems/combination-sum/description/' },
            { id: 12, title: 'Rotate Image', url: 'https://leetcode.com/problems/rotate-image/description/' },
            { id: 13, title: 'Group Anagrams ', url: 'https://leetcode.com/problems/group-anagrams/description/' },
            { id: 14, title: 'Maximum Subarray', url: 'https://leetcode.com/problems/maximum-subarray/description/' },
            { id: 15, title: 'Spiral Matrix', url: 'https://leetcode.com/problems/spiral-matrix/description/' },
            { id: 17, title: 'Jump Game', url: 'https://leetcode.com/problems/jump-game/description/' },
            { id: 18, title: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/description/' },
            { id: 19, title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/description/' },
            { id: 20, title: 'Unique Paths', url: 'https://leetcode.com/problems/unique-paths/description/' },
            { id: 21, title: 'Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/description/' },
            { id: 22, title: 'Set Matrix Zeroes', url: 'https://leetcode.com/problems/set-matrix-zeroes/description/' },
            { id: 23, title: 'Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/description/' },
            { id: 24, title: 'Word Search', url: 'https://leetcode.com/problems/word-search/description/' },
            { id: 24, title: 'Decode Ways', url: 'https://leetcode.com/problems/decode-ways/description/' },
            { id: 25, title: 'Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/description/' },
            { id: 26, title: 'Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/description/' },
            { id: 27, title: 'Same Tree', url: 'https://leetcode.com/problems/same-tree/description/' },
            { id: 28, title: 'Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/description/' },
            { id: 29, title: 'Construct Binary Tree from Preorder and Inorder Traversal', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/' },
            { id: 30, title: 'Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/' },
           

        ]
    },
    {
        name: 'Amazon',
        icon: 'fa-shopping-cart',
        questions: [
            { id: 1, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/description/' },
            { id: 2, title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/description/' },
            { id: 3, title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/description/' },
            { id: 4, title: 'Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/description/' },
            { id: 5, title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/description/' },
            { id: 6, title: 'Zigzag Conversion', url: 'https://leetcode.com/problems/zigzag-conversion/description/' },
            { id: 7, title: 'String to Integer (atoi)', url: 'https://leetcode.com/problems/string-to-integer-atoi/description/' },
            { id: 8, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 9, title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/' },
            { id: 10, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },

       

        ]
    },
    {
        name: 'Microsoft',
        icon: 'fa-windows',
        questions: [
            { id: 1, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/' },
            { id: 2, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/description/' },
            { id: 3, title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/description/' },
            { id: 4, title: 'Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/description/' },
            { id: 5, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 6, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },
            { id: 7, title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' },
            { id: 8, title: 'Roman to Integer', url: 'https://leetcode.com/problems/roman-to-integer/description/' },
            { id: 9, title: 'String to Integer (atoi)', url: 'https://leetcode.com/problems/string-to-integer-atoi/description/' },
            { id: 10, title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/description/' },

        ]
    },
    {
        name: 'Facebook',
        icon: 'fa-facebook',
        questions: [
            { id: 1, title: 'Roman to Integer', url: 'https://leetcode.com/problems/roman-to-integer/description/' },
            { id: 2, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 3, title: 'Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' },
            { id: 4, title: 'Find the Index of the First Occurrence in a String', url: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/' },
            { id: 5, title: 'Remove Duplicates from Sorted Array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/' },
            { id: 6, title: 'Reverse Nodes in k-Group', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/description/' },
            { id: 7, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/' },
            { id: 8, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },
            { id: 9, title: 'Regular Expression Matching', url: 'https://leetcode.com/problems/regular-expression-matching/description/' },
            { id: 10, title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/' },

        ]
    },
    {
        name: 'Google Top 50',
        icon: 'fa-google',
        questions: [
            { id: 1, title: 'Add Binary', url: 'https://leetcode.com/problems/add-binary/description/' },
            { id: 2, title: 'Valid Mountain Array', url: 'https://leetcode.com/problems/valid-mountain-array/description/' },
            { id: 3, title: 'Set Mismatch', url: 'https://leetcode.com/problems/set-mismatch/description/' },
            { id: 4, title: ' Is Subsequence', url: 'https://leetcode.com/problems/is-subsequence/description/' },
            { id: 5, title: 'Number of Matching Subsequences', url: 'https://leetcode.com/problems/number-of-matching-subsequences/' },
            { id: 6, title: 'Length of Last Word', url: 'Length of Last Word' },
            { id: 7, title: 'Monotonic Array', url: 'https://leetcode.com/problems/monotonic-array/description/' },
            { id: 8, title: 'Find the Difference', url: 'https://leetcode.com/problems/find-the-difference/description/' },
            { id: 9, title: 'Binary Tree Paths', url: 'https://leetcode.com/problems/binary-tree-paths/description/' },
            { id: 10, title: 'Merge Strings Alternately', url: 'https://leetcode.com/problems/merge-strings-alternately/description/' },
            { id: 11, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-strings-alternately/description/' },
            { id: 12, title: '2 Keys Keyboard', url: 'https://leetcode.com/problems/2-keys-keyboard/description/' },
            { id: 13, title: 'Arithmetic Slices', url: 'https://leetcode.com/problems/arithmetic-slices/description/' },
            { id: 14, title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/' },
            { id: 15, title: '01 Matrix', url: 'https://leetcode.com/problems/01-matrix/description/' },
            { id: 16, title: 'Minimum Area Rectangle', url: 'https://leetcode.com/problems/minimum-area-rectangle/description/' },
            { id: 17, title: 'Fair Distribution of Cookies', url: 'https://leetcode.com/problems/fair-distribution-of-cookies/description/' },
            { id: 18, title: 'Count Days Without Meetings', url: 'https://leetcode.com/problems/count-days-without-meetings/description/?envType=daily-question&envId=2025-03-24' },
            { id: 19, title: 'Container with Most Water', url: 'https://leetcode.com/problems/container-with-most-water/description/' },
            { id: 20, title: 'Candy', url: 'https://leetcode.com/problems/candy/description/' },
            { id: 21, title: 'Burst Balloons', url: 'https://leetcode.com/problems/burst-balloons/description/' },
            { id: 22, title: 'Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/description/' },
            { id: 23, title: 'Trapping Rain Water II', url: 'https://leetcode.com/problems/trapping-rain-water-ii/' },
            { id: 24, title: 'Maximal Rectangle', url: 'https://leetcode.com/problems/maximal-rectangle/description/' },
            { id: 25, title: 'Count of Smaller Numbers After Self', url: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/' },
            { id: 26, title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' },
            { id: 27, title: 'Bulls and Cows', url: 'https://leetcode.com/problems/bulls-and-cows/description/' },
            { id:28, title: 'Find Median from Data Stream', url: 'https://leetcode.com/problems/find-median-from-data-stream/description/' },
            { id: 29, title: 'The Skyline Problem', url: 'https://leetcode.com/problems/the-skyline-problem/description/' },
            { id: 30, title: 'Maximal Square', url: 'https://leetcode.com/problems/maximal-square/description/' },
            { id: 31, title: 'Text Justification', url: 'https://leetcode.com/problems/text-justification/description/' },
            { id: 32, title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/description/' },
            { id: 33, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/description/' },
        ]
        

    },
    {
        name: 'LinkedIn',
        icon: 'fa-linkedin',
        questions: [
            { id: 1, title: 'All O`one Data Structure', url: 'https://leetcode.com/problems/all-oone-data-structure/description/' },
            { id: 2, title: 'Can Place Flowers', url: 'https://leetcode.com/problems/can-place-flowers/description/' },
            { id: 3, title: 'Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/description/' },
            { id: 4, title: 'Text Justification', url: 'https://leetcode.com/problems/text-justification/description/' },
            { id: 5, title: 'Repeated DNA Sequences', url: 'https://leetcode.com/problems/repeated-dna-sequences/description/' },
            { id: 6, title: 'Valid Number', url: 'https://leetcode.com/problems/valid-number/description/' },
            { id: 7, title: 'Valid Triangle Number', url: 'https://leetcode.com/problems/valid-triangle-number/description/' },
            { id: 8, title: 'Exclusive Time of Functions', url: 'https://leetcode.com/problems/exclusive-time-of-functions/description/' },
            { id: 9, title: 'Number of Islands', url: 'https://leetcode.com/problems/number-of-islands/description/' },
            { id: 10, title: 'Insert Delete GetRandom O(1)', url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/description/' },
            { id: 11, title: 'Partition to K Equal Sum Subsets', url: 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/' },
            { id: 12, title: 'Max Points on a Line', url: 'https://leetcode.com/problems/max-points-on-a-line/description/' },
            { id: 13, title: 'Count Different Palindromic Subsequences', url: 'https://leetcode.com/problems/count-different-palindromic-subsequences/description/' },
            { id: 14, title: 'Text Justification', url: 'https://leetcode.com/problems/text-justification/description/' },
            { id: 15, title: 'Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/description/' },
           
        ]
    },
    {
        name: 'Flipkart',
        icon: 'fa-shopping-bag',
        questions: [

            { id: 1, title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/description/' },
            { id: 2, title: 'Gas Station', url: 'https://leetcode.com/problems/gas-station/description/' },
            { id: 3, title: 'Distribute Candies', url: 'https://leetcode.com/problems/distribute-candies/description/' },
            { id: 4, title: 'Minimum Path Sum', url: 'https://leetcode.com/problems/minimum-path-sum/description/' },
            { id: 5, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-strings-alternately/description/' },
             { id: 6, title: 'Design Twitter', url: 'https://leetcode.com/problems/design-twitter/description/' },
             { id: 7, title: 'Stream of Characters', url: 'https://leetcode.com/problems/stream-of-characters/description/' },
             { id: 8, title: 'Meeting Rooms III', url: 'https://leetcode.com/problems/meeting-rooms-iii/description/' },
             { id: 9, title: 'Meeting Room', url: 'https://leetcode.com/problems/meeting-rooms/description/' },
             { id: 10, title: 'Pair With Given Difference', url: '' },
            

        ]
        
    },
    {
        name: 'Netflix',
        icon: 'fa-play',
        questions: [

            { id: 1, title: 'LRU Cache', url: 'https://leetcode.com/problems/lru-cache/description/' },
            { id: 2, title: 'Department Top Three Salaries', url: 'https://leetcode.com/problems/department-top-three-salaries/description/' },
           
        ]
    }
];
