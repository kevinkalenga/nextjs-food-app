"use client" 
import { useState, useEffect } from "react" 
import {
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Badge,
} from "@mui/material";
import CompareIcon from '@mui/icons-material/Compare';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";

const Nav = () => {
    
    const theme = useTheme() 
    const router = useRouter()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const [anchorEI, setAnchorEI] = useState(null)

      const toggleMobileDrawer = (open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        setMobileDrawerOpen(open);
      };
    
    
    
    
    
    const handleClick = (event) => {
      setAnchorEI(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEI(null)
    }
    
    
    
    
    const menuItem = (
      <>
        <Link href="/" passHref>
           <Button 
             sx={{
              color: "black",
              fontSize: isSmallScreen ? "0.8rem" : "1rem",
             }}
           >
             Home
           </Button>
        </Link>
        <Link href="/about" passHref>
           <Button 
             sx={{
              color: "black",
              fontSize: isSmallScreen ? "0.8rem" : "1rem",
             }}
           >
             About 
           </Button>
        </Link>
        <Link href="/contact" passHref>
           <Button 
             sx={{
              color: "black",
              fontSize: isSmallScreen ? "0.8rem" : "1rem",
             }}
           >
             Contact 
           </Button>
        </Link>
        <Link href="/" passHref>
           
            <>
            <Button
              sx={{
                color: "black",
                fontSize: isSmallScreen ? "0.8rem" : "1rem",
              }}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Pages
            </Button>

            <Menu
              anchorEl={anchorEI}
              open={Boolean(anchorEI)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>
                  About
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link href="/service" style={{ textDecoration: "none", color: "inherit" }}>
                  Service
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </>
        
        
        
        
        
        
        
        </Link>
      
      
      
      
      
      </>
    )
    
    
    return (
      <Box
          sx={{
            width:"100%",
            backgroundColor:"white",
            boxShadow:3,
            padding:isSmallScreen ? "0.5rem 0" : "1rem 0",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Box
           sx={{
            display:"flex",
            justifyContent: "space-between",
            alignItems: "center",
            width:"90%",
            margin:"0 auto",
            flexDirection: isSmallScreen ? "column" : "row"
           }}
          >

           <Box
            sx={{
                 display:"flex",
                justifyContent: isSmallScreen ? "space-between":"flex-start",
                alignItems: "center",
                width:isSmallScreen ? "100%":"auto",
                marginBottom: isSmallScreen ? "1rem":0

            }}
           >
            {isSmallScreen && (
              <IconButton>
                  <MenuIcon onClick={toggleMobileDrawer(true)}/>
              </IconButton>
            )}
            <Typography
            onClick={()=>router.push("/")}
             variant="h6"
             sx={{
                color:"black",
                fontSize: isSmallScreen ? "1.2rem":'1.5rem',
                fontWeight:"bold",
                cursor:"pointer",
             }}
            >
                Food Hub
            </Typography>
           
        
           
           
           </Box>
          
              {
                !isSmallScreen && (
                  <Box
                  sx={{
                    display:"flex",
                    alignItems:"center"
                  }}
                  >
                    {menuItem}
                  </Box>
                )
              }

           
              {/* Icons and Reservation Button */}
        <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isSmallScreen ? "space-between" : "flex-end",
                  width: isSmallScreen ? "100%" : "auto",
                  marginTop: isSmallScreen ? "1rem" : 0,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "#e60000",
                    color: "white",
                    marginRight: "0.5rem",
                    "&:hover": { backgroundColor: "#e60000" },
                  }}
                >
                  <ShoppingCartIcon fontSize={isSmallScreen ? "small" : "medium"} />
                </IconButton>

                <IconButton
                  sx={{
                    backgroundColor: "#e60000",
                    color: "white",
                    marginRight: "0.5rem",
                    "&:hover": { backgroundColor: "#e60000" },
                  }}
                >
                  <CompareIcon fontSize={isSmallScreen ? "small" : "medium"} />
                </IconButton>
                <IconButton
                  
                  sx={{
                    backgroundColor: "#e60000",
                    color: "white",
                    marginRight: isSmallScreen ? 0 : "0.5rem",
                    "&:hover": { backgroundColor: "#e60000" },
                  }}
                >
                
                    <LoginIcon fontSize={isSmallScreen ? "small" : "medium"} />
              
                </IconButton>
                <Button
                  variant="contained"
              
                  sx={{
                    backgroundColor: "#e60000",
                    color: "white",
                    borderRadius: "22px",
                    padding: isSmallScreen ? "0.3rem 0.8rem" : "0.5rem 1.5rem",
                    fontSize: isSmallScreen ? "0.7rem" : "0.9rem",
                    "&:hover": { backgroundColor: "#e60000" },
                    display: isSmallScreen ? "none" : "inline-flex",
                  }}
                >
                  Reservation
                </Button>
                {isSmallScreen && (
                  <Button
                    variant="contained"
              
                    sx={{
                      backgroundColor: "#e60000",
                      color: "white",
                      borderRadius: "22px",
                      padding: "0.3rem 0.8rem",
                      fontSize: "0.7rem",
                      "&:hover": { backgroundColor: "#e60000" },
                    }}
                  >
                    Reserve
                  </Button>
                )}
              </Box>
          
          
          
        </Box>
        
          {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileDrawerOpen}
        onClose={toggleMobileDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleMobileDrawer(false)}
          onKeyDown={toggleMobileDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText>
                <Link href="/" passHref>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/about" passHref>
                  About
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Link href="/test" passHref>
                  Test
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
        
      </Box>
    )
}

export default Nav;
