/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { EditNote } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ITEM_TYPE = "NAV_ITEM";

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
      {links?.map((link, index) => (
        <DraggableNavItem
          key={link.id}
          element={link}
          index={index}
          moveLink={() => {}}
          handleToggle={() => {}}
          handleSaved={handleSaved}
          handleChangeInput={handleChangeInput}
          handleHidden={handleHidden}
          show={show}
          openStates={openStates}
          hidden={hidden}
          editingId={editingId}
          inputValue={inputValue}
        />
      ))}
    </ul>
  );
};

const DraggableNavItem = ({
  element,
  index,
  moveLink,
  handleToggle,
  handleSaved,
  handleChangeInput,
  handleHidden,
  show,
  openStates,
  hidden,
  editingId,
  inputValue,
}) => {
  const [, ref] = useDrag({
    type: ITEM_TYPE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (item) => {
      if (item.index !== index) {
        moveLink(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <li
        onClick={() => handleToggle(element.id)}
        className="capitalize hover:text-green-600 cursor-pointer bg-gray-100 p-2 text-[18px] rounded my-2 flex justify-between items-center"
      >
        {show ? (
          <div className="flex items-center justify-between gap-2 w-[100%]">
            {hidden[element.id] ? (
              <>
                <p className="text-gray-500">{element.title}</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <EditNote onClick={() => handleSaved(element.id)} />
                  <VisibilityOffIcon onClick={() => handleHidden(element.id)} />
                </div>
              </>
            ) : (
              <div className="w-full flex gap-2">
                <input
                  type="text"
                  value={editingId === element.id ? inputValue : element.title}
                  onChange={(e) => handleChangeInput(e, element.id)}
                  className="border p-2 rounded w-[80%] focus:outline-green-400"
                />
                <div className="flex items-center gap-2 text-gray-500">
                  <EditNote onClick={() => handleSaved(element.id)} />
                  <VisibilityIcon onClick={() => handleHidden(element.id)} />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <p>{element.title}</p>
            {element.children &&
              (openStates[element.id] ? (
                <ExpandLessIcon className="ml-2" />
              ) : (
                <ExpandMoreIcon className="ml-2" />
              ))}
          </div>
        )}
      </li>
    </div>
  );
};

export default DropdownMenu;
