import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CardContent from "./CardContent";
import HeaderContent from "./HeaderContent";

const Content = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-end gap-4">
        <p>Sorting by:</p>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <HeaderContent />
      <CardContent />
    </>
  );
};

export default Content;
