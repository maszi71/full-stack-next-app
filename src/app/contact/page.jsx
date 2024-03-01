import styles from "./contact.module.css"
import Image from "next/image";
import contactImg from "../../../public/images/contact.png";
// import HydrationTest from "@/components/hydrationTest";
// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

const ContactUs = () => {

  // random number is gonna different in server and in client side even the component use "use client"
   // const a = Math.random();
  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={contactImg} alt="Contact us" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
         {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
