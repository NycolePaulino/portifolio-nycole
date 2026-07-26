import { useState } from "react";


export function TechIcon({ slug, className = "h-3.5 w-3.5" }: { slug: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className={`${className} inline-block rounded-full bg-primary/70`} aria-hidden />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/8C52FF`}
      alt=""
      aria-hidden
      loading="lazy"
      width={16}
      height={16}
      className={`${className} shrink-0 object-contain`}
      onError={() => setFailed(true)}
    />
  );
}
