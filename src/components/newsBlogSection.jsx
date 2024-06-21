import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";
import {
  BlogCard,
  BlogCardContent,
  BlogCardThumbnail,
  BlogFooter,
  BlogHeading,
  BlogMeta,
  BlogThumbnailImage,
} from "./UI/blogCard";
import { H2, Title } from "./UI/sectionHeading";

export default function NewsAndBlogSection() {
  const blogPosts = [
    {
      title: "How to Create a Successful Project Plan",
      date: "May 20, 2021",
      thumbnail: "/images/blog/05.jpg",
    },
    {
      title: "Future of Remote Work Post-COVID-19",
      date: "May 20, 2021",
      thumbnail: "/images/blog/05.jpg",
    },
    {
      title: "AI in the Future of Business and Technology",
      date: "May 20, 2021",
      thumbnail: "/images/blog/05.jpg",
    },
  ];

  return (
    <section>
      <div className="container flex flex-wrap gap-8 justify-between items-center">
        <div>
          <Title>News & Blog</Title>
          <H2>Latest News & Blog Post</H2>
        </div>
        <a href="#" className="btn btn-primary">
          <span>View More</span>
          <FaArrowRight />
        </a>
      </div>

      <div className="container grid gap-8 mt-16 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <BlogCardThumbnail>
              <BlogThumbnailImage src={post.thumbnail} alt={post.title} />
            </BlogCardThumbnail>

            <BlogCardContent>
              <BlogMeta className={"flex items-center gap-4"}>
                <FaCalendarDays />
                <span>{post.date}</span>
              </BlogMeta>

              <BlogHeading>{post.title}</BlogHeading>

              <BlogFooter>
                <a href="#" className="portfolio-btn flex items-center gap-4">
                  <span>Read More</span>
                  <FaArrowRight />
                </a>
              </BlogFooter>
            </BlogCardContent>
          </BlogCard>
        ))}
      </div>
    </section>
  );
}
