import Image, { StaticImageData } from "next/image";

// Course images
import Course1 from "@/assets/images/course/course-1.png";
import Course2 from "@/assets/images/course/course-2.png";
import Course3 from "@/assets/images/course/course-3.png";
import Course4 from "@/assets/images/course/course-4.png";
import Course5 from "@/assets/images/course/course-5.png";
import Course6 from "@/assets/images/course/course-6.png";

// Student avatars
import Avatar1 from "@/assets/images/avatar/Ellipse-1.png";
import Avatar2 from "@/assets/images/avatar/Ellipse-2.png";
import Avatar3 from "@/assets/images/avatar/Ellipse-3.png";
import Avatar4 from "@/assets/images/avatar/Ellipse-4.png";

type Skill = {
  id: number;
  name: string;
};

type Course = {
  id: number;
  title: string;
  instructor: string;
  image: StaticImageData;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  rating: number;
  price: number;
  students: number;
};

const skills: Skill[] = [
  { id: 1, name: "Featured" },
  { id: 2, name: "Music" },
  { id: 3, name: "Drawing & Painting" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "Animation" },
  { id: 6, name: "Social Media" },
  { id: 7, name: "UI/UX Design" },
  { id: 8, name: "Creative Marketing" },
  { id: 9, name: "Digital Illustration" },
  { id: 10, name: "Film & Video" },
  { id: 11, name: "Crafts" },
  { id: 12, name: "Freelance & Entrepreneurship" },
  { id: 13, name: "Graphic Design" },
  { id: 14, name: "Photography" },
  { id: 15, name: "Productivity" },
  { id: 16, name: "Web Development" },
  { id: 17, name: "Data Science" },
  { id: 18, name: "Cooking" },
];

const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    instructor: "purpleprint studio",
    image: Course1,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    students: 26,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    instructor: "purpleprint studio",
    image: Course2,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    students: 26,
  },
  {
    id: 3,
    title: "the Power of Big Data",
    instructor: "purpleprint studio",
    image: Course3,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    rating: 4.5,
    price: 25,
    students: 26,
  },
  {
    id: 4,
    title: "Master Modern UI Design",
    instructor: "purpleprint studio",
    image: Course4,
    lessons: 22,
    duration: "3 hours 12 mins",
    comments: 74,
    level: "Beginner",
    rating: 4.8,
    price: 30,
    students: 32,
  },
  {
    id: 5,
    title: "Complete Graphic Design",
    instructor: "purpleprint studio",
    image: Course5,
    lessons: 25,
    duration: "4 hours 20 mins",
    comments: 82,
    level: "Intermediate",
    rating: 4.7,
    price: 35,
    students: 41,
  },
  {
    id: 6,
    title: "Data Science Fundamentals",
    instructor: "purpleprint studio",
    image: Course6,
    lessons: 30,
    duration: "5 hours 10 mins",
    comments: 91,
    level: "Intermediate",
    rating: 4.9,
    price: 40,
    students: 48,
  },
];

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4];

const CourseSection = () => {
  return (
    <section className="container mx-auto bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-6xl  text-center">
          <h2 className="text-xl font-semibold leading-[1.15] tracking-tight text-[#080D21] md:text-3xl lg:text-[42px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mt-4 text-[12px] leading-[25px] text-[#82868E] font-light md:text-base">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different
            <br className="hidden md:block" />
            fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>

        {/* Skills */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-3">
          {skills.map((skill) => {
            const isFeatured = skill.name === "Featured";

            return (
              <button
                key={skill.id}
                type="button"
                className={`
                  rounded-full px-3 py-[6px]
                  text-sm font-normal
                  transition-all duration-200
                  ${
                    isFeatured
                      ? "bg-[#C7FF00] text-[#182000]"
                      : "bg-[#F4F4F5] text-[#555861] hover:bg-[#C7FF00] hover:text-[#182000]"
                  }
                `}
              >
                {skill.name}
              </button>
            );
          })}

          <button
            type="button"
            className="rounded-full px-2 py-[6px] text-[14px] font-medium text-[#315DE8] transition-colors hover:text-[#1745D0]"
          >
            + More
          </button>
        </div>

        {/* Course Cards */}
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <article className="group overflow-hidden rounded-[14px] border border-[#DDE0E5] bg-white md:p-[14px] p-[8px]  transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden rounded-[9px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* Image bottom information */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
          <span className="rounded-full bg-white/70 px-2 py-[4px] md:text-[11px] text-[8px] font-medium text-[#4F4F4F] backdrop-blur-sm">
            {course.lessons} Lessons
          </span>

          <span className="rounded-full bg-white/70 px-2 py-[4px] md:text-[11px] text-[8px] font-medium text-[#4F4F4F] backdrop-blur-sm">
            {course.duration}
          </span>

          <span className="rounded-full bg-white/70 px-2 py-[4px] md:text-[11px] text-[8px] font-medium text-[#4F4F4F] backdrop-blur-sm">
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="px-[1px] pb-1 pt-6">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate md:text-[18px] text-[16px] font-semibold leading-5 text-[#10131F]">
              {course.title}
            </h3>

            <p className="text-[12px] text-[#8D91A0]">
              by <span className="text-[#4266DB]">{course.instructor}</span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 pt-2 text-[18px] text-[#4F4F4F] -translate-y-4">
            <span className="font-light">{course.rating}</span>
            <span className="text-[24px] font-medium text-[#C7C9CE]">★</span>
          </div>
        </div>

        {/* Level + Students */}
        <div className="mt-2 flex items-center gap-2">
          {/* Level */}
          <div className="flex items-center gap-1 rounded-full bg-[#F4F4F5] px-3 py-[4px]">
            <svg
              width="20"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#6D717A] md:w-6 md:h-6 w-4 h-4"
            >
              <path d="M4 20V10" />
              <path d="M9 20V4" />
              <path d="M14 20v-7" />
              <path d="M19 20V7" />
            </svg>

            <span className="md:text-[11px] text-[9px] text-[#656872]">{course.level}</span>
          </div>

          {/* Avatars */}
          <div className="flex items-center">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="-ml-1.5 md:h-8 md:w-8 w-6 h-6 overflow-hidden rounded-full first:ml-0"
              >
                <Image
                  src={avatar}
                  alt="Student"
                  width={20}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

            <span className="ml-[-2px] flex md:h-8 md:min-w-8 h-6 w-6 items-center justify-center rounded-full bg-[#C7FF00] px-1 text-[10px] font-normal text-[#253000]">
              {course.students}+
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-end gap-1">
          <span className="text-[18px] font-bold text-[#0755E8]">
            ${course.price}
          </span>

          <span className="pb-[1px] text-[11px] text-[#979AA3]">/Lifetime</span>
        </div>
      </div>
    </article>
  );
};

export default CourseSection;
