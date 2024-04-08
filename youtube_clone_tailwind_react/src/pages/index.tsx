import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"How to implement tailwind using next.js"}
        image="image.jpg"
        thumbImage="image.jpg"
        author="Raj Patel"
        views="100k"
        timestamp="2 days ago"
      />
    </div>
  );
}
