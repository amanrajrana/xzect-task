import Image from "next/image";

const BlogCard = ({ className, ...props }) => {
  return (
    <div
      className={`single-blog-card flex flex-col duration-300 relative overflow-clip h-max text-slate-200 bg-blue-950 pb-8 ${className}`}
      {...props}
    />
  );
};

BlogCard.displayName = "BlogCard";

const BlogCardThumbnail = ({ className, alt, src, ...props }) => {
  return (
    <div
      className={"thumbnail w-full overflow-hidden h-max " + className}
      {...props}
    />
  );
};

BlogCardThumbnail.displayName = "BlogCardThumbnail";

const BlogThumbnailImage = ({
  width = 450,
  height = 400,
  className,
  alt,
  src,
  ...props
}) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={`w-[inherit] aspect-[4/3] duration-300 ease-in-out hover:scale-110 ${className}`}
      {...props}
    />
  );
};

const BlogCardContent = ({ className, ...props }) => {
  return (
    <div
      className="blog-content duration-300 ease-in-out hover:scale-110 flex flex-col gap-4 items-start py-4 px-8 text-slate-300 font-semibold"
      {...props}
    />
  );
};

BlogCardContent.displayName = "BlogCardContent";

const BlogMeta = ({ className, ...props }) => {
  return <div className={"blog-meta " + className} {...props} />;
};

BlogMeta.displayName = "BlogMeta";

const BlogHeading = ({ className, ...props }) => {
  return (
    <h3 className="text-xl text-white font-bold" {...props}>
      How to Create a Successful Project Plan
    </h3>
  );
};

BlogHeading.displayName = "BlogHeading";

const BlogFooter = ({ className, ...props }) => (
  <div className="portfolio-btn" {...props} />
);

BlogFooter.displayName = "BlogFooter";

export {
  BlogCard,
  BlogCardThumbnail,
  BlogThumbnailImage,
  BlogCardContent,
  BlogMeta,
  BlogHeading,
  BlogFooter,
};
