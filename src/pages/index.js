import { Inter } from "next/font/google";
import Link from "next/link";
import Button from "@mui/material/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const styleDiv = {
    border: "1px solid #6c6c6c",
    margin: "1rem",
    padding: "0 0 100rem",
  };
  return (
    <div style={styleDiv}>
      <Link href="/" style={{ marginInline: "1rem" }}>
        <Button>Home</Button>
      </Link>
      <Link href="/posts">
        <Button>Posts</Button>
      </Link>
    </div>
  );
}
