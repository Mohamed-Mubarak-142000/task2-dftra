import { useState } from "react";
import Layout from "./../layout/Layout";
import SettingsIcon from "@mui/icons-material/Settings";
import LinksNavItems from "../components/LinksNavItems";
import Content from "../components/Content";
import { ArrowBackIos, List } from "@mui/icons-material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleToggle = () => setOpen(!open);

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <div className="flex flex-col lg:flex-row gap-2 lg:px-20 lg:mx-2 p-4">
          {/** Render settings icon */}
          <section
            className={`lg:w-1/3 p-4 min-h-[80vh] my-4 lg:my-10 rounded-md shadow-md bg-white lg:static hidden lg:block`}
          >
            <div className="flex items-center justify-end gap-2 cursor-pointer">
              <SettingsIcon onClick={handleShow} />
            </div>
            <div className="min-h-[80vh] my-4 lg:my-10 p-4 rounded-md">
              {/* Menu Content */}
              <LinksNavItems show={show} />
            </div>
          </section>

          {/** Render content mobile view */}
          <section className="lg:hidden">
            <div
              onClick={handleToggle}
              className="w-full flex items-center justify-center gap-2 p-2 bg-white text-xl font-semibold"
            >
              Companies <List />
            </div>
            <div
              className={`fixed top-0 left-0 bg-white min-h-[100%] transition-all duration-300 ease-in-out ${
                open ? "w-full z-50" : "left-[-100%]"
              } lg:my-10 p-4 rounded-md`}
            >
              <div className="w-full flex items-center justify-between gap-2 cursor-pointer p-2">
                <ArrowBackIos onClick={handleToggle} />
                <SettingsIcon onClick={handleShow} />
              </div>
              {/* Menu Content */}
              <LinksNavItems show={show} />
            </div>
          </section>

          {/** Render content */}
          <section className="w-full min-h-[80vh] my-4 lg:my-10 p-4 rounded-md shadow-md bg-white">
            <div className="text-lg font-semibold mb-4">
              <Content />
            </div>
          </section>
        </div>
      </Layout>
    </DndProvider>
  );
};

export default Home;
