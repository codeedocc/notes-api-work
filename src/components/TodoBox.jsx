import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import openList from '../assets/openList.svg'
import TodoList from './TodoList'
import { useTodoBoxContext } from '../context/TodoContext'

export const StyledPaper = styled(Paper)(() => ({
  maxWidth: 800,
}))

export const message = `Today tasks`

const TodoBox = () => {
  const contextTodos = useTodoBoxContext()

  return (
    <>
      {!contextTodos.openBox ? (
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            px: 3,
            pt: 5,
            height: 'auto',
          }}
        >
          <StyledPaper
            sx={{
              my: 1,
              mx: 'auto',
              p: 2,
              height: '79px',
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#282828',
              color: '#F4F4F4',
              boxShadow:
                '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Box
                  sx={{
                    backgroundColor: '#F4F4F4',
                    height: '70px',
                    width: '5px',
                    borderRadius: '3px',
                  }}
                ></Box>
              </Grid>
              <Grid
                item
                xs
                zeroMinWidth
                pr={5}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography noWrap sx={{ fontSize: '24px' }}>
                  {message}
                </Typography>

                <img
                  src={openList}
                  alt="settings"
                  height="30px"
                  width="28.5px"
                  onClick={() => contextTodos.setOpenBox((prev) => !prev)}
                  className="open-close-list"
                />
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>
      ) : (
        <TodoList />
      )}
    </>
  )
}

export default TodoBox
