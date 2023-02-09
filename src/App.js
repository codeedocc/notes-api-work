import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import TodoArea from './components/TodoArea'

function App() {
  return (
    <Box sx={{ backgroundColor: '#121212' }}>
      <Navbar />
      <TodoArea />
    </Box>
  )
}

export default App
