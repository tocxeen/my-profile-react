import React from "react";

import {
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
  ArrowBack,
  Menu,
  Logout,
  Home,
  AddCircleOutline,
  Storage,
  AccountTree,
  ManageSearch,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { _logout } from "../redux/actions/authActions";
import { colors } from "../utils/Theme";

const drawerWidth = 190;
const version = "Version 1.0.0";
const v = "V 1.0.0";

const MyDrawer = (props) => {
  const location = useLocation();
  const classes = useStyles(location);

//   const dispatch = useDispatch();

  const drawerItems = [
    {
      name: "New Project",
      icon: <AddCircleOutline className={classes.sideIcon} />,
      link: "/new-project",
    },
    {
      name: "Dashboard",
      icon: <Home className={classes.sideIcon} />,
      link: "/dashboard",
    },

    {
      name: "Projects",
      icon: <AccountTree className={classes.sideIcon} />,
      link: "/projects",
    },

    {
      name: "Datasets",
      icon: <Storage className={classes.sideIcon} />,
      link: "/datasets",
    },

    {
      name: "Analysis",
      icon: <ManageSearch className={classes.sideIcon} />,
      link: "/analysis",
    },

    {
      name: "Logout",
      icon: (
        <Logout
          className={classes.sideIcon}
          style={{ marginLeft: 5, transform: "rotate(180deg)" }}
        />
      ),
      link: "/login",
    },
  ];

  const drawerAction = (name) => {};

  const drawerItem = (index, name, icon, link) => {
    return (
      <ListItem
        button
        key={index}
        className={
          location.pathname.includes(link)
            ? classes.activeItem
            : classes.listItem
        }
        onClick={() => drawerAction(name)}>
        {name === "Logout" ? (
          <div
            className={classes.link}
            // onClick={() => dispatch(_logout())}
            style={{ paddingLeft: 5 }}>
            {icon}
            <ListItemText primary={name} className={classes.text} />
          </div>
        ) : (
          <Link to={link} className={classes.link}>
            {icon}
            <ListItemText primary={name} className={classes.text} />
          </Link>
        )}
      </ListItem>
    );
  };

  const drawer = (
    <div style={{ height: "100%", backgroundColor: colors.primary.dark }}>
      {/* <img
        alt=""
        src={require("../../assets/dadv2.png").default}
        className={classes.logo}
      /> */}

      <h2 style={{ color: "#fff", margin: 0, marginLeft: 12, marginTop: 7 }}>
        {props.open ? "Richard's Tasks" : "RT"}
      </h2>
      <Grid
        container
        justifyContent={props.open ? "flex-end" : "center"}
        style={{ borderBottom: "1px solid " + colors.primary.main }}>
        <Grid item>
          <Button onClick={props._toggleBar}>
            {props.open ? (
              <ArrowBack className={classes.menuIcon} />
            ) : (
              <Menu className={classes.menuIcon} />
            )}
          </Button>
        </Grid>
      </Grid>

      <List style={{ padding: 0 }}>
        {drawerItems.map(({ name, icon, link }, index) => {
          return drawerItem(index, name, icon, link);
        })}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: props.open ? classes.drawerOpen : classes.drawerClose,
      }}>
      <div className={classes.whiteMargin} />
      {drawer}
      <div className={classes.version}>{props.open ? version : v}</div>
      <div className={classes.whiteMarginBottom} />
    </Drawer>
  );
};

MyDrawer.propTypes = {};

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  logo: {
    width: "55%",
    marginLeft: "20%",
    marginTop: 15,
    marginBottom: 15,
  },

  version: {
    color: "#fff",
  },
  // drawerPaper: {
  //   width: drawerWidth,
  //   border: "none",
  //   backgroundColor: "#008E85",
  // },

  whiteMargin: {
    // height: 20,
    backgroundColor: "#fff",
  },

  whiteMarginBottom: {
    // height: 20,
    backgroundColor: "#ebebeb",
  },

  drawerOpen: {
    backgroundColor: "#000",
    border: "none",
    width: drawerWidth,
    overflowX: "hidden",
    // transition: theme.transitions.create("width", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },

  drawerClose: {
    backgroundColor: "#000",
    border: "none",
    // transition: theme.transitions.create("width", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),

    overflowX: "hidden",
    width: 55,
  },

  listItem: {
    padding: 0,
    borderBottom: "1px solid " + colors.primary.main,
    "&:hover": {
      backgroundColor: colors.primary.main,
      borderLeft: "5px solid #fff",
      "& a span": {
        fontWeight: "bold",
      },
    },
  },

  activeItem: {
    padding: 0,
    backgroundColor: colors.primary.main,
    borderLeft: "5px solid " + colors.primary.light,
    "&:hover": {
      backgroundColor: colors.primary.main,
      fontWeight: "400",
    },
    "& a span": {
      color: colors.primary.light,
      fontWeight: "bold",
    },
    "& a svg": {
      color: colors.primary.light,
    },

    "&:hover a span": {
      fontWeight: "400",
    },
  },

  link: {
    display: "flex",
    textDecoration: "none",
    padding: "10px 6px 10px 12px",
    // minWidth: drawerWidth - 32,
    color: "#fff",
  },

  menuIcon: {
    margin: "6px 0px",
    color: "#fff",
    "&:hover": {
      backgroundColor: colors.primary.main,
      borderRadius: 5,
    },
  },
  sideIcon: {
    marginRight: 20,
    width: 25,
    height: 25,
  },
}));

export default MyDrawer;
