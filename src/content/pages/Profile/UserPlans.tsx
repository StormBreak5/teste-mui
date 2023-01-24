import { Grid, Typography } from "@mui/material";
import Controls from "../../../components/Controls/Controls";

export default function UserPlans() {
  return (
    <>
      <Grid container display="flex" flexDirection="column" textAlign="center">
        <Typography
          variant="caption"
          fontSize={18}
          fontWeight={600}
          color="#344767"
        >
          Parece que você ainda não assinou um plano.
        </Typography>

        <Controls.Button
          sx={{ mt: 3, borderRadius: 10 }}
          text="Clique aqui para adquirir um plano"
        />
      </Grid>
    </>
  );
}
