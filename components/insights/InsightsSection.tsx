import SlideFromTop from "@/components/SlideFromTop";
import BlogCard from "./BlogCard";
import GithubActivityCard from "./GithubActivityCard";
const basePath = "/KrimsonDev";

const blogs = [
  {
    id: 1,
    title: "How to optimize performance in React Applications",
    date: "May 20, 2024",
    readTime: "6 min read",
    image: `${basePath}/images/blogs/react-performance.jpg`,
    link: "google.com",
  },
  {
    id: 2,
    title: "AEM Dispatcher Caching Deep Dive",
    date: "Apr 12, 2024",
    readTime: "8 min read",
    image: `${basePath}/images/blogs/aem.jpg`,
    link: "google.com",
  },
  {
    id: 3,
    title: "Accessibility Best Practices for Web Developers",
    date: "Mar 28, 2024",
    readTime: "5 min read",
    image: `${basePath}/images/blogs/accessibility.jpg`,
    link: "google.com",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-20 px-6">
      <SlideFromTop className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
        <BlogCard blogs={blogs} />
        <GithubActivityCard />
      </SlideFromTop>
    </section>
  );
}
