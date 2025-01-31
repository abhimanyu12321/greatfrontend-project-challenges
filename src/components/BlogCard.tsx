import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function BlogCard() {
  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center "
        style={{
          background:
            "linear-gradient(147.52deg, #F9FAFB 8.89%, #D2D6DB 100.48%)",
        }}
      >
        <div className="max-w-[21.25rem]  rounded-lg shadow-md bg-white mx-2">
          <img
            src="/blogcard/blog-1.jpg"
            alt="blog-image"
            className="h-[18rem] w-full object-cover rounded-t-lg"
          />
          <p className="ml-4 my-2">
            <span className="bg-green-200 text-green-700  p-1 rounded-full text-sm px-2">
              Interior
            </span>
          </p>
          <p className="ml-4 mb-2 font-bold text-lg">
            Top 5 Living Room Inspirations
          </p>
          <p className="ml-4 text-lg text-neutral-600">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <button className="ml-4 mt-6 mb-8 text-indigo-700 flex items-center gap-2 font-semibold">
            Read more{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4763 6.16658L6.00633 1.69657L7.18483 0.518066L13.6667 6.99992L7.18483 13.4817L6.00633 12.3032L10.4763 7.83325H0.333328V6.16658H10.4763Z"
                fill="#4338CA"
              />
            </svg>
          </button>
        </div>
      </div>

      <Link
        href={"/"}
        className="hover:text-blue-700 absolute top-4 left-4 text-4xl font-bold"
      >
        Home
      </Link>
    </>
  );
}
