import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import { LinkContainer } from 'react-router-bootstrap';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import { useMediaQuery } from '@mui/material';

const soloLogo = require('../../components/img/sololog.png');

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const logoImg = (
    <img
      src={soloLogo}
      width='50'
      height='50'
      className='d-inline-block align-top'
      alt='solo logo'
    />
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerCloseMobile = {
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {!open && (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          position: 'fixed',
          zIndex: theme.zIndex.appBar + 1,
          display: { xs: 'block', sm: 'none' },
          left: 5,
          top:-12, // Ajusta esta línea para cambiar la posición horizontal

        }}
      >
        <MenuIcon />
      </IconButton>
    )}
      <Drawer
        variant='permanent'
        sx={{
          ...(open ? {} : drawerCloseMobile),
          [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
          },
          [theme.breakpoints.down('xs')]: {
            width: 0,
          },
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color='inherit' 
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              display: !open ? 'block' : 'none',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'></Typography>
        </Toolbar>
        <DrawerHeader>
          {logoImg}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              text: 'Inicio',
              link: '/inicio',
              icon: <AssessmentTwoToneIcon />,
            },
            {
              text: 'Gastos',
              link: '/fmgastos',
              icon: <LocalAtmTwoToneIcon />,
            },
            {
              text: 'Ingresos',
              link: '/fmingresos',
              icon: <AddBoxTwoToneIcon />,
            },
            {
              text: 'Consulta',
              link: '/consulta',
              icon: <TableChartTwoToneIcon />,
            },
            {
              text: 'Agenda',
              link: '/agenda',
              icon: <BorderColorTwoToneIcon />,
            },
          ].map((item) => (
            <LinkContainer key={item.text} to={item.link}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </LinkContainer>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
