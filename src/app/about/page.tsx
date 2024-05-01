import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "About page",
  description: "this is my about page",
};

const AboutPage = () => {
  type myAnalysisType = {
    value: number;
    description: string;
  };

  const myAnalysis: myAnalysisType[] = [
    { value: 10, description: "Years of experience" },
    { value: 234, description: "People reached" },
    { value: 5, description: "Services and plugins" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.about}>About Agency</h3>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          We create ideas that are bolder, bigger, braver and better. We believe
          in good ideas flexibility and precision. We are worlds Our Special
          Team Best consulting and finance solution provider. Wide range of web
          and software development services
        </p>
        <div className={styles.analysisContainer}>
          {myAnalysis.map((item) => (
            <div key={item.description} className={styles.myAnalysisItem}>
              <h2 className={styles.analysisValue}>{item.value}K+</h2>
              <div className={styles.analysisDescription}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
