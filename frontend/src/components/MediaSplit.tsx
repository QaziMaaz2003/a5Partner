import Image from "next/image";
import type { ReactNode } from "react";

type MediaSplitProps = {
  image: { src: string; alt: string };
  children: ReactNode;
  /** Put the image on the left instead of the right. */
  reversed?: boolean;
  portrait?: boolean;
  priority?: boolean;
};

/** Image beside copy — the workhorse layout for the interior sections. */
export default function MediaSplit({
  image,
  children,
  reversed = false,
  portrait = false,
  priority = false,
}: MediaSplitProps) {
  return (
    <div className={`media-split${reversed ? " is-reversed" : ""}`}>
      <div className="media-split-copy" data-reveal>
        {children}
      </div>
      <div
        className={`media-frame${portrait ? " is-portrait" : ""}`}
        data-reveal
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
