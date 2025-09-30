import Image from "next/image";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Quality Work",
    subheading: "We provide quality work to our clients",
  },
  {
    heading: "Skilled Personnel",
    subheading:
      "We have a team to skilled personnel that have years of field experience.",
  },
  {
    heading: "Reliability",
    subheading: "We deliver what we promise",
  },
];

const Why = () => {
  return (
    <div id="about">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* COLUMN-1 */}
          <div className="lg:-ml-64">
            <Image
              src="/assets/why/photographer.jpg"
              alt="iPad-image"
              width={4000}
              height={900}
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              About us
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              We are dedicated to delivering exceptional creative solutions with
              a focus on quality, communication, and reliability.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div
                    className="rounded-full flex items-center justify-center bg-circlebg"
                    style={{
                      minWidth: "2.5rem",
                      maxWidth: "2.5rem",
                      minHeight: "2.5rem",
                      maxHeight: "2.5rem",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src="/assets/why/check.svg"
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
