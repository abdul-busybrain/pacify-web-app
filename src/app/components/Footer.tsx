import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/case-study", text: "Our Work" },
    { href: "/faq", text: "FAQ" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact us" },
  ];

  const socialLinks = [
    {
      name: "X",
      href: "https://x.com/tar_metaverse",
      icon: "M 16.641 5 L 19.095 5 L 13.735 10.93 L 20.041 19 L 15.103 19 L 11.236 14.106 L 6.811 19 L 4.356 19 L 10.09 12.657 L 4.041 5 L 9.103 5 L 12.599 9.474 Z",
    },
    {
      name: "Instagram",
      href: "http://instagram.com/takeaway_reality",
      icon: "M 4 8.667 C 4 6.089 6.089 4 8.667 4 L 15.333 4 C 17.911 4 20 6.089 20 8.667 L 20 15.333 C 20 17.911 17.911 20 15.333 20 L 8.667 20 C 6.089 20 4 17.911 4 15.333 Z M 15.333 7.333 C 15.322 7.817 15.574 8.268 15.991 8.513 C 16.408 8.758 16.924 8.758 17.341 8.513 C 17.758 8.269 18.01 7.817 17.999 7.334 C 17.983 6.609 17.391 6.03 16.667 6.03 C 15.942 6.03 15.35 6.609 15.333 7.333 Z M 8.667 12 C 8.667 13.841 10.16 15.334 12.001 15.333 C 13.842 15.333 15.334 13.84 15.334 11.999 C 15.334 10.158 13.841 8.666 12 8.666 C 10.159 8.666 8.666 10.159 8.667 12 Z",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/takeaway-reality",
      icon: "M 4 7 C 4 5.343 5.343 4 7 4 L 17 4 C 18.657 4 20 5.343 20 7 L 20 17 C 20 18.657 18.657 20 17 20 L 7 20 C 5.343 20 4 18.657 4 17 Z M 8.85 17.393 L 8.85 10.169 L 6.434 10.169 L 6.434 17.393 Z M 7.642 9.182 C 8.484 9.182 9.009 8.628 9.009 7.934 C 8.993 7.225 8.484 6.686 7.658 6.686 C 6.831 6.686 6.291 7.225 6.291 7.934 C 6.291 8.628 6.815 9.182 7.626 9.182 Z M 10.187 17.394 C 10.187 17.394 10.187 17.394 10.187 17.393 L 10.187 17.393 Z M 12.604 17.393 L 12.604 13.359 C 12.604 13.143 12.62 12.928 12.683 12.773 C 12.858 12.342 13.256 11.895 13.923 11.895 C 14.798 11.895 15.148 12.557 15.148 13.529 L 15.148 17.393 L 17.564 17.393 L 17.564 13.251 C 17.564 11.032 16.372 9.999 14.782 9.999 C 13.5 9.999 12.925 10.699 12.604 11.192 L 12.604 10.169 L 10.187 10.169 C 10.219 10.844 10.188 17.351 10.187 17.393 Z",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@TAR-TV",
      icon: "M 23 12 C 23 12 23 15.487 22.54 17.158 C 22.285 18.082 21.544 18.804 20.595 19.052 C 18.88 19.5 12 19.5 12 19.5 C 12 19.5 5.12 19.5 3.405 19.052 C 2.456 18.803 1.715 18.082 1.46 17.158 C 1 15.487 1 12 1 12 C 1 12 1 8.513 1.46 6.842 C 1.715 5.918 2.456 5.197 3.405 4.948 C 5.12 4.5 12 4.5 12 4.5 C 12 4.5 18.88 4.5 20.595 4.948 C 21.544 5.197 22.285 5.918 22.54 6.842 C 22.998 8.513 23 12 23 12 Z M 9.798 14.359 C 9.798 14.742 10.21 14.983 10.543 14.795 L 14.738 12.436 C 15.078 12.245 15.078 11.756 14.738 11.564 L 10.543 9.205 C 10.21 9.018 9.798 9.259 9.798 9.641 Z",
    },
  ];

  return (
    <footer className="bg-[#0f0825] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={null}
            alt="Logo of Takeaway Reality"
            width={150}
            height={50}
            className="mb-8"
          />
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition duration-300"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Pacifylabs Technologies Limited • </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
