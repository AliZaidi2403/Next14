import type { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  imgData: StaticImageData;
  title: string;
  imgAlt: string;
};

export default function Hero({ imgData, title, imgAlt }: Props) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: "cover" }} />
        {/*Assigning fill prop to image component will fill up the space of the parent comtainer
      as large as it can while the image is loading in the backgroun*/}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>

      <div className="pt-40 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
}
