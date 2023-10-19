import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1  items-center justify-end mr-[5%] gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black
                relative  after:bg-slate-gray after:absolute after:h-[2px] after:w-0 after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
