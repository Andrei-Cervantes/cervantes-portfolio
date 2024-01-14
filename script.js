const projects = [
    {
        id: 1,
        title: "PADES Printing",
        icon: "./assets/pades.png",
        githubLink: "https://github.com/Andrei-Cervantes/Project-1",
        liveDemo: "https://padesprinting.com",
        videoDemo: ""
    },
    {
        id: 2,
        title: "Re-",
        icon: "./assets/re.png",
        githubLink: "",
        liveDemo: "",
        videoDemo: "https://www.youtube.com/watch?v=jN-CUOo5HxQ"
    },
    {
        id: 3,
        title: "Barangay Plus",
        icon: "./assets/brgy-plus.png",
        githubLink: "",
        liveDemo: "",
        videoDemo: "https://www.youtube.com/watch?v=-eER-g5y3JE"
    },
    {
        id: 4,
        title: "Nutri Forage",
        icon: "./assets/nutri-forage.png",
        githubLink: "https://github.com/sumampongaldrin/nutri-forage",
        liveDemo: "",
        videoDemo: "https://youtube.com"
    },
    {
        id: 5,
        title: "Java Calculator",
        icon: "./assets/calculator-java.png",
        githubLink: "https://github.com/Andrei-Cervantes/Calculator_Java",
        liveDemo: "",
        videoDemo: ""
    },
    {
        id: 6,
        title: "Java Tic-Tac-Toe",
        icon: "./assets/tic-tac-toe-java.png",
        githubLink: "https://github.com/Andrei-Cervantes/TicTacToe_Java",
        liveDemo: "",
        videoDemo: ""
    },
    {
        id: 7,
        title: "JavaScript Mini Projects",
        icon: "./assets/vanilla-javascript.jpg",
        githubLink: "https://github.com/Andrei-Cervantes/JS_Practice",
        liveDemo: "",
        videoDemo: ""
    },
    {
        id: 8,
        title: "MERN Bookstore",
        icon: "./assets/bookstore.png",
        githubLink: "https://github.com/Andrei-Cervantes/MERN-Bookstore",
        liveDemo: "",
        videoDemo: ""
    },
]

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}