import { styled } from '@mui/system';
import { TextField, Button, Box } from '@mui/material';

export const FormContainer = styled(Box)(({theme}) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px', 
  height: 'auto',
}));

export const StyledTextField = styled(TextField)(({theme}) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    color: '#ffcc00', 
  },
  '& .MuiInputLabel-root': {
    color: '#00000',
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffcc00',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffcc00', 
  },
  '& .MuiInputBase-root.Mui-focused': {
    color: '#ffcc00',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#ffcc00', 
  },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: '#8a2be2',
  '&:hover': {
    backgroundColor:'#7a1ad0',
  },
}));

export const StyledCancelButton = styled(Button)(() => ({
  color: 'black',
  borderColor: '#8a2be2',
  '&:hover': {
    borderColor: '#7a1ad0',
  },
}));
export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: theme.spacing(2),
}));
