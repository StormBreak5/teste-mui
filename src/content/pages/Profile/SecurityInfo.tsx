import { Box, Grid, IconButton, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";

export default function SecurityInfo() {
  return (
    <Grid container display="flex">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={0}
        sx={{ mb: 2 }}
      >
        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <MdEmail size={20} color="#344767" />
          <Typography
            variant="caption"
            fontSize={18}
            fontWeight={600}
            sx={{ mr: 2, ml: 1 }}
            color="#344767"
          >
            E-mail
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            sx={{ mr: 2 }}
            color="#00000099"
          >
            example@dom.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} display="flex" alignItems="center">
          <MdLock size={20} color="#344767" />
          <Typography
            variant="caption"
            fontSize={18}
            fontWeight={600}
            sx={{ mr: 2, ml: 1 }}
            color="#344767"
          >
            Senha
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            sx={{ mr: 2 }}
            color="#00000099"
          >
            •••
          </Typography>

          <IconButton aria-label="Editar senha">
            <FaEdit />
          </IconButton>
        </Grid>
      </Grid>
      <Typography
        variant="caption"
        fontWeight={400}
        color="#233656"
        fontSize={10}
      >
        *Essas são suas informações de segurança. Qualquer alteração poderá
        afetar seu acesso.
      </Typography>
    </Grid>
  );
}
