import Image from "next/image";

export default function Portrait() {
    return (
        <Image 
        src = "/portrait.jpg"
        alt = "Oliver Coltart"
        width={400}
        height={400}
        priority
        className="rounded-full object-cover w-60 h-60 shrink-0"
        />
    );
}