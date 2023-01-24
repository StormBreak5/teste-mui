import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { TabsContext } from "@mui/base";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import {
  FaInfoCircle,
  FaLock,
  FaFileSignature as FaPlan,
} from "react-icons/fa";
import GeneralInfo from "./GeneralInfo";

import SecurityInfo from "./SecurityInfo";
import Avatar from "@mui/material/Avatar";
import UserPlans from "./UserPlans";

export default function Profile() {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <title>Perfil</title>

      <Container sx={{ mt: 3, backgroundColor: "transparent" }} maxWidth="md">
        <Card sx={{ borderRadius: 5 }}>
          <CardContent sx={{ paddingBottom: 0 }}>
            <Box display="flex" gap={2}>
              <Avatar
                alt="Itzac Albertin"
                src="https://avatars.githubusercontent.com/u/61527696?v=4"
                sx={{ width: 64, height: 64 }}
              />
              <Box>
                <Typography variant="h5" fontWeight={600} color="#344767">
                  Fulano D. Tal
                </Typography>
                <Typography variant="caption" fontSize={14} color="#7b809a">
                  Manager
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box>
              <TabContext value={value}>
                <Box
                  justifyContent="center"
                  sx={{ borderBottom: 1, borderColor: "divider" }}
                >
                  <TabList
                    sx={{ maxHeight: "3rem" }}
                    aria-label="tabs example"
                    onChange={handleChange}
                  >
                    <Tab
                      label="Informações Gerais"
                      value="1"
                      icon={<FaInfoCircle />}
                      iconPosition="start"
                      sx={{ maxHeight: "3rem" }}
                    />
                    <Tab
                      label="Segurança"
                      value="2"
                      icon={<FaLock />}
                      iconPosition="start"
                      sx={{ maxHeight: "3rem" }}
                    />
                    <Tab
                      label="Planos"
                      value="3"
                      icon={<FaPlan />}
                      iconPosition="start"
                      sx={{ maxHeight: "3rem" }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <GeneralInfo />
                </TabPanel>
                <TabPanel value="2">
                  <SecurityInfo />
                </TabPanel>
                <TabPanel value="3">
                  <UserPlans />
                </TabPanel>
              </TabContext>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
