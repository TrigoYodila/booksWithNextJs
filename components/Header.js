import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useRouter } from "next/router";

const Header = () => {

  const router = useRouter();
  const [value, setValue] = useState(0);


  const handleChange = (e, value) => {
    setValue(value)
    if(value === 0) router.push("/")
    else if(value === 1) router.push("/books")
    else if(value === 2) router.push("/books/add")
  }

  return <AppBar position="sticky" sx={{bgcolor:"#c83576"}}>
    <Toolbar>
      <MenuBookIcon sx={{fontSize:"26px"}}/>
      <Box display="flex" margin={"auto"}>
        <Tabs onChange={handleChange} value={value} textColor="inherit">
          <Tab label="Home"/>
          <Tab label="All Books"/>
          <Tab label="Add New"/>
        </Tabs>
      </Box>
    </Toolbar>
  </AppBar>;
};

export default Header;
