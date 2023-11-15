import './Profile.css';

export function Profile() {
    return <>
        <section id="profile">
            <div class="section__pic-container">
                <img src="./assets/profile-pic.png" alt="Andrei Cervantes profile Picture" class="profile-pic" />
            </div>
            <div className="section__text">
                <p class="section__text__p1">Hello, I'm</p>
                <h1 class="title">Andrei Cervantes</h1>
                <p class="section__text__p2">Full-Stack Developer</p>
                <div class="btn-container">
                    <button class="btn btn-color-2" onclick="window.open('./assets/resume-cervantes.pdf')">Download CV</button>
                    <button class="btn btn-color-1" onclick="location.href='./#contact'">Contact Info</button>
                </div>
                <div id="socials-container">
                    <img src="./assets/linkedin.png" alt="My LinkedIn Profile" class="icon" onclick="window.open('https://www.linkedin.com/in/andrei-cervantes-b08166286/')" />
                    <img src="./assets/github.png" alt="My GitHub Profile" class="icon" onclick="window.open('https://github.com/Andrei-Cervantes')" />
                </div>
            </div>
        </section>
    </>;
}