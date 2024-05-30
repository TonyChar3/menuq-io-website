import Link from "next/link";

export default function SupportOptionCard({ link, option, img }) {
  return (
    <>
      <Link
        href={link}
        className="w-[50%] md:w-[30%] lg:w-[25%] my-2 md:my-4 p-3 border border-gray-300 text-center rounded-lg shadow-md shadow-gray-400 active:scale-[0.90] hover:scale-[1.01] ease transition-all ease duration-300"
      >
        <img
          src={img}
          alt="Question mark image"
          width="100"
          height="100"
          className="w-[40%] mx-auto"
        />
        <span className="text-gray-800 font-light">{option}</span>
      </Link>
    </>
  );
}
