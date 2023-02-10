import {
  Box,
  Button,
  Fab,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useTodoBoxContext } from '../context/TodoContext'
import { useState } from 'react'
import { colors } from '../utils/constants.js'

const AddTodo = () => {
  const contextTodos = useTodoBoxContext()
  const [open, setOpen] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: '',
      text: '',
      description: '',
      color: '',
      id: Math.floor(Math.random() * Date.now()),
      completed: false,
    },
  ])

  const addMoreNotes = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: '',
        text: '',
        description: '',
        color: '',
        id: Math.floor(Math.random() * Date.now()),
        completed: false,
      },
    ])
  }

  const createTodoBox = () => {
    if (todos[0].title.trim() === '') {
      alert('Заполните заголовок')
      return
    }

    if (todos.every((todo) => todo.text !== '')) {
      const newBox = {
        title: todos[0].title,
        isOpened: false,
        idBox: Math.floor(Math.random() * Date.now()),
        notes: [...todos],
      }

      contextTodos.setTodos((prev) => [...prev, newBox])
      setTodos([
        {
          title: '',
          text: '',
          description: '',
          color: '',
          id: Math.floor(Math.random() * Date.now()),
          completed: false,
        },
      ])
      setOpen(false)
    } else {
      alert('У вас есть пустое поле "Заметка"')
      return
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '70%', md: '60%' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '20px',
          }}
        >
          {todos.map((todo, idx) => (
            <form key={todo.id}>
              {idx === 0 ? (
                <>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ paddingBottom: '15px' }}
                  >
                    Добавьте заголовок:
                  </Typography>
                  <TextField
                    fullWidth
                    label="Заголовок"
                    id="Заголовок"
                    size="small"
                    sx={{ paddingBottom: '15px' }}
                    value={todo.title}
                    onChange={(e) => {
                      const newTodos = [...todos]
                      newTodos[idx].title = e.target.value
                      setTodos(newTodos)
                    }}
                  />
                </>
              ) : (
                <>
                  <hr />
                </>
              )}

              <TextField
                fullWidth
                label={`${idx + 1}. Заметка`}
                id="Заметка"
                size="small"
                sx={{ paddingBottom: '15px' }}
                value={todo.text}
                onChange={(e) => {
                  const newTodos = [...todos]
                  newTodos[idx].text = e.target.value
                  setTodos(newTodos)
                }}
              />

              <TextField
                fullWidth
                label="Комментарий"
                id="Комментарий"
                size="small"
                sx={{ paddingBottom: '20px' }}
                value={todo.description}
                onChange={(e) => {
                  const newTodos = [...todos]
                  newTodos[idx].description = e.target.value
                  setTodos(newTodos)
                }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Цвет"
                size="small"
                helperText="Выберите цвет для заметки"
                sx={{ paddingBottom: '15px' }}
                value={todo.color}
                onChange={(e) => {
                  const newTodos = [...todos]
                  newTodos[idx].color = e.target.value
                  setTodos(newTodos)
                }}
              >
                {colors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                sx={{
                  background: '#121212',
                  position: 'absolute',
                  right: '30px',
                  bottom: '30px',
                  '&:hover': {
                    background: '#333',
                  },
                }}
                onClick={() => createTodoBox()}
              >
                Создать
              </Button>
              <Button
                disabled={todos.length === 3}
                variant="contained"
                sx={{
                  background: '#121212',
                  position: 'absolute',
                  right: '150px',
                  bottom: '30px',
                  '&:hover': {
                    background: '#333',
                  },
                }}
                onClick={addMoreNotes}
              >
                Ещё
              </Button>
            </form>
          ))}
        </Box>
      </Modal>
      <Fab color="default" aria-label="add">
        <AddIcon onClick={() => setOpen(true)} />
      </Fab>
    </div>
  )
}

export default AddTodo
