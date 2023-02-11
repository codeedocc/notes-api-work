import { useTodoBoxContext } from '../context/TodoContext'
import { StyledPaper } from './TodoBox'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import closeList from '../assets/images/closeList.svg'
import TodoNote from './TodoNote'

const TodoList = ({ todo }) => {
  const { boxHandler } = useTodoBoxContext()

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
                onClick={() => boxHandler(todo.idBox)}
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
            {todo.notes.map((el) => (
              <TodoNote note={el} key={el.id} />
            ))}
          </StyledPaper>
        </Box>
      )}
    </>
  )
}

export default TodoList
