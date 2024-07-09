import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)({
  color: '#ffcc00', 
  textDecoration: 'none', 
  fontWeight: 'bold', 
  '&:hover': {
    textDecoration: 'underline', 
  },
});

export default CustomLink;
