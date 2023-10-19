import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import MyDrawer from "./MyDrawer";

const Layout = ({ children, location }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <MyDrawer
        location={location}
        _toggleBar={() => setOpen(!open)}
        open={open}
      />
      <div className={classes.content}>
        <main className="main">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    width: "100%",
  },
}));

export default Layout;
