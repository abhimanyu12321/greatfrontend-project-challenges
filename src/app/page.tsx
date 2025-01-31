import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-wrap gap-4 max-w-[60rem] mx-auto">
      <Link
        href={"/blogcard"}
        className="hover:text-blue-700 text-4xl font-bold"
      >
        Blogcard
      </Link>
    </div>
  );
}
