import stevenHeadshot from "./Images/Steven_headshot.jpg"
import adHeadshot     from "./Images/AD_headshot.jpg"
import mouseRender    from "./Images/Mouse_render.JPG"

export const mouseDescriptions = [
    'weight',
    'speed',
    'comfort',
    'percision',
    'quality'];

export const contents = [
    {
        name: "Weight",
        image: mouseRender,
        description: "2 player battleship game that allows players to place ships and alternate turns for placing ships",
        skills: ["Java", "Java Swing", "JUnit"],
        github: "https://github.com/ScottJiang2001/CPSC-210-Project/tree/master/project_h8d3b",
        devpost: false
    },
    {
        name: "Design",
        image: mouseRender,
        description: "An interactive web app created to help you make eco-friendly decisions when choosing produce; helping you save money, support local growers, and reduce your carbon footprint.",
        skills: ["HTML", "CSS", "Javascript", "Firebase", "Python"],
        github: "https://github.com/localproduce",
        devpost: "https://devpost.com/software/localszn"
    },
    {
        name: "Speed",
        image: mouseRender,
        description: "DormBuddy allow students to move around in an e-dorm virtual environment, video call, and text each other. Students move between dorms and can interact with others and return to sessions.",
        skills: ["HTML", "CSS", "Javascript", "Vue"],
        github: "https://github.com/BenjaminSao/DormBuddies",
        devpost: "https://devpost.com/software/dormbuddy"
    },

]

export const profiles = [
    {
        photo: adHeadshot,
        name: "A.D. Mohammad",
        position: "Co-Founder",
        profession: "Mechanical Engineer",
        link: "https://www.linkedin.com/in/a-d-abdullah-mohammad-970530185/",
        location: "Calgary, AB",
        skills: ["Vue", "Javascript", "Jest", "HTML", "Sass", "Pug"],
        description: "Working on the Lumio mainline frontend team. Currently assisting in maintaining master metrics documentation. Updating and adding new unit tests. Implementing user stories regarding lesson sorting and easing teacher/student login experience."
    },
    {
        photo: stevenHeadshot,
        name: "Steven Ng",
        position: "Co-Founder",
        profession: "Electrical Engineer",
        link: "https://www.linkedin.com/in/sysng/",
        location: "Calgary, AB",
        skills: ["React", "React Native", "Django", "Javascript", "Python"],
        description: "Implemented user notification customization features on both our webapp and mobile platform.Integrated new sorting features on our mobile app allowing users to toggle between compact or normal process viewalong with optional sorting options such as alphabetical, last modified, or by tags. Refined user reported bugs and corresponded with our VP of product to modify existing UI"
    },

]