

import Image from "next/image";
import styles from "./singlePost.module.css";
import postImg from "../../../../public/images/about.png";
import { Suspense } from "react";
import PostUser from "../../../components/postUser/postUser";




const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); // default => force-cache

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const singlePost = async ({ params })=> {
  const {slug} = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={postImg} alt="" fill className={styles.img} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
        {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              detail
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
  }

  export default singlePost;




