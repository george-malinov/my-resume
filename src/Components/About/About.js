import React from "react";
import Photo from "../../photos/myPhoto.jpg";
import "./about.css";

function About() {
  return (
    <div>
      <section className="aboutInfo">
        <img src={Photo} alt="" />
        <article className="aboutMe">
          <p>Hello, my name is</p>
          <h1>George Malinov</h1>
          <p>
            I'm a beginner developer who is looking for challenges! I have some
            experience in univercity and made some projects with React and
            .Net-Core MVC. Check out my <a href="/Resume">resume</a> and{" "}
            <a href="https://github.com/george-malinov?tab=repositories">
              projects
            </a>{" "}
            in GitHub.
          </p>
          <a href="/Contact">Hire Me</a>
        </article>
      </section>
      <section>
        <article>
          <h2>Skills Overview</h2>
          <p>
            Below is a quick overview of my main technical skill sets and tools
            I use.Want to find out more about my experience?
          </p>
          <a href="/Resume">Check out my online resume.</a>
        </article>
      </section>
    </div>
  );
}

export default About;
