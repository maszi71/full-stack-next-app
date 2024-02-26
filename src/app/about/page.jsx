import Image from "next/image";
import styles from "./about.module.css";


  const AboutUs = ()=> {
    
    return <div className={styles.container}>
      <Image src="./about.png" alt="about us" fill />
    </div>
  }

  export default AboutUs;