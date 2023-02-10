import { Box, Stack } from '@mui/material'
import { useTodoBoxContext } from '../context/TodoContext'
import BottomPanel from './BottomPanel'
import TodoBox from './TodoBox'

const TodoArea = () => {
  const contextTodos = useTodoBoxContext()

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
          {contextTodos.todos.map((todo) => (
            <TodoBox todo={todo} key={todo.idBox} />
          ))}
        </Box>
      </Stack>
      <BottomPanel />
    </>
  )
}

export default TodoArea
