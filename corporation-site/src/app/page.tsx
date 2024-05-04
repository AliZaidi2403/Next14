import homeimg from "./../../public/home.jpg";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <Hero
      imgData={homeimg}
      title="Professional Cloud Hosting"
      imgAlt="Home Page Image"
    />
  );
}
