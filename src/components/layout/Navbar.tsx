import { Logo } from "@/assets/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex justify-center items-center ">
        <div className="">
          <Logo></Logo>
        </div>
        <h1 className="text-2xl font-bold ml-2"> TASK Master</h1>
      </div>
      <Link to="/" className="border p-2 bg-red-400 rounded-2xl">
        {" "}
        Tasks{" "}
      </Link>
      <Link to="/users" className="border p-2 bg-red-400 rounded-2xl">
        {" "}
        Users{" "}
      </Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
