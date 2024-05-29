import FooterLink from "./responsive-footer-nav-link";

export default function Footer() {
  return (
    <>
      <footer className="w-full pt-8 bg-[#FF1B1B] bg-opacity-5 text-[#FF1B1B] flex flex-col justify-center items-center">
        <div className="w-[80%] md:w-[90%] lg:w-[40%] h-[80%] flex flex-col justify-center items-center">
          <img
            src="https://ik.imagekit.io/bqofr3ncj/tr:w-400, h-200/Projects/Re%CC%81seau__3_-removebg-preview.png?updatedAt=1716914654548"
            alt="Product logo"
            width="50"
            height="10"
            className="w-[20%] h-[5%] md:h-[10%] lg:h-[80%] lg:w-[30%] my-2"
          />
          <ul className="w-full my-2 flex flex-row justify-center items-start">
            <FooterLink text="Home" link="/" onclick={() => null} />
            <FooterLink
              text="Product"
              link="/product-section"
              onclick={() => null}
            />
            <FooterLink text="About" link="/about" onclick={() => null} />
            <FooterLink text="Support" link="/support" onclick={() => null} />
          </ul>
        </div>
        <div className="w-full flex flex-row justify-center items-center p-2 text-xs">
          <p className="bg-opacity-5">
            &copy; copyright powered by Genesis.dev
          </p>
        </div>
      </footer>
    </>
  );
}
