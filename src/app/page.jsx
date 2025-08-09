import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section>
      <div className="h-full flex items-center">
        <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 block mt-2">
              Hello I'm <br />
              <span className="text-accent block mt-2">
                Muhammad <br />
                <span className="block mt-2">Huzaifa Yousaf</span>
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-center xl:text-left mx-auto xl:mx-0">
              I specialize in developing interactive digital solutions, leveraging my expertise in programming and modern technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="assets/M.Huzaifa Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
