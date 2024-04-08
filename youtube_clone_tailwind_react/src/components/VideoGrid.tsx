import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to implement tailwind with next.js and ts?",
    image: "image.jpg",
    thumbImage: "image.jpg",
    author: "Raj Patel",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "How to implement tailwind with next.js and ts?",
    image: "image.jpg",
    thumbImage: "image.jpg",
    author: "Raj Patel",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "How to implement tailwind with next.js and ts?",
    image: "image.jpg",
    thumbImage: "image.jpg",
    author: "Raj Patel",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "How to implement tailwind with next.js and ts?",
    image: "image.jpg",
    thumbImage: "image.jpg",
    author: "Raj Patel",
    views: "100k",
    timestamp: "2 days ago",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
}
