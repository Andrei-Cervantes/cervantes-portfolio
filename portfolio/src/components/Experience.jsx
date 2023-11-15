import './Experience.css';

export function Experience() {
    return <>
        <section id="experience">
            <p class="section__text__p1">Explore My</p>
            <h1 class="title">Experience</h1>
            <div class="experience-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <h2 class="experience-sub-title">Frontend Development</h2>
                        <div class="article-container">
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>Figma</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>ReactJS</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>Bootstrap</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="details-container">
                        <h2 class="experience-sub-title">Backend Development</h2>
                        <div class="article-container">
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>MySQL</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>Node JS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>PHP</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>Python</h3>
                                    <p>Object-Oriented Programming</p>
                                </div>
                            </article>
                            <article>
                                <img src="./assets/checkmark.png" alt="Experience Icon" class="icon" />
                                <div>
                                    <h3>Java</h3>
                                    <p>Object-Oriented Programming</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./assets/arrow.png" alt="Arrow Down Icon" class="icon arrow" onclick="location.href='./#projects'" />
        </section>
    </>;
}