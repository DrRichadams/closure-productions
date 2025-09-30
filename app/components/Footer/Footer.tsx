import Link from "next/link";
import Image from "next/image";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  link: string[];
}

const footer_links: ProductType[] = [
  {
    id: 1,
    link: ["Home", "About"],
  },
  {
    id: 2,
    link: ["Services"],
  },
];

const footer = () => {
  return (
    <div className="bg-darkblue -mt-40">
      <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <img
              src={"/assets/logo/logo.png"}
              alt="logo"
              className="pb-8 max-w-[250px]"
            />
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/closureproductions1"
                className="footer-fb-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/assets/footer/facebook.svg"}
                  alt="facebook"
                  width={15}
                  height={20}
                />
              </Link>
              <Link
                href="https://x.com/closureproducti"
                className="footer-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/assets/footer/twitter.svg"}
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href="https://www.instagram.com/closure_productions_/"
                className="footer-icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={"/assets/footer/instagram.svg"}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {footer_links.map((footer_link) => (
            <div
              key={footer_link.id}
              className="group relative col-span-2 md:col-span-4 lg:col-span-2"
            >
              <ul>
                {footer_link.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-white text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4 md:col-span-4 lg:col-span-4">
            <div className="flex gap-2">
              <Image
                src={"/assets/footer/mask.svg"}
                alt="mask-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                9 Buckingham, Eastlea, Harare, Zimbabwe
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Image
                src={"/assets/footer/telephone.svg"}
                alt="telephone-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                +263 776 193 195
              </h5>
            </div>
            {/* <div className="flex gap-2 mt-10">
              <Image
                src={"/assets/footer/email.svg"}
                alt="email-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                info@gmail.com
              </h5>
            </div> */}
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 lg:flex items-center justify-between border-t border-t-bordertop">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            @2025 Closure Productions{" "}
            <span className="text-bordertop">All rights reserved</span>
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
