import Link from "next/link";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts: posts,
    },
  };
};

export default function Posts({ posts }) {
  const styleDiv = {
    border: "1px solid #6c6c6c",
    margin: "1rem",
    padding: "1rem",
  };

  const styleDivContainer = {
    display: "grid",
    justifyContent: "space-around",
    alignItems: "center",
    justifyItems: "center",
    alignContent: "center",
    gridTemplateColumns: "1fr 1fr 1fr",
  };

  return (
    <div style={styleDiv}>
      <Link href="/" style={{ marginInline: "1rem" }}>
        <Button>Home</Button>
      </Link>
      <Link href="/posts">
        <Button>Posts</Button>
      </Link>
      <div style={styleDivContainer}>
        {posts.map((post) => (
          <Card sx={{ maxWidth: 500, margin: "1rem" }} key={post.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/posts/${post.id}`}>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
