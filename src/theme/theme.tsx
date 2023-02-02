import { createTheme } from "@mui/material";

const customTheme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 0,
          alignItems: "center",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          fontSize: "1rem",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          transition: "color .2s",
          textTransform: "capitalize",

          "&.MuiButtonBase-root": {
            minWidth: "auto",
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 4,
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": {
            paddingBottom: 0,
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#6b708a",
          margin: 0,
        },
      },
    },
  },
});

export default customTheme;
