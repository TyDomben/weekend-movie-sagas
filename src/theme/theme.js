import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#e0f2fe", // Light blue for backgrounds
      100: "#b2ebf2", // Light teal for card backgrounds
      200: "#80deea", // Teal for buttons or accents
      300: "#4dd0e1", // Darker teal for active states
      400: "#26c6da", // Dark teal for headers or important text
      500: "#00bcd4", // Primary brand color
      600: "#00acc1", // Slightly darker for contrast
      700: "#0097a7", // Darker for emphasis
      800: "#00838f", // Dark for small text or icons
      900: "#006064", // Darkest for high contrast elements
    },
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: '"Roboto", sans-serif',
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "brand.600" : "brand.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.700" : "brand.600",
            // TODO this logic could probably be applied to display details on hover
          },
        }),
      },
    },
  },
  spacing: {
    1: "4px", // Smallest space - can be used for tight spacing
    2: "8px", // Small space - good for items close together
    3: "12px", // Medium space - useful for grouping items
    4: "16px", // Standard space - good for most use-cases
    5: "20px", // Medium-large space - for slightly larger gaps
    6: "24px", // Large space - useful for section spacing
    7: "28px", // Larger space - for more pronounced spacing
    8: "32px", // Even larger space - can be used for layout spacing
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  styles: {
    global: {
      // Apply styles to the `body` element
      body: {
        bgImage: `url('/images/mustacheBackground1.png')`, 
        bgPosition: "left",
        bgRepeat: "repeat",
        bgSize: "100%",
        objectfit: "contain",
        bgAttachment: "fixed", 
        color: "gray.800", // Set the default text color
        // You can add more styles here as needed
      },
    },
  },
  
});

export default customTheme;
