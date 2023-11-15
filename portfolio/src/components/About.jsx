import './About.css';

export function About() {
    return <>
        <section id="about">
            <p class="section__text__p1">Get To Know More</p>
            <h1 class="title">About Me</h1>
            <div class="section-container">
                <div class="section__pic-container">
                    <img src="./assets/about-pic.jpg" alt="Profile Picture" class="about-pic" />
                </div>
                <div class="about-details-container">
                    <div class="about-containers">
                        <div class="details-container">
                            <img src="./assets/experience.png" alt="Experience Icon" class="icon" />
                            <h3>Experience</h3>
                            <p>Fresh Graduate <br />Full-Stack Development</p>
                        </div>
                        <div class="details-container">
                            <img src="./assets/education.png" alt="Education Icon" class="icon" />
                            <h3>Education</h3>
                            <p>Bachelor of Science<br />in Computer Engineering</p>
                        </div>
                    </div>
                    <div class="text-container">
                        <p>Diligent individual with proficient problem solving skills and works well in a team. Eager to experience and explore more to refine my skills for growth in a challenging environment and be able to contribute more to the success of the company.</p>
                    </div>
                </div>
            </div>
            <img src="./assets/arrow.png" alt="Arrow Down Icon" class="icon arrow" onclick="location.href='./#experience'" />
        </section>
    </>;
}