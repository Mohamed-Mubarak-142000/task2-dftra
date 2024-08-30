import { Container, Grid, Typography, Box, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" className="bg-gray-900 text-white py-10">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold text-lg mb-4">
              isam
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Your trusted partner for all your service needs. From home repairs
              to professional consultations, we’ve got you covered.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold text-lg mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold text-lg mb-4">
              Contact Us
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              123 Main Street, City, Country
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Email: info@isam.com
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Phone: +123 456 7890
            </Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-bold text-lg mb-4">
              Follow Us
            </Typography>
            <Box className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box className="border-t border-gray-700 mt-8 pt-6 text-center">
          <Typography variant="body2" className="text-gray-400">
            © 2024 isam. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
