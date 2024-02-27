import Image from "next/image";
import styles from "./about.module.css";
import aboutImg from "../../../public/images/about.png";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger , bolder , braver and better
        </h1>
        <p className={styles.desc}>
          We create ideas that are bigger , bolder , braver and better.we
          believe in good ideas and flexibility{" "}
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>Year of exprience</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>Year of exprience</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>Year of exprience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image className={styles.img} src={aboutImg} alt="about us" fill />
      </div>
    </div>
  );
};

export default AboutUs;
