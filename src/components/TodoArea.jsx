import { Box, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTodoBoxContext } from '../context/TodoContext'
import TodoBox from './TodoBox'

const TodoArea = () => {
  const contextTodos = useTodoBoxContext()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      contextTodos.setTodos(storedTodos)
    }
  }, [])

  return (
    <>
      <Stack sx={{ flexDirection: 'column', height: '100vh' }}>
        <Box
          sx={{
            backgroundColor: '#121212',
            height: 'auto',
            color: '#fff',
          }}
        >
          {contextTodos.todos.length === 0 && (
            <Typography
              id="modal-modal-title"
              sx={{
                padding: 15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '100px',
                fontSize: '24px',
                fontWeight: 600,
                fontFamily: 'Abhaya Libre SemiBold',
                color: '#F4F4F4',
              }}
            >
              Заметок пока нет, добавьте что-нибудь!
            </Typography>
          )}

          {contextTodos.todos.map((todo) =>
            todo.notes.length === 0 ? null : (
              <TodoBox todo={todo} key={todo.idBox} />
            )
          )}
        </Box>
      </Stack>
    </>
  )
}

export default TodoArea
