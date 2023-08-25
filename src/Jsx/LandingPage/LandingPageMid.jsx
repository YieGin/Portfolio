import React, { forwardRef, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import "./styles/LandingPageMid.scss";
import { useInView } from "react-intersection-observer";
import Image8 from "../../Images/8.png";
import Image9 from "../../Images/9.png";
import Image10 from "../../Images/10.png";
import Image15 from "../../Images/15.png";
import Image16 from "../../Images/16.png";
import PhoneProjects from "./Phone_Projects/Phone_Projects";
const LandingPageMid = ({ scrollref }, ref) => {
  const textScrollVariantss = {
    visible: { opacity: 1, right: 0 },
    hidden: { opacity: 0 },
  };

  const controls9 = useAnimation();
  const [ref9, inView9] = useInView();

  const controls10 = useAnimation();
  const [ref10, inView10] = useInView();

  const controls12 = useAnimation();
  const [inView12] = useInView();

  const controls13 = useAnimation();
  const [inView13] = useInView();

  const controls15 = useAnimation();
  const [ref15, inView15] = useInView();

  const controls16 = useAnimation();
  const [ref16, inView16] = useInView();

  const controls17 = useAnimation();
  const [ref17, inView17] = useInView();

  useEffect(() => {
    if (inView9) {
      controls9.start("visible");
    }
  }, [controls9, inView9]);

  useEffect(() => {
    if (inView10) {
      controls10.start("visible");
    }
  }, [controls10, inView10]);

  useEffect(() => {
    if (inView12) {
      controls12.start("visible");
    }
  }, [controls12, inView12]);

  useEffect(() => {
    if (inView13) {
      controls13.start("visible");
    }
  }, [controls13, inView13]);

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

  useEffect(() => {
    if (inView17) {
      controls17.start("visible");
    }
  }, [controls17, inView17]);

  return (
    <div className="Container_mid">
      <div className="Container_mid1">
        <h2 ref={scrollref[0]}>CASE STUDIES</h2>
        <div className="btn-groupmid">
          <div className="btnmid">
            <span className="Spann"></span>
            <span className="Spann"></span>
            <span className="Spann"></span>
            <span className="Spann"></span>
          </div>
          <svg
            className="fillll"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 860.000000 1060.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1060.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M852 10191 l-93 -6 303 -345 c814 -930 2916 -3282 3161 -3538 39 -40
75 -71 82 -68 16 6 161 164 688 749 1203 1337 2837 3179 2837 3198 0 13 -284
19 -890 19 l-635 -1 -640 -715 c-689 -771 -1198 -1337 -1303 -1448 l-65 -70
-36 41 c-20 22 -218 242 -441 489 -697 772 -1351 1510 -1460 1646 l-45 57
-685 -1 c-377 -1 -727 -4 -778 -7z"
              />
              <path
                d="M828 7283 c-32 -2 -58 -7 -58 -11 1 -35 3372 -3816 3517 -3945 20
-17 21 -17 59 26 22 24 163 180 314 348 775 855 2703 3024 3080 3464 l94 110
-64 6 c-36 4 -380 7 -765 7 l-700 1 -335 -376 c-1014 -1138 -1657 -1846 -1674
-1840 -32 10 -1531 1674 -1860 2065 l-129 152 -711 -2 c-391 -1 -737 -3 -768
-5z"
              />
              <path
                d="M870 4363 c-41 -2 -79 -8 -84 -13 -4 -4 101 -133 240 -292 897 -1024
3117 -3505 3243 -3622 l31 -30 36 35 c54 50 486 526 919 1009 786 879 2568
2887 2573 2901 2 5 -127 9 -306 9 -170 0 -511 3 -758 6 l-449 6 -290 -328
c-341 -385 -793 -890 -1235 -1379 -423 -468 -480 -529 -490 -533 -25 -9 -1715
1888 -1907 2141 l-74 97 -687 -2 c-378 -1 -721 -4 -762 -5z"
              />
            </g>
          </svg>
        </div>
        <h1 className="Porjects_text">RECENT REACT PROJECTS</h1>
      </div>
      <div className="GapWork">
        <motion.div
          ref={ref9}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text2"
          animate={controls9}
        >
          <figure className="snip1401">
            <img className="ImagePage7" src={Image16} alt="" />
            <figcaption className="Figcaption">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="Name_project" style={{ color: "#fff" }}>
                  Gym Vanguard Elite
                </p>
                <p className="Page6_Text-Bigger">
                  I created this website from scratch, ensuring its originality
                  I didn't replicate any design from other sites. All the
                  designs, fonts, and images are my own creations, with the
                  exception of the landing page image. This website boasts clean
                  code, making it easily understandable. It's also responsive,
                  catering to a wide range of screen resolutions, from 4K down
                  to 320px. Please take a moment to explore the site and review
                  the code. Thank you!
                </p>
              </div>
              <div className="Check_box">
                <div className="btn-group15">
                  <a
                    href="https://gym-vanguard-elite-eedd.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/YieGin/Gym-Vanguard-Elite"
                >
                  <div className="btn-group15">
                    <div className="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </div>
                  </div>
                </a>
              </div>
            </figcaption>
            <i className="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref15}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text"
          animate={controls15}
        >
          <figure className="snip1401">
            <img className="ImagePage7" src={Image10} alt="" />
            <figcaption className="Figcaption">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="Name_project" style={{ color: "#fff" }}>
                  Rolex 2.0
                </p>
                <p className="Page6_Text-Bigger">
                  An example of div website designed to appeal to high-end
                  customers has been created with the purpose of showcasing
                  skills.
                </p>
              </div>
              <div className="Check_box">
                <div className="btn-group15">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://rolex-2-0.vercel.app"
                    className="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/YieGin/Rolex_2.0
"
                >
                  <div className="btn-group15">
                    <div className="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </div>
                  </div>
                </a>
              </div>
            </figcaption>
            <i className="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref16}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text2"
          animate={controls16}
        >
          <figure className="snip1401">
            <img className="ImagePage7" src={Image15} alt="" />
            <figcaption className="Figcaption">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="Name_project" style={{ color: "#fff" }}>
                  YieGPT
                </p>
                <p className="Page6_Text-Bigger">
                  There seems to be an issue with the OpenAI integration on the
                  website hosted on gh-pages. Unfortunately, I am unable to
                  share my API_KEY with you to resolve this issue. However, you
                  can easily fix it yourself by following guide i put in my
                  github.
                </p>
              </div>
              <div className="Check_box">
                <div className="btn-group15">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=3LSx4XAqoPI&ab_channel=TheBeginning
                    "
                    className="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Watch Video
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/YieGin/Yie-GPT
"
                >
                  <div className="btn-group15">
                    <div className="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </div>
                  </div>
                </a>
              </div>
            </figcaption>
            <i className="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref17}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text"
          animate={controls17}
        >
          <figure className="snip1401">
            <img className="ImagePage7" src={Image9} alt="" />
            <figcaption className="Figcaption">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="Name_project" style={{ color: "#fff" }}>
                  TOURNAMENTS
                </p>
                <p className="Page6_Text-Bigger">
                  An example of responsive website appealing to high-end
                  customers been done for div purpose of skill showcase.
                </p>
              </div>
              <div className="Check_box">
                <div className="btn-group15">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://yiegin.github.io/Tournaments/"
                    className="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/YieGin/Tournaments"
                >
                  <div className="btn-group15">
                    <div className="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </div>
                  </div>
                </a>
              </div>
            </figcaption>
            <i className="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
        <motion.div
          ref={ref10}
          variants={textScrollVariantss}
          initial="hidden"
          className="ImagePage6_text2"
          animate={controls10}
        >
          <figure className="snip1401">
            <img className="ImagePage7" src={Image8} alt="" />
            <figcaption className="Figcaption">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className="Name_project" style={{ color: "#fff" }}>
                  LAMBORGHINI
                </p>
                <p className="Page6_Text-Bigger">
                  An example of responsive website appealing to high-end
                  customers been done for div purpose of skill showcase.
                </p>
              </div>
              <div className="Check_box">
                <div className="btn-group15">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://yiegin.github.io/lamborghini_2.0/"
                    className="btn15"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Website
                  </a>
                </div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/YieGin/lamborghini_2.0"
                >
                  <div className="btn-group15">
                    <div className="btn15">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Check code
                    </div>
                  </div>
                </a>
              </div>
            </figcaption>
            <i className="ion-ios-home-outline"></i>
          </figure>
        </motion.div>
      </div>
      <div
        style={{
          height: "50px",
        }}
      />
      <PhoneProjects />
    </div>
  );
};

export default forwardRef(LandingPageMid);
