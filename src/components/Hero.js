import React, { memo, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.div;

const Hero = () => {
  const handleScroll = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      {/* Text Design */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "4rem", md: "5rem" },
            fontWeight: 800,
            textTransform: "uppercase",
            zIndex: 1,
            letterSpacing: "0.05em",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.2,
          }}
        >
          Oluwatoni Sobande
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            textTransform: "uppercase",
            zIndex: 1,
            letterSpacing: "0.03em",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Fullstack Developer
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1.2rem", md: "1.8rem" },
            fontWeight: 400,
            fontStyle: "italic",
            mt: 2,
            zIndex: 1,
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Building tomorrow, one line of code at a time.
        </Typography>
      </Box>

      {/* Duck and Scroll Button Section */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
        }}
      >
        {/* Rubber Duck */}
        <Box
          sx={{
            position: "relative",
            width: "150px",
            height: "100px",
            "& .duck-body": {
              position: "absolute",
              width: "100px",
              height: "60px",
              backgroundColor: "#FFD700",
              borderRadius: "50%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              top: "30px",
            },
            "& .duck-head": {
              position: "absolute",
              width: "50px",
              height: "50px",
              backgroundColor: "#FFD700",
              borderRadius: "50%",
              left: "15px",
              top: "0",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            },
            "& .duck-beak": {
              position: "absolute",
              width: "25px",
              height: "15px",
              backgroundColor: "#FF6347",
              borderRadius: "10px",
              left: "40px",
              top: "20px",
            },
            "& .duck-eye": {
              position: "absolute",
              width: "8px",
              height: "8px",
              backgroundColor: "#000",
              borderRadius: "50%",
              left: "25px",
              top: "15px",
            },
          }}
          onMouseEnter={(e) => {
            const tooltip = document.createElement("div");
            tooltip.textContent = "Quack!";
            tooltip.style.position = "absolute";
            tooltip.style.bottom = "120%";
            tooltip.style.left = "50%";
            tooltip.style.transform = "translateX(-50%)";
            tooltip.style.backgroundColor = "#000";
            tooltip.style.color = "#fff";
            tooltip.style.padding = "4px 8px";
            tooltip.style.borderRadius = "4px";
            tooltip.style.fontSize = "0.9rem";
            tooltip.style.zIndex = "10";
            e.currentTarget.appendChild(tooltip);
          }}
          onMouseLeave={(e) => {
            const tooltip = e.currentTarget.querySelector("div");
            if (tooltip) e.currentTarget.removeChild(tooltip);
          }}
        >
          <Box className="duck-body" />
          <Box className="duck-head">
            <Box className="duck-beak" />
            <Box className="duck-eye" />
          </Box>
        </Box>

        {/* Scroll Down Button */}
        <MotionBox
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={handleScroll}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              mb: 1,
              fontSize: "1rem",
            }}
          >
            Scroll Down
          </Typography>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              border: "2px solid",
              borderColor: "text.secondary",
              borderRadius: "50%",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "8px",
                left: "50%",
                width: "4px",
                height: "10px",
                backgroundColor: "text.secondary",
                transform: "translateX(-50%)",
                borderRadius: "2px",
              },
            }}
          />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default memo(Hero);
