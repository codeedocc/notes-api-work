import { Box, Stack } from '@mui/material'
import AddTodo from './AddTodo'
import TodoBox from './TodoBox'

const TodoArea = () => {
  return (
    <>
      <Stack sx={{ flexDirection: 'column' }}>
        <Box
          sx={{
            backgroundColor: '#121212',
            height: '100vh',
            color: '#fff',
          }}
        >
          <TodoBox />
        </Box>
      </Stack>
      <AddTodo />
    </>
  )
}

export default TodoArea
