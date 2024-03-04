import PostCard from "../../components/postCard/PostCard";
import styles from "./blog.module.css";
import {getPosts} from "../../lib/data";


const getData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/blog`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};


export const metadata = {
  title: "Blog Page",
  description: "Blog description",
};

const Blog = async () => {

  //Fetch Post List with API
  const posts = await getData();

 // Fetch Post List without API
 // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
