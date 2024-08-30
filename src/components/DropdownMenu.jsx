/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { EditNote } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ExpandLessIcon } from "@mui/icons-material/ExpandLess";
import { ExpandMoreIcon } from "@mui/icons-material/ExpandMore";

const DropdownMenu = ({
  links,
  open,
  handleSaved,
  handleChangeInput,
  handleHidden,
  editingId,
  inputValue,
  hidden,
  show,
  openStates,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.style.height = open
        ? `${dropdownRef.current.scrollHeight}px`
        : "0px";
    }
  }, [open]);

  return (
    <ul
      ref={dropdownRef}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        open ? "opacity-100" : "opacity-0"
      } ml-5`}
    >
      {links?.map((link) => (
        <li
          className="capitalize bg-gray-100 p-2 text-[18px] rounded my-2 flex justify-between items-center"
          key={link.id}
        >
          {show ? (
            <>
              {hidden[link.id] ? (
                <>
                  <p className="text-gray-500">{link.title}</p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <EditNote onClick={() => handleSaved(link.id)} />
                    <VisibilityOffIcon onClick={() => handleHidden(link.id)} />
                  </div>
                </>
              ) : (
                <div className="w-full flex gap-2">
                  <input
                    type="text"
                    value={editingId === link.id ? inputValue : link.title}
                    onChange={(e) => handleChangeInput(e, link.id)}
                    className="border p-2 rounded w-[80%] focus:outline-green-400"
                  />
                  <div className="flex items-center gap-2 text-gray-500">
                    <EditNote onClick={() => handleSaved(link.id)} />
                    <VisibilityIcon onClick={() => handleHidden(link.id)} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-between w-full">
              <p>{link.title}</p>
              {link.children &&
                (openStates[link.id] ? (
                  <ExpandLessIcon className="ml-2" />
                ) : (
                  <ExpandMoreIcon className="ml-2" />
                ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
export default DropdownMenu;
