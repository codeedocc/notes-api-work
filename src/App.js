import { QueryClient, QueryClientProvider } from 'react-query'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import TodoArea from './components/TodoArea'
import BottomPanel from './components/BottomPanel'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ backgroundColor: '#121212' }}>
        <Navbar />
        <TodoArea />
        <BottomPanel />
      </Box>
    </QueryClientProvider>
  )
}

export default App
