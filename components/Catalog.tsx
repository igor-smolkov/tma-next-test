import Image from "next/image";
import { FC } from "react";

const Catalog: FC = () => {
  const imgKeys = Array.from({ length: 27 }, (_, i) => i);

  return (
    <div className="flex flex-wrap gap-4 p-2">
      {imgKeys.map((index) => (
        <div key={index} className="aspect-square w-32 rounded-md overflow-hidden shadow-xl">
          <Image className="object-cover h-full" src={`/images/${index}.jpg`} alt="" width={128} height={128} />
        </div>
      ))}
    </div>
  )
};

export { Catalog };
