/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { EditNote } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LinksNavItems = ({ show }) => {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);
  const [openStates, setOpenStates] = useState({});
  const [hidden, setHidden] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSaved = (id) => {
    const updateLink = (link) => {
      if (link.id === id) {
        return { ...link, title: inputValue || link.title };
      }
      if (link.children) {
        return {
          ...link,
          children: link.children.map(updateLink),
        };
      }
      return link;
    };

    const updatedLinks = links.map(updateLink);

    if (JSON.stringify(links) !== JSON.stringify(updatedLinks)) {
      setLinks(updatedLinks);
      handleSendData(updatedLinks);
    }

    setEditingId(null);
    setInputValue("");
  };

  const handleSendData = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/nav", data);
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleChangeInput = (e, id) => {
    setInputValue(e.target.value);
    setEditingId(id);
  };

  const handleToggle = (id) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleHidden = (id) => {
    setHidden((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/nav");
        setLinks(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load navigation items.");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {links.map((element) => (
        <div key={element.id}>
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
                      <VisibilityOffIcon
                        onClick={() => handleHidden(element.id)}
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full flex gap-2">
                    <input
                      type="text"
                      value={
                        editingId === element.id ? inputValue : element.title
                      }
                      onChange={(e) => handleChangeInput(e, element.id)}
                      className="border p-2 rounded w-[80%] focus:outline-green-400"
                    />
                    <div className="flex items-center gap-2 text-gray-500">
                      <EditNote onClick={() => handleSaved(element.id)} />
                      <VisibilityIcon
                        onClick={() => handleHidden(element.id)}
                      />
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
          <DropdownMenu
            links={element.children}
            open={openStates[element.id]}
            handleSaved={handleSaved}
            handleChangeInput={handleChangeInput}
            handleHidden={handleHidden}
            editingId={editingId}
            inputValue={inputValue}
            hidden={hidden}
            show={show}
            openStates={openStates}
          />
        </div>
      ))}
    </ul>
  );
};

export default LinksNavItems;
