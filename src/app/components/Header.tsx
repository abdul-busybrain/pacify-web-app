import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:px-8 bg-transparent ml-4 mr-4 rounded-t-[50px] mt-4">
      <Link href={"/"} className="">
        {/* <Image src={"/images/logo.png"} height={120} width={120} alt="Logo" /> */}
        <p className="rounded-full  bg-white  p-4 text-purple-500 font-bold text-lg">
          Pacifylabs
        </p>
      </Link>

      <nav>
        <ul className="flex gap-8 rounded-full bg-purple-500/50 p-4">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/products", label: "Products" },
            { href: "/faq", label: "FAQ" },
            { href: "/blog", label: "Blog" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors rounded-full px-2 py-2 ${
                  pathname === href
                    ? "bg-white text-purple-500 "
                    : "hover:bg-white hover:text-purple-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href={"#"}>
        <Button
          size="large"
          className="rounded-full p-4 text-purple-500 font-bold text-lg"
        >
          Contact Us
        </Button>
      </Link>
    </header>
  );
}

export default Header;
