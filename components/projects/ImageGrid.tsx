import Image from "next/image";

interface ImageItem {
  src: string;
  size?: "small" | "large";
}

interface ImageGridProps {
  images: ImageItem[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  if (!images.length) return null;
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((image) => (
        <div
          key={image.src}
          className={`relative aspect-video${image.size === "large" ? " col-span-2" : ""}`}
        >
          <Image
            src={image.src}
            alt=""
            fill
            sizes={image.size === "large" ? "100vw" : "50vw"}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
