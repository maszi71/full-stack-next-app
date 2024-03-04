import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser/postUser";
import {formatDate} from "@/utils/date"

const getData = async (slug) => {
  const res = await fetch(`${process.env.BASE_URL}/api/blog/${slug}`); // default => force-cache

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  // Fetch Data without API
  // const post = await getPost(slug);

  // Fecth Data With API
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const singlePost = async ({ params }) => {
  const { slug } = params;

  // Fetch Data without API
  //const post= await getPost(slug);

  // Fecth Data With API
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post?.img} alt="post image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {formatDate(post?.createdAt)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default singlePost;
