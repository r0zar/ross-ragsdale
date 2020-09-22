/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ross Ragsdale",
  title: "Hi all, I'm Ross",
  subTitle: emoji(
    "I'm a freelance software developer. I work with cutting-edge software tools and frameworks to build apps that are fast, maintainable and scale like crazy 🔥"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1rrNIAP8G2ufZj5rIVJtw0uspU_HYRrfR/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/r0zar",
  twitter: "https://twitter.com/lordrozar",
  linkedin: "https://www.linkedin.com/in/rossragsdale/",
  gmail: "rossragsdale@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Building apps the smart way. Learned how the hard way.",
  skills: [
    emoji(
      "⚡ Leverage the best resources AWS has to offer to build blazing fast apps"
    ),
    emoji("⚡ Utilize React and other web frameworks for best-in-class UI/UX"),
    emoji(
      "⚡ Integrate AI/ML, third party services and APIs for intelligent data pipelines"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "Amazon Web Services",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "AWS Lambda",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "AWS DynamoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "AWS AppSync",
      fontAwesomeClassname: "fas fa-sync",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Architecture",
      progressPercentage: "95%",
    },
    {
      Stack: "React Development",
      progressPercentage: "85%",
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "70%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Application Developer",
      company: "Discover Financial Services",
      companylogo: require("./assets/images/discoverLogo.jpg"),
      date: "May 2016 – Aug 2018",
      desc:
        "Lead developer and maintainer of business critical software used by over 20k call center employees.",
      // descBullets: [
      //   "Full-stack development of javascript applications and node back end infrastructure.",
      //   "Maintained team CI/CD pipeline, and mentored external teams on DevOps best pratices.",
      // ],
    },
    {
      role: "Sr. Software Developer",
      company: "MBX Systems",
      companylogo: require("./assets/images/mbxsystemsLogo.jpg"),
      date: "Aug 2018 - Jul 2019",
      desc:
        'Core developer for the company\'s flagship "MBX Hatch" web application.',
    },
    {
      role: "Founder, Solution Architect",
      company: "Point Blank Dev",
      companylogo: require("./assets/images/pointblankdevLogo.jpg"),
      date: "Aug 2019 – Present",
      desc:
        "Founded software engineering consultancy and help other entrepreneurs build their businesses everyday.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "r0zar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/syngentaLogo.png"),
      link: "https://www.syngenta.com/",
    },
    {
      image: require("./assets/images/growflowLogo.png"),
      link: "https://www.growflow.com/",
    },
    {
      image: require("./assets/images/ochreLogo.png"),
      link: "https://join.shopochre.com/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achivementsCards: [
    {
      title: "My work featured in online publications",
      subtitle:
        "I developed and pitched a new product feature to my company's Chief Strategy Officer. Turns out he wasn't the only one who liked it.",
      image: require("./assets/images/slackintegration.jpg"),
      footerLink: [
        {
          name: "IndustryWeek",
          url:
            "https://www.industryweek.com/leadership/article/22028246/using-slack-on-the-shop-floor",
        },
        {
          name: "DigitalEngineering247",
          url:
            "https://read.nxtbook.com/peerless_media/digital_engineering/august_2019/social_and_connected_plm.html",
        },
        {
          name: "MBX Systems",
          url: "https://www.mbx.com/insights/slack-on-the-shop-floor",
        },
      ],
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url:
    //         "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
    //     },
    //   ],
    // },
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/",
    //     },
    //   ],
    // },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
      url:
        "https://www.codementor.io/@r0zar/don-t-use-typescript-for-your-next-project-here-s-why-1afd52afla",
      title: "Don't use Typescript for your next project, here's why",
      description:
        "My contrarian take on Typescript, and why it's generally a waste of time.",
    },
    {
      url:
        "https://www.codementor.io/@r0zar/debugging-web-apps-local-overrides-1a3hikh3yj",
      title: "Debugging web apps: Local Overrides",
      description:
        "Take your web dev debugging skills to expert level with this little-known hack.",
    },
    {
      url:
        "https://www.codementor.io/@r0zar/how-appsync-supercharges-my-workflow-19xyh3tej4",
      title: "How AppSync supercharges my workflow",
      description:
        "AWS AppSync transformed and streamlined my workflow for full-stack web development.",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/",
    // },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-2153608015",
  email_address: "rossragsdale@gmail.com",
};

//Twitter Section

const twitterDetails = {
  // userName: "lordrozar", //Replace "twitter" with your twitter username without @
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
