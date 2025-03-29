import fblogo from "../../public/Images/1d3db940e03e1b44e795aad98ab747b1-removebg-preview.png";
import ytLogo from "../../public/Images/ytLogo.png";
import xLogo from "../../public/Images/xlogo.png";
import instaLogo from "../../public/Images/insta.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-1 w-full h-auto md:h-[80vh] bg-[#0f1d3e] text-[rgb(54,62,77)] flex justify-center items-center">
      <div className="w-[85%] h-[99%] flex flex-col items-center">
        <div className="w-full h-[15vh] md:h-[25%] flex items-center justify-between">
          <div className="w-1/3 h-10 flex gap-2 items-center cursor-pointer text-[rgb(208,153,53)] ">
            <img
              src="https://i.pinimg.com/736x/0d/d5/7b/0dd57bbab486abd76aa3106def8a1490.jpg"
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <p className="text-[10px] font-bold sm:text-base sm:block">
              NEXT.JS
            </p>
          </div>
          <div className="w-1/4 h-10 flex items-center justify-end gap-3">
            <div className="w-8 h-8 bg-[rgb(208,153,53)] flex items-center justify-center rounded-full flex-none hover:bg-[rgb(147,99,17)]">
              <Image src={fblogo} alt="F" className="w-7 h-7 object-contain" />
            </div>
            <div className="w-8 h-8 bg-white hover:bg-[rgb(208,153,53)] flex  rounded-full justify-center items-center flex-none">
              <Image
                src={instaLogo}
                alt="F"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className="w-8 h-8  bg-white hover:bg-[rgb(208,153,53)] flex rounded-full justify-center items-center flex-none">
              <Image src={xLogo} alt="F" className="w-5 h-5 object-contain" />
            </div>
            <div className="w-8 h-8 bg-white hover:bg-[rgb(208,153,53)] flex rounded-full justify-center items-center flex-none">
              <Image src={ytLogo} alt="F" className="w-5 h-5 object-contain" />
            </div>
          </div>
        </div>
        <div className="w-full h-[60%] pt-4 border-t-[1.5px] flex justify-between items-center border-b-[1.5px] border-[rgb(54,62,77)]">
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="h-full py-3 flex flex-col gap-3">
              <p className="text-[rgb(157,165,178)] hover:text-[rgb(208,153,53)] cursor-pointer text-base font-bold">
                Next.JS
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light cursor-pointer hover:text-[rgb(208,153,53)]">
                About
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light cursor-pointer hover:text-[rgb(208,153,53)]">
                Home
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light cursor-pointer hover:text-[rgb(208,153,53)]">
                Pricing
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light cursor-pointer hover:text-[rgb(208,153,53)]">
                Pro Version
              </p>
            </div>
            <div className="h-full py-3 flex flex-col gap-3">
              <p className="text-[rgb(157,165,178)] hover:text-[rgb(208,153,53)] cursor-pointer text-base font-bold">
                Products
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                Figma UI system
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                Icons Assets
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                Responsive Blocks
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                Component Library
              </p>
            </div>
            <div className="h-full py-3 flex flex-col gap-3">
              <p className="text-[rgb(157,165,178)] hover:text-[rgb(208,153,53)] cursor-pointer text-base font-bold">
                Resources
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                FAQs
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                Quick Start
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                Documentations
              </p>
              <p className="text-[rgb(79,87,102)] text-sm font-light hover:text-[rgb(208,153,53)] cursor-pointer">
                User Guide
              </p>
            </div>

            <div className="h-full py-3 flex flex-col gap-3 md:col-span-2 lg:col-span-2 xl:col-span-2">
              <p className="text-[rgb(157,165,178)] text-base font-bold hover:text-[rgb(208,153,53)] cursor-pointer">
                Newsletter
              </p>

              <div className="w-full h-3/5 bg-[rgb(32,41,56)] rounded-4xl flex flex-col gap-2 p-5">
                <p className="text-[rgb(107,116,134)] text-sm font-light">
                  Email
                </p>

                <div className="w-full flex items-center h-[15vh] sm:h-3/4 md:w-full gap-1">
                  <input
                    className="w-4/5 h-8 rounded-4xl px-4 text-sm border-2 outline-0 border-gray-500 focus:hover:border-[rgb(147,99,17)] text-[rgb(107,116,134)] placeholder-[rgb(107,116,134)]"
                    type="email"
                    placeholder="mail@email.com"
                    aria-label="Email address"
                  />

                  <div className="w-15 h-8 bg-[rgb(208,153,53)] flex justify-center hover:bg-[rgb(147,99,17)] hover:cursor-pointer items-center text-white rounded-md">
                    Send
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[10vh] sm:h-[15%] flex items-center justify-end pt-4">
          <p className="text-[rgb(79,87,102)] text-sm font-light cursor-pointer hover:text-[rgb(208,153,53)]">
            @Next.JS, 2025. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
