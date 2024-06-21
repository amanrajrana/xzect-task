//
function PortfolioCard({ className, ...props }) {
  return (
    <div
      className={`relative overflow-hidden duration-500 w-full h-full cursor-pointer ${className}`}
      {...props}
    />
  );
}

const PortfolioSlidingContent = ({ className = "", ...props }) => {
  return (
    <div
      className={`absolute bottom-8 -right-full w-[90%] h-max flex justify-between items-center bg-white duration-300 p-8 ${className}`}
      {...props}
    />
  );
};

const PortfolioSlidingContentTitle = ({ className = "", ...props }) => {
  return (
    <h3 className={`font-bold text-2xl capitalize ${className}`} {...props} />
  );
};

const PortfolioSlidingContentDescription = ({ className = "", ...props }) => {
  return <p className={`text-gray-500 ${className}`} {...props} />;
};

const PortfolioSlidingContentLink = ({ className = "", href, ...props }) => {
  return (
    <a
      className={`w-max aspect-square px-4 flex justify-center items-center bg-primary text-white duration-300 hover:bg-blue-950 rounded-full text-xl ${className}`}
      {...props}
      href={href}
    />
  );
};

PortfolioCard.displayName = "PortfolioCard";
PortfolioSlidingContent.displayName = "PortfolioSlidingContent";
PortfolioSlidingContentTitle.displayName = "PortfolioSlidingContentTitle";
PortfolioSlidingContentDescription.displayName =
  "PortfolioSlidingContentDescription";
PortfolioSlidingContentLink.displayName = "PortfolioSlidingContentLink";

export {
  PortfolioCard,
  PortfolioSlidingContent,
  PortfolioSlidingContentTitle,
  PortfolioSlidingContentDescription,
  PortfolioSlidingContentLink,
};
