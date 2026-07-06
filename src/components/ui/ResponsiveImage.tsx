"use client";

import { useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { IMAGE_PLACEHOLDER } from "@/lib/images";

type ResponsiveImageProps = Omit<ImageProps, "onError">;

export default function ResponsiveImage({ src, alt, ...props }: ResponsiveImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== IMAGE_PLACEHOLDER) {
          setImgSrc(IMAGE_PLACEHOLDER);
        }
      }}
    />
  );
}
