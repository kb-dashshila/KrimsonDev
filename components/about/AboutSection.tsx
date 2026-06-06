import AboutContent from "./AboutContent";
import Timeline from "./Timeline";

const timelineData = [
  {
    year: "2020",
    title: "Started my journey as a Frontend Developer",
  },
  {
    year: "2021",
    title: "Focused on React.js and component-based architecture",
  },
  {
    year: "2022",
    title: "Worked on enterprise-scale applications",
  },
  {
    year: "2023",
    title: "Specialized in AEM development and optimization",
  },
  {
    year: "2024",
    title: "Deep dive into Accessibility and Performance",
  },
  {
    year: "2025",
    title: "Building next-gen banking solutions with modern stack",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#050816] py-20 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <AboutContent />
        <Timeline items={timelineData} />
      </div>
    </section>
  );
}
