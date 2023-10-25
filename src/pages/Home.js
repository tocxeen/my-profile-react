import "../styles/home.css";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { colors } from "../utils/Theme";
import Carousel from "react-material-ui-carousel";
import slideImg1 from "../assets/images/rich1.png";
import slideImg2 from "../assets/images/rich2.png";
import profilePicture from "../assets/images/richard.png";
import { Grid, Paper } from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];
const itemData = [
  {
    img: slideImg1,
    title: "Hello!",
    subTitle: "I'm",
    span: "Richard Chifamba",
    subTitle2: "",
    job: "A Software Developer",
  },
  {
    img: slideImg2,
    title: "Hey!",
    subTitle: "Check my",
    span: "Skills and Resume",
    subTitle2: "below",
    job: "",
  },
  {
    img: slideImg1,
    title: "Yooh!",
    subTitle: "Projects and my",
    span: "Career path",
    subTitle2: "",
    job: "",
  },
];

function Home(props) {
  const { window } = props;
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className={classes.navBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Richard
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button className={classes.btn} key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>

      <Grid
        container
        spacing={1}
        justifyContent="center"
        className={classes.carouselSection}>
        <Grid xs={12} sx={{ marginTop: "206px", marginBottom: "100px" }}>
          <Carousel>
            {itemData.map((item) => (
              <Box className={classes.carousel}>
                <Box className={classes.text}>
                  <Typography className={classes.carouselTitle}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h2"
                    component="div"
                    className={classes.subTitle}>
                    {item.subTitle}{" "}
                    <span variant="h2" className={classes.span}>
                      {item.span}
                      <br />
                      {item.subTitle2}
                    </span>
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    className={classes.param}>
                    {item.job} <br />
                    <Button className={classes.root}>My Skills</Button>
                  </Typography>
                </Box>
                <Box className={classes.img}>
                  <img
                    srcSet={`${item.img}?w=948&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=948&fit=crop&auto=format`}
                    alt={item.title}
                    height="100%"
                  />
                </Box>
              </Box>
            ))}
          </Carousel>
          <Toolbar />
        </Grid>
        <Grid xs={4}>
          <Box className={classes.img}>
            <img
              srcSet={`${profilePicture}?w=948&fit=crop&auto=format&dpr=2 2x`}
              src={`${profilePicture}?w=948&fit=crop&auto=format`}
              alt={"Richard"}
              height="100%"
            />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Typography className={classes.about} variant="h3" component="div">
            About Me
          </Typography>
          <Typography className={classes.aboutSub} sx={{ marginTop: "30px" }}>
            A young innovative man who has 4+ years of experience in software
            development.
          </Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography sx={{ marginTop: "15px" }}>
                    <span className={classes.aboutBold}>Name:</span>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ marginTop: "15px" }}>
                    <span className={classes.aboutLight}>
                      Richard Kumbirai Chifamba
                    </span>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Typography sx={{ marginTop: "15px" }}>
            <span className={classes.aboutBold}>
              Date of Birth:{"               "}
            </span>
            <span className={classes.aboutLight}>09/97</span>
          </Typography>
          <Typography sx={{ marginTop: "15px" }}>
            <span className={classes.aboutBold}>
              Address:{"               "}
            </span>
            <span className={classes.aboutLight}>Harare, Zimbawe</span>
          </Typography>
          <Typography sx={{ marginTop: "15px" }}>
            <span className={classes.aboutBold}>Email:{"               "}</span>
            <span className={classes.aboutLight}>
              chifambarichard2@gmail.com
            </span>
          </Typography>
          <Typography sx={{ marginTop: "15px" }}>
            <span className={classes.aboutBold}>Phone:{"   "}</span>
            <span className={classes.aboutLight}>+263782 428 177</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

const useStyles = makeStyles({
  navBar: {
    background: "#000 !important",
    padding: "0 200px",
    boxShadow: "none !important",
  },

  title: {
    color: colors.primary.white,
    fontWeight: "900 !important",
    textTransform: "uppercase",
  },

  btn: {
    textTransform: "none !important",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "0px",

    "&:hover": {
      color: "#00878a",
      borderRadius: "0px",
      borderBottom: "2px solid #00878a",
    },
  },

  carouselSection: {
    width: "100vw",
    marginTop: "7vh",
    background: "#000",
  },

  carousel: {
    display: "flex",
    height: "60vh",
  },

  img: {
    width: "50vw",
    flex: 1,
    height: "inherit",
  },

  text: {
    width: "50vw",
    flex: 1,
    height: "inherit",
    padding: "100px 90px 160px 240px",
  },

  carouselTitle: {
    color: colors.primary.contrastText,
    fontWeight: "900 !important",
    textTransform: "uppercase",
  },

  subTitle: {
    color: colors.primary.contrastText,
    fontWeight: "900 !important",
    textTransform: "titlecase",
  },

  span: {
    color: colors.primary.customBlue,
    fontWeight: "900 !important",
    textTransform: "titlecase",
  },

  param: {
    color: colors.primary.contrastText,
    marginTop: "20px",
  },

  root: {
    background: "transparent",
    border: "1px solid #fff !important",
    borderRadius: "30px !important",
    color: "#fff !important",
    height: 48,
    padding: "10px 30px !important",
  },

  about: {
    color: "#fff",
    fontWeight: "900 !important",
  },
  aboutSub: {
    color: "#fff",
  },
  aboutBold: {
    color: "#fff",
    fontWeight: "800 !important",
  },
  aboutLight: {
    color: "gray",
  },
  textWhite: {
    color: "white",
  },
  table: {
    border: "none",
  },
});

export default Home;
