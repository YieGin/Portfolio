import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import "./style/Phone.scss";
import Image12 from "../../../Images/12.png";
import Image13 from "../../../Images/13.png";
import Image14 from "../../../Images/14.png";
import Phone_svg from "./Phone_svg";

function Phone_Projects() {
  const textScrollVariantss = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();
  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView();
  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  return (
    <div className="Phone_box">
      <Phone_svg />
      <motion.figure
        ref={ref1}
        variants={textScrollVariantss}
        initial="hidden"
        className="snip1361"
        animate={controls1}
      >
        <img src={Image13} alt="sample45" />
        <figcaption>
          <h3>Shopping App</h3>
          <p>
            An example of an app designed to appeal to high-end customers has
            been created with the purpose of showcasing skills.
          </p>
          <div className="center">
            <div className="btn-phone-1">
              <a
                target="_blank"
                href="https://www.youtube.com/shorts/plJJEBWO48U"
              >
                <span>Watch Video</span>
              </a>
            </div>
            <div className="btn-phone-2">
              <a
                target="_blank"
                href="https://github.com/YieGin/Shopping-App-UI-With-React-Native-Redux-toolkit"
              >
                <span>Check code</span>
              </a>
            </div>
          </div>
        </figcaption>
      </motion.figure>
      <motion.figure
        ref={ref2}
        variants={textScrollVariantss}
        initial="hidden"
        className="snip1361"
        animate={controls2}
      >
        <img src={Image12} alt="sample45" />
        <figcaption>
          <h3>Spotfiy clone</h3>
          <p>
            An example of an app designed to appeal to high-end customers has
            been created with the purpose of showcasing skills.
          </p>
          <div className="center">
            <div className="btn-phone-1">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=ChsdPLmG1U8"
              >
                <span>Watch Video</span>
              </a>
            </div>
            <div className="btn-phone-2">
              <a target="_blank" href="https://github.com/YieGin/Spotfiy_app">
                <span>Check code</span>
              </a>
            </div>
          </div>
        </figcaption>
      </motion.figure>
      <motion.figure
        ref={ref3}
        variants={textScrollVariantss}
        initial="hidden"
        className="snip1361"
        animate={controls3}
      >
        <img src={Image14} alt="sample45" />
        <figcaption>
          <h3>Instagram clone</h3>
          <p>
            An example of an app designed to appeal to high-end customers has
            been created with the purpose of showcasing skills.
          </p>
          <div className="center">
            <div className="btn-phone-1">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=XQID-UMXdmM&ab_channel=TheBeginning"
              >
                <span>Watch Video</span>
              </a>
            </div>
            <div className="btn-phone-2">
              <a target="_blank" href="https://github.com/YieGin/Instagram_App">
                <span>Check code</span>
              </a>
            </div>
          </div>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default Phone_Projects;
