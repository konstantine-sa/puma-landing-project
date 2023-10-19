import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img
              src={footerLogo}
              alt="Puma logo"
              width={150}
              height={46}
              className="max-sm:w-[90px]"
            />
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Besorgen Sie sich Schuhe für das neue Semester in Ihrem nächsten
            Nike-Store. Finden Sie Ihre perfekte Größe im Geschäft. Erhalten Sie
            Belohnungen.
          </p>

          <div className="flex max-sm:justify-center w-full">
            <div className="flex items-center gap-5 mt-8 ">
              {socialMedia.map((icon) => (
                <div
                  key={icon.src}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-gray-500"
                >
                  <img src={icon.src} icon={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul className="text-white">
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer
                     hover:text-slate-gray  underline-offset-4 transition-all duration-300"
                  >
                    <a
                      className="relative  after:bg-slate-gray after:absolute after:h-[2px] 
                    after:w-0 after:bottom-[-2px] after:left-0 hover:after:w-full 
                    after:transition-all after:duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-start max-sm:text-[12px]">
        <div className="flex flex-1 justify-start items-start gap-2 ">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full  m-0 max-sm:w-[12px] max-sm:mt-1"
          />
          <p className="font-montserrat cursor-pointer ">
            Urheberrecht. Alle Rechte gehören ihren respektiven Eigentümern.
          </p>
        </div>
        <p className="font-montserrat cursor-pointer max-sm:mt-3 max-sm:ml-5">
          Allgemeine Geschäftsbedingungen
        </p>
      </div>
    </footer>
  );
}

export default Footer;
