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

const Nav = () => {
    
    const theme = useTheme() 
    const router = useRouter()

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
    
    
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
                  <MenuIcon />
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
           
           {
            !isSmallScreen && (
              <Box
               sx={{
                display:"flex",
                alignItems:"center"
               }}
              >
                A suivre
              </Box>
            )
           }
           
           
           </Box>
          
          
          
          </Box>
        
        
        
        
        </Box>
    )
}

export default Nav;
