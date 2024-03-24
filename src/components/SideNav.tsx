import {
    Box, Drawer, Toolbar,
    List, Divider, Typography, Grid,
    ListItem, ListItemButton,
    ListItemIcon, ListItemText
  } from "@mui/material"
  
  import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
  import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
  import InsightsIcon from '@mui/icons-material/Insights';
  import SettingsIcon from '@mui/icons-material/Settings';
  import DescriptionIcon from '@mui/icons-material/Description';
  import HelpCenterIcon from '@mui/icons-material/HelpCenter';
  
  const drawerWidth = 240;
  
  export default function SideNav() {
  
    const navItem = [
      { name: "Dashboard", icon: <DashboardCustomizeIcon /> },
      { name: "Analytics", icon: <InsightsIcon /> },
      { name: "Settings", icon: <SettingsIcon /> },
      { name: "Documentation", icon: <DescriptionIcon /> },
      { name: "Help Center", icon: <HelpCenterIcon /> }
    ];
  
    return (
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar component="center">
            <Grid display="flex" justifyContent="center" alignItems="center" gap="10px">
              <PrecisionManufacturingIcon />
              <Typography variant="h6" noWrap component="div">
                Precision Tech
              </Typography>
            </Grid>
          </Toolbar>
          <Divider />
          <List>
            {navItem.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    );
  }