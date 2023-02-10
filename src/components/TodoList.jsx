import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { StyledPaper } from './TodoBox'
import closeList from '../assets/closeList.svg'
import { useTodoBoxContext } from '../context/TodoContext'

const Todo = ({ note, contextTodos }) => {
  const style = {
    textDecoration: note.completed ? 'line-through' : 'none',
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'Abhaya Libre SemiBold',
  }

  return (
    <Grid item pb={2}>
      <Grid container wrap="nowrap">
        <Box
          sx={{
            backgroundColor: note.color || '#A9A9A9',
            height: 'auto',
            width: '5px',
            borderRadius: '3px',
          }}
        ></Box>
        <Grid
          item
          xs
          zeroMinWidth
          pr={1}
          pl={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>
            <Typography noWrap sx={style}>
              {note.text}
            </Typography>
            <Typography
              noWrap
              sx={{
                fontSize: '14px',
                lineHeight: '17px',
                fontWeight: 600,
                color: '#FFFFFF99',
              }}
            >
              {note.description}
            </Typography>
          </span>

          <div className="slider-checkbox-container">
            <label className="slider-checkbox round">
              <input
                type="checkbox"
                checked={note.completed}
                onChange={() => contextTodos.doneHandler(note.id)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

const TodoList = ({ todo }) => {
  const contextTodos = useTodoBoxContext()

  return (
    <>
      {todo.isOpened && (
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            px: 3,
            pt: 2,
            height: 'auto',
          }}
        >
          <StyledPaper
            sx={{
              my: 1,
              mx: 'auto',
              pb: 1,
              background: '#121212',
              borderRadius: 'none',
              boxShadow: 'none',
              color: '#F4F4F4',
            }}
          >
            <Grid
              item
              xs
              zeroMinWidth
              pr={1}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={closeList}
                alt="settings"
                height="30px"
                width="28.5px"
                onClick={() => contextTodos.boxHandler(todo.idBox)}
                className="open-close-list"
              />
              <Typography noWrap sx={{ fontSize: '24px', pl: '15px' }}>
                {todo.title}
              </Typography>
            </Grid>
          </StyledPaper>
          <StyledPaper
            sx={{
              my: 1,
              mx: 'auto',
              p: 2,
              borderRadius: '25px',
              background: '#282828',
              color: '#F4F4F4',
              boxShadow:
                '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
            }}
          >
            {todo.notes.map((el, idx) => (
              <Todo note={el} contextTodos={contextTodos} key={el.id} />
            ))}
          </StyledPaper>
        </Box>
      )}
    </>
  )
}

export default TodoList
