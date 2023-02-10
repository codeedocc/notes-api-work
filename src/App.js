import { QueryClient, QueryClientProvider } from 'react-query'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import TodoArea from './components/TodoArea'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ backgroundColor: '#121212' }}>
        <Navbar />
        <TodoArea />
      </Box>
    </QueryClientProvider>
  )
}

export default App
