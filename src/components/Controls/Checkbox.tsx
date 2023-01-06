import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";

export default function Checkbox(props: any) {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParam = (name: string, value: boolean) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultEventParam(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
