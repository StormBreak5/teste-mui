import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Controls from "../../../components/Controls/Controls";
import { BsDot, BsLightningChargeFill } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { MdOutlineMoneyOff } from "react-icons/md";
import Divider from "@mui/material/Divider";

export default function Plans() {
  return (
    <Container
      sx={{ mt: 3, backgroundColor: "transparent", display: "flex", gap: 2 }}
      maxWidth="md"
    >
      <Card sx={{ borderRadius: 5, width: 300 }}>
        <CardContent>
          <Box textAlign="center" color="#344767" sx={{ mt: 2, mb: 1 }}>
            <MdOutlineMoneyOff size={45} />
          </Box>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={600}
            color="#344767"
          >
            Free
          </Typography>
          <Box sx={{ mt: 2, padding: 1, minHeight: 137 }}>
            <List sx={{ mb: 2 }}>
              <ListItem>
                <ListItemIcon>
                  <BsDot />
                </ListItemIcon>
                <ListItemText primary="Emita até 5 documentos por mês." />
              </ListItem>
            </List>
          </Box>
          <Divider />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="end"
            sx={{ mb: 2, mt: 1 }}
            gap={1}
          >
            <Typography variant="h4" fontWeight={600} color="green">
              R$ 0
            </Typography>
            <Typography variant="caption" color="#6b708a">
              /mês
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ mb: 2 }}>
            <Controls.Button text="Assinar" sx={{ borderRadius: 5 }} />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ borderRadius: 5, width: 300 }}>
        <CardContent>
          <Box textAlign="center" color="#344767" sx={{ mt: 2, mb: 1 }}>
            <BsLightningChargeFill size={45} />
          </Box>

          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={600}
            color="#344767"
          >
            Pro
          </Typography>
          <Box sx={{ mt: 2, padding: 1, minHeight: 137 }}>
            <List sx={{ mb: 2 }}>
              <ListItem>
                <ListItemIcon>
                  <BsDot />
                </ListItemIcon>
                <ListItemText primary="Emita até x documentos por mês;" />
              </ListItem>
              <ListItem sx={{ mt: 1 }}>
                <ListItemIcon>
                  <BsDot />
                </ListItemIcon>
                <ListItemText primary="Até 3 templates de formulário." />
              </ListItem>
            </List>
          </Box>
          <Divider />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="end"
            sx={{ mb: 2, mt: 1 }}
            gap={1}
          >
            <Typography variant="h4" fontWeight={600} color="green">
              R$ 29,90
            </Typography>
            <Typography variant="caption" color="#6b708a">
              /mês
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ mb: 2 }}>
            <Controls.Button text="Assinar" sx={{ borderRadius: 5 }} />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ borderRadius: 5, width: 300 }}>
        <CardContent>
          <Box textAlign="center" color="#344767" sx={{ mt: 2, mb: 1 }}>
            <BiBuildings size={45} />
          </Box>

          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={600}
            color="#344767"
          >
            Enterprise
          </Typography>
          <Box sx={{ mt: 2, padding: 1, minHeight: 137 }}>
            <List sx={{ mb: 2 }}>
              <ListItem>
                <ListItemIcon>
                  <BsDot />
                </ListItemIcon>
                <ListItemText primary="Benefícios exclusivos para empresas." />
              </ListItem>
            </List>
          </Box>
          <Divider />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="end"
            sx={{ mb: 2, mt: 1 }}
            gap={1}
          >
            <Typography variant="h4" fontWeight={600} color="green">
              R$ 199,90
            </Typography>
            <Typography variant="caption" color="#6b708a">
              /mês
            </Typography>
          </Box>
          <Box textAlign="center" sx={{ mb: 2 }}>
            <Controls.Button text="Assinar" sx={{ borderRadius: 5 }} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
