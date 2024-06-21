import React from "react";

function H2({ className, ...props }) {
  return (
    <h2
      className={`text-3xl lg:text-4xl font-bold mt-4 text-slate-800 capitalize leading-loose ${className}`}
      {...props}
    />
  );
}

H2.displayName = "SectionHeading2";

function Title({ className, ...props }) {
  return (
    <p
      className={`uppercase font-bold tracking-[0.25em] border-l-4 border-primary text-slate-500 pl-8 ${className}`}
      {...props}
    />
  );
}

Title.displayName = "SectionTitle";

export { H2, Title };
