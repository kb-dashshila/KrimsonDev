import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

interface BlogCardProps {
  blogs: Blog[];
}

export default function BlogCard({ blogs }: BlogCardProps) {
  return (
    <div className="rounded-3xl border border-theme bg-[color:var(--card)] backdrop-blur-md p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
            Latest Blogs
          </p>
          <h2 className="text-3xl font-bold mt-2 text-[color:var(--text-primary)]">
            Some words I write
          </h2>
        </div>

        <button className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300">
          View All Blogs
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="space-y-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex gap-4 border-b border-theme pb-5 last:border-none"
          >
            <div className="relative w-24 h-24 rounded-xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, 150px"
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <Link
                href={blog.link}
                className="font-semibold text-lg leading-snug text-[color:var(--text-primary)]"
              >
                {blog.title}
              </Link>

              <p className="text-sm text-[color:var(--text-secondary)] mt-2">
                {blog.date} • {blog.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
