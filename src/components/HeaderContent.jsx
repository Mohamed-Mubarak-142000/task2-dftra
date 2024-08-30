import { useState } from "react";
import { Switch } from "@mui/material";

const HeaderContent = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="bg-green-700 min-h-[150px] px-10 border border-green-700 p-2 text-white rounded-md flex justify-between items-center flex-wrap">
      <div>
        <h1 className="text-3xl">UI Designer in Egypt</h1>
        <h5 className="text-xl my-2 font-normal">70 job positions</h5>
      </div>

      <div className="flex items-center">
        <p className="mr-2">Set Alert:</p>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  );
};

export default HeaderContent;
