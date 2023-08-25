import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./styles/LandingPage.scss";
const About = () => {
  const [sent, setSent] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [sentError, setSentError] = useState(false);

  const [setsend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (userEmail === "" || userName === "" || userMessage === "") {
      setSentError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_a5rh5xh",
        "template_vz0ss37",
        form.current,
        "pTcETt4XvK4M7IYQv"
      )
      .then(
        (result) => {
          console.log(result);
          e.target.reset();
          setSentError(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setSentError(true);
        }
      );
  };

  const textScrollVariantss = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls6 = useAnimation();
  const [ref6, inView6] = useInView();

  const controls7 = useAnimation();
  const [ref7, inView7] = useInView();

  const controls8 = useAnimation();
  const [inView8] = useInView();

  const controls9 = useAnimation();
  const [inView9] = useInView();

  const controls15 = useAnimation();
  const [ref15, inView15] = useInView();

  const controls16 = useAnimation();
  const [ref16, inView16] = useInView();

  useEffect(() => {
    if (inView6) {
      controls6.start("visible");
    }
  }, [controls6, inView6]);

  useEffect(() => {
    if (inView7) {
      controls7.start("visible");
    }
  }, [controls7, inView7]);

  useEffect(() => {
    if (inView8) {
      controls8.start("visible");
    }
  }, [controls8, inView8]);

  useEffect(() => {
    if (inView9) {
      controls9.start("visible");
    }
  }, [controls9, inView9]);

  useEffect(() => {
    if (inView15) {
      controls15.start("visible");
    }
  }, [controls15, inView15]);

  useEffect(() => {
    if (inView16) {
      controls16.start("visible");
    }
  }, [controls16, inView16]);

  return (
    <div>
      <div className="About">
        <motion.div
          ref={ref6}
          variants={textScrollVariants}
          initial="hidden"
          className="About_left"
          animate={controls6}
        >
          <div className="btn-group4">
            <a className="btn4">
              <span className="Spann"></span>
              <span className="Spann"></span>
              <span className="Spann"></span>
              <span className="Spann"></span>
              <div className="About_left_div">
                <h1>About Me</h1>
                <h5>Front-end developer</h5>
                <p style={{ textTransform: "uppercase" }}>
                  I am an experienced front-end developer with a deep passion
                  for crafting intricate designs. My expertise lies in using
                  HTML, CSS/SCSS, Tailwind CSS, and bringing my websites to life
                  with JavaScript, React, and Next.js for over four years. I've
                  recently expanded my skill set with React Native for mobile
                  app development, enhancing UI development speed. For version
                  control and collaborative development, I'm proficient with
                  Git/GitHub and Bitbucket. Additionally, I employ Jest to test
                  my applications, ensuring their utmost reliability. Throughout
                  my career, I've been driven by the challenge of designing. I
                  take pride in leveraging my creativity to devise simple yet
                  elegant solutions that elevate the user experience. I've
                  successfully collaborated with two companies, one in Poland
                  and another in Pakistan, making significant contributions to
                  both. Beyond professional pursuits, I'm highly competitive and
                  motivated in all aspects of life. For a more in-depth look at
                  my projects and accomplishments, I invite you to explore my
                  portfolio.
                </p>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          ref={ref7}
          variants={textScrollVariants}
          initial="hidden"
          className="About_left"
          animate={controls7}
        >
          <div className="btn-group4">
            <a className="btn4">
              <span className="Spann"></span>
              <span className="Spann"></span>
              <span className="Spann"></span>
              <span className="Spann"></span>
              <>
                <div className="Main_email">
                  <form className="Form" ref={form} onSubmit={sendEmail}>
                    <Link to="/">
                      <svg
                        className="about_svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="34"
                        height="34"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                        ></path>
                      </svg>
                    </Link>
                    <div className="Emailtext">
                      <h1>Get In Touch</h1>
                      <p>
                        Currently, I am searching for new career opportunities.
                        If you have any questions or would like to just say
                        hello, please do not hesitate to contact me and I will
                        do my best to respond as soon as possible.
                      </p>
                    </div>
                    <div className="btn-group10">
                      <p>Name</p>
                      <a className="btn10">
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <input
                          className="Inputt"
                          type="text"
                          name="user_name"
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </a>
                    </div>
                    <div className="btn-group10">
                      <p>Email</p>
                      <a className="btn10">
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <input
                          className="Inputt"
                          type="email"
                          name="user_email"
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </a>
                    </div>
                    <div className="btn-group11">
                      <p>Message</p>
                      <a className="btn11">
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <span className="Spann"></span>
                        <textarea
                          className="messagees"
                          name="message"
                          onChange={(e) => setUserMessage(e.target.value)}
                        />
                      </a>
                    </div>
                    <div className="button_container">
                      <input
                        className="btn"
                        onClick={() => {
                          setsend(true);
                        }}
                        type="submit"
                        value="Send"
                      />
                      {sent && (
                        <motion.div
                          ref={ref15}
                          variants={textScrollVariantss}
                          initial="hidden"
                          className="Sent_input"
                          animate={controls15}
                        >
                          Your email has been sent
                        </motion.div>
                      )}
                      {sentError && (
                        <motion.div
                          ref={ref16}
                          variants={textScrollVariantss}
                          initial="hidden"
                          className="Sent_input"
                          animate={controls16}
                        >
                          Something went wrong
                        </motion.div>
                      )}
                    </div>
                  </form>
                </div>
              </>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
