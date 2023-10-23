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
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import slideImg1 from "../assets/images/rich1.png";

const drawerWidth = 240;
const navItems = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];
const itemData = [
  {
    img: slideImg1,
    title: "Hello!",
    subTitle: "I am Richard Chifamba",
  },
  {
    img: slideImg1,
    title: "Hello!",
    subTitle: "I am Richard Chifamba",
  },
  {
    img: slideImg1,
    title: "Hello!",
    subTitle: "I am Richard Chifamba",
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
              <Button
                className={classes.btn}
                // style={{ textTransform: "none",fontSize:"16px" }}
                // style={styles.btn}
                key={item}
                sx={{ color: "#fff" }}>
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

      <Box component="main" className={classes.carouselSection}>
        <Carousel>
          {itemData.map((item) => (
            <Box className={classes.carousel}>
              <Box className={classes.text}>
                <Typography className={classes.carouselTitle}>
                  {item.title}
                </Typography>
                <Typography
                  variant="h3"
                  component="div"
                  className={classes.subTitle}>
                  I'm
                </Typography>
                <Typography variant="h3" className={classes.span}>
                  Richard Chifamba
                </Typography>
              </Box>
              <Box className={classes.img}>
                <img
                  srcSet={`${item.img}?w=948&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=948&fit=crop&auto=format`}
                  alt={item.title}
                />
              </Box>
              {/* <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh" // Adjust the height according to your needs
              >
                <img
                  src={item.img}
                  alt="Responsive Image"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </Box> */}
            </Box>
          ))}
        </Carousel>

        <Toolbar />
        <Button className={classes.root}>Styled with Hook API</Button>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam?
        </Typography>
      </Box>
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
    color: colors.primary.customBlue,
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
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },

  carouselSection: {
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
    padding: "80px 40px",
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
});

export default Home;
