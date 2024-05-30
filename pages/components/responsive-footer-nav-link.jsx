import { useRouter } from "next/router";
import Link from "next/link";

export default function FooterLink({ text, link, onclick }) {
  const router = useRouter();
  const isActive = router.asPath == link;

  return (
    <li
      className={`text-xl md:text-2xl lg:text-xl ${
        isActive ? "pb-1 mx-6 md:mx-7" : "mx-3 md:mx-6"
      }`}
    >
      <Link
        href={link}
        onClick={onclick}
        scroll={true}
        className={`${isActive ? "font-bold" : "font-light"}`}
      >
        {text}
      </Link>
    </li>
  );
}
