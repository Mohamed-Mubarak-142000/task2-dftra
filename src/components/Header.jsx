// Header.js
import { InputBase, IconButton, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header className="bg-gray-900 p-2 flex items-center justify-between flex-wrap lg:px-20">
      <div className="flex items-center flex-shrink-0 text-white">
        <h1 className="text-xl font-bold uppercase ">
          i<span className="text-green-600">s</span>am
        </h1>
      </div>

      <div className="relative flex-1 lg:max-w-md mx-4">
        <InputBase
          placeholder="Search…"
          className="w-full bg-gray-100 text-white rounded-full py-1 px-4"
          endAdornment={
            <IconButton
              type="submit"
              aria-label="search"
              className="absolute inset-y-0 right-0 pr-2"
            >
              <SearchIcon />
            </IconButton>
          }
        />
      </div>

      <nav className="flex space-x-4">
        <Link to="/" className="text-white hover:text-green-600 cursor-pointer">
          Home
        </Link>
        <Link
          to="/job"
          className="text-white hover:text-green-600 cursor-pointer"
        >
          Job
        </Link>
      </nav>
    </header>
  );
};

export default Header;
