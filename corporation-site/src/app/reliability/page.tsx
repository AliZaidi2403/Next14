import Link from "next/link";
import Image from "next/image";
import reliabilityImg from "./../../../public/reliability.jpg";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <Hero
      imgData={reliabilityImg}
      title="Super High Reliability Hosting"
      imgAlt="Reliability Page Image"
    />
  );
}
