import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  Avatar,
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  TextField,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img2 from "../assets/01.jpg"; // ปรับ path ตามที่เก็บรูป

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function HomeUI() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#111" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sorawit Leejaroen
          </Typography>
          <Button color="inherit">Work</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            {/* LEFT: Text */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                HI, I AM <br /> Sorawit Leejaroen
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                นักพัฒนาเว็บไซต์ฝั่ง frontend ชาวไทย ที่มีความหลงใหลในการสร้างเว็บไซต์ทั้งมือถือและบนเดสก์ท็อปที่สวยงามและใช้งานง่าย
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#d4ff4f", color: "black" }}
                >
                  CONTACT ME
                </Button>
                <IconButton sx={{ backgroundColor: "#191919", color: "white" }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#191919", color: "white" }}>
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Box>

            {/* RIGHT: Image */}
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <Avatar
                alt="Sorawit Leejaroen"
                src={img2}
                sx={{ width: 300, height: 300, borderRadius: 5 }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box sx={{ backgroundColor: "#111", py: 6 }}>
        <Container maxWidth="md">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={20}
            alignItems="center"
            justifyContent="center"
          >
            <Box sx={{ minWidth: 200 }}>
              <Typography variant="h4" fontWeight="bold">
                ABOUT ME
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="bold"  >
                ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนต์เอนด์ที่ทำงานอยู่ในกรุงเทพฯ กำลังมองหาโอกาสที่เติบโตขึ้นในการทำงาน มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
              </Typography>
              <Typography  sx={{mr: 2  }}  >
              ชอบให้ความสำคัญการเข้าถึง(accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบเว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ผมชอบฟังเพลง และเล่นเกม Blue Archive กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#d4ff4f", color: "black", mr: 2  }}
              >
                DOWNLOAD RESUME
              </Button>
              <IconButton sx={{ backgroundColor: "#191919", color: "white", mr: 1 }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ backgroundColor: "#191919", color: "white" }}>
                <GitHubIcon />
              </IconButton>
            </Box>
          </Stack>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <img
              src={img2}
              alt="about me"
              style={{ maxWidth: "100%", borderRadius: 16 }}
            />
          </Box>
        </Container>
      </Box>

      {/* Capabilities Section */}
      <Box sx={{ backgroundColor: "#000", py: 6 }}>
        <Container maxWidth="md">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={20}
            alignItems="center"
            justifyContent="center"
          >
            <Box sx={{ minWidth: 200 }}>
              <Typography variant="h4" fontWeight="bold">
                MY CAPABILITIES
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ color: "#ccc", mb: 3 }}>
                ผมชอบเรียนรู้และพัฒนาทักษะใหม่ๆ อยู่เสมอ ทั้งด้านการพัฒนาเว็บไซต์และการจัดการฐานข้อมูล
              </Typography>
              <Stack direction="row" flexWrap="wrap" spacing={2}>
                {[
                  "HTML",
                  "CSS",
                  "JAVASCRIPT",
                  "FLUTTER",
                  "DART",
                  "IoT",
                  "REACT",
                  "DATABASE",
                ].map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 2,
                      py: 2,
                      border: "1px solid #444",
                      borderRadius: 2,
                      color: "#fff",
                      mb: 2,
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box sx={{ backgroundColor: "#111", py: 6 }}>
        <Container maxWidth="md">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={20}
            alignItems="center"
            justifyContent="center"
          >
            <Box sx={{ minWidth: 200 }}>
              <Typography variant="h4" fontWeight="bold">
                MY EXPERIENCE
              </Typography>
            </Box>
            <Box>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6">Freelance Developer</Typography>
                <Typography variant="caption" sx={{ color: "#aaa" }}>
                  Nov 2023 – Present
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  พัฒนาเว็บไซต์ด้วยเทคโนโลยีสมัยใหม่ ทั้งฝั่ง frontend และ backend เช่น React.js
                  มีประสบการณ์ในการพัฒนา UX/UI ที่ตอบโจทย์การใช้งานได้จริง
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6">Front-End Intern</Typography>
                <Typography variant="caption" sx={{ color: "#aaa" }}>
                  Sep 2023 – Nov 2023
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  ฝึกงานในทีมพัฒนาเว็บไซต์โดยใช้ HTML, CSS และ JavaScript
                  เรียนรู้เกี่ยวกับการทำให้เว็บไซต์เข้าถึงได้ (Accessibility) และปรับให้สอดคล้องกับมาตรฐาน W3C/WCAG
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ backgroundColor: "black", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                LET'S CONNECT
              </Typography>
              <Typography variant="body1" gutterBottom>
                Say hello at chanintornmc@sau.ac.th
              </Typography>
              <Typography variant="body1" gutterBottom>
                For more info, here's my{" "}
                <a href="#" style={{ color: "#d4ff4f", textDecoration: "none" }}>
                  resume
                </a>
              </Typography>
              <Stack direction="row" spacing={2} mt={2}>
                <IconButton sx={{ color: "#d4ff4f" }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: "#d4ff4f" }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton sx={{ color: "#d4ff4f" }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: "#d4ff4f" }}>
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </Box>

            <Box sx={{ flex: 1 }}>
            <TextField
  fullWidth
  label="Name"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true }}
  sx={{
    backgroundColor: "#191919",
    input: { color: "white" },
    fieldset: { borderColor: "#333" },
    label: { color: "#aaa" }
  }}
/>
<TextField
  fullWidth
  label="Email"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true }}
  sx={{
    backgroundColor: "#191919",
    input: { color: "white" },
    fieldset: { borderColor: "#333" },
    label: { color: "#aaa" }
  }}
/>
<TextField
  fullWidth
  label="Subject"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true }}
  sx={{
    backgroundColor: "#191919",
    input: { color: "white" },
    fieldset: { borderColor: "#333" },
    label: { color: "#aaa" }
  }}
/>
<TextField
  fullWidth
  label="Messago"
  variant="outlined"
  margin="normal"
  InputLabelProps={{ shrink: true }}
  sx={{
    backgroundColor: "#191919",
    input: { color: "white" },
    fieldset: { borderColor: "#333" },
    label: { color: "#aaa" }
  }}
/>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#d4ff4f", color: "black" }}
              >
                Send Message
              </Button>
            </Box>
          </Stack>
        </Container>
        <Typography variant="caption" color="text.secondary" mt={2} textAlign="center">
            © 2025 Sorawit Leejaroen. All rights reserved.
          </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default HomeUI;
