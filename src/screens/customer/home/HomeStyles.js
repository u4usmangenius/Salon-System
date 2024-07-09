import { styled } from '@mui/material/styles';
import { Container, Box} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import image from '../../../assests/barber-shop.jpg';

export const Root = styled(Box)({
  position: 'relative',
  flexGrow: 1,
  backgroundColor: '#1a1a3a', 
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat', 
  height: '100vh',
  color: '#fff',
  fontWeight:'bold',
  overflow: 'hidden', 
  display: 'flex',
  flexDirection: 'column', 
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    zIndex: 1, 
  },
});

export const MainContent = styled(Container)({
  flex: 1, 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  zIndex: 2,
  padding: '32px',
  fontWeight:'bolder'
});

export const Image = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '10%', 
  '@media (max-width: 600px)': {
    display: 'none', 
  },
});

export const ContactLink = styled(RouterLink)({
  position: 'absolute',
  bottom: 10,
  right: 10,
  color: '#fff', 
  textDecoration: 'none',
});

export const NavLink = styled(RouterLink)({
  color: '#fff', 
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});
