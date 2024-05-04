import performanceImg from "./../../../public/performance.jpg";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <Hero
      imgData={performanceImg}
      title="We Serve High Performance Applications"
      imgAlt="Performance Page Image"
    />
  );
}
