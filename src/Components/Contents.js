import stevenHeadshot from "./Images/Steven_headshot.jpg"
import adHeadshot     from "./Images/AD_headshot.jpg"

export const mouseDescriptions = [
    'weight',
    'speed',
    'comfort',
    'percision',
    'quality'];

export const profiles = [
    {
        photo: adHeadshot,
        name: "A.D. Mohammad",
        position: "Co-Founder",
        date: "Mechanical Engineer",
        link: "https://legacy.smarttech.com/en/lumio",
        location: "Calgary, AB",
        skills: ["Vue", "Javascript", "Jest", "HTML", "Sass", "Pug"],
        description: "Working on the Lumio mainline frontend team. Currently assisting in maintaining master metrics documentation. Updating and adding new unit tests. Implementing user stories regarding lesson sorting and easing teacher/student login experience."
    },
    {
        photo: stevenHeadshot,
        name: "Steven Ng",
        position: "Co-Founder",
        date: "Electrical Engineer",
        link: "https://tryknowhow.com/",
        location: "Calgary, AB",
        skills: ["React", "React Native", "Django", "Javascript", "Python"],
        description: "Implemented user notification customization features on both our webapp and mobile platform.Integrated new sorting features on our mobile app allowing users to toggle between compact or normal process viewalong with optional sorting options such as alphabetical, last modified, or by tags. Refined user reported bugs and corresponded with our VP of product to modify existing UI"
    },

]