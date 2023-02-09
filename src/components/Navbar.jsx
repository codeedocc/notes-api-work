import { Stack } from '@mui/material'
import settings from '../assets/settings.svg'

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={0.5}
    px={6}
    sx={{
      position: 'sticky',
      background: '#202020',
      top: 0,
      justifyContent: 'space-between',
      color: '#fff',
      zIndex: 1,
    }}
  >
    <h1>To Do</h1>
    <img
      src={settings}
      alt="settings"
      height="30px"
      width="28.5px"
      className="settings"
    />
  </Stack>
)

export default Navbar
