import {Button, Navbar, TextInput} from "flowbite-react";
import {Link, useLocation} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {FaMoon} from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2 my-2 pb-2" fluid>
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
          <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Htoo's
          </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search blogs..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="lg:hidden" pill color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="sign-in">
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          active={path === "/"}
          className="block lg:inline-block w-full lg:w-auto"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          active={path === "/about"}
          className="block lg:inline-block w-full lg:w-auto"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/projects"
          active={path === "/projects"}
          className="block lg:inline-block w-full lg:w-auto"
        >
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;