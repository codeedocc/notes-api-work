import { useTodoBoxContext } from '../context/TodoContext'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const TodoNote = ({ note }) => {
  const { doneHandler } = useTodoBoxContext()

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
            <label className="slider-checkbox">
              <input
                type="checkbox"
                checked={note.completed}
                onChange={() => doneHandler(note.id)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TodoNote
