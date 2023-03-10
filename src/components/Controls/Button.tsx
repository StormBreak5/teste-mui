import { Button as MuiButton } from "@mui/material";

export default function Button(props: any) {
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "medium"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
