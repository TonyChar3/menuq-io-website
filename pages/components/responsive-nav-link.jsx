import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ text, link, onclick }) {
  const router = useRouter();
  const isActive = router.asPath == link;

  return (
    <li
      className={`my-4 md:my-7 lg:my-4 text-xl w-full md:text-2xl lg:text-xl ${
        isActive ? "pb-1 pl-5 md:pl-8 lg:px-6" : "px-3 md:px-6"
      }`}
    >
      <Link
        href={link}
        onClick={onclick}
        className={`${isActive ? "font-bold" : "font-light"}`}
      >
        {text}
      </Link>
    </li>
  );
}
