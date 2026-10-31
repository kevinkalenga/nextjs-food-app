"use client";

import { styles } from "./navbarStyles";
import Box from "@mui/material/Box";
import { Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";

export default function NavBar() {
  return (
    <Box component="nav" sx={styles.navbarContainer}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.contactInfo}>
          <Box sx={styles.contactItem}>
            <IconButton size="small" sx={styles.iconButton}>
              <PhoneInTalkIcon />
            </IconButton>
            <Typography variant="body2" sx={styles.contactText}>
              +1234569874
            </Typography>
          </Box>

          <Box sx={styles.contactItem}>
            <IconButton size="small" sx={styles.iconButton}>
              <EmailIcon />
            </IconButton>
            <Typography variant="body2" sx={styles.contactText}>
              foodApp001@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.socialIcons}>
          <IconButton size="small" sx={styles.iconButton} aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton size="small" sx={styles.iconButton} aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton size="small" sx={styles.iconButton} aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}