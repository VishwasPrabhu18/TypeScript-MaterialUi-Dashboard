import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Username / Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => handleLogin()}
          >
            Login
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have account? Sign up here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
