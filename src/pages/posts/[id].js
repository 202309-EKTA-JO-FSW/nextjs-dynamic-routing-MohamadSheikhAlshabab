import Link from "next/link";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  const responseForComment = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const comment = await responseForComment.json();

  return {
    props: {
      post: post,
      comment: comment,
    },
  };
};

export default function singlePost({ post, comment }) {
  const styleDiv = {
    border: "1px solid #6c6c6c",
    margin: "1rem",
    padding: "0 0 100rem",
  };

  console.log({ comment });
  return (
    <div style={styleDiv}>
      <Link href="/" style={{ marginInline: "1rem" }}>
        <Button>Home</Button>
      </Link>
      <Link href="/posts">
        <Button>Posts</Button>
      </Link>

      <Card
        key={post.id}
        sx={{ maxWidth: 1200, padding: "2rem", margin: "5rem" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {post.title}
          </Typography>
          <Typography variant="body" color="text.secondary">
            {post.body}
          </Typography>
          <Typography>User ID : {post.userId}</Typography>
          <br />
          <br />
          <Typography variant="h4">Comments:</Typography>
          {comment.map((item) => {
            return (
              <div key={item.id} style={{ margin: "1rem", padding: "1rem" }}>
                <Typography variant="h6" color="text.secondary">
                  ID: {item.id}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Post ID: {item.postId}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.body}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Email: {item.email}
                </Typography>
                <br />
                <hr />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
