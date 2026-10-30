import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CallIcon from '@mui/icons-material/Call';

export default function Home() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success <CallIcon />
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      < DehazeIcon />
    </div>
  );
}
