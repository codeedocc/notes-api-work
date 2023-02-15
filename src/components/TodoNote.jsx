import { useTodoBoxContext } from '../context/TodoContext'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import removeNote from '../assets/images/removeNote.png'

const TodoNote = ({ note, idx, box }) => {
  const { doneHandler, noteRemover, todos } = useTodoBoxContext()

  const style = {
    textDecoration: note.completed ? 'line-through' : 'none',
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'Abhaya Libre SemiBold',
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [note])

  return (
    <Grid item pb={box.notes.length !== idx + 1 && 2}>
      <Grid container wrap="nowrap">
        <Box
          sx={{
            backgroundColor: note.color || '#A9A9A9',
            height: 'auto',
            width: '5px',
            borderRadius: '3px',
          }}
        />

        <Grid
          item
          xs
          zeroMinWidth
          pl={2}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
            justifyContent: {
              lg: 'space-between',
              md: 'space-between',
              sm: 'space-between',
              xs: 'flex-start',
            },
          }}
        >
          <Box
            sx={{
              overflow: 'hidden',
              wordWrap: 'break-word',
              maxWidth: { lg: '75%', md: '75%', sm: '70%', xs: '95%' },
            }}
          >
            <span>
              <Typography sx={style}>{note.text}</Typography>

              <Typography
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
          </Box>

          <Box className="slider-checkbox-container">
            <label className="slider-checkbox">
              <input
                type="checkbox"
                checked={note.completed}
                onChange={() => doneHandler(note.id)}
              />
              <span className="slider"></span>
            </label>
            &nbsp; &nbsp; &nbsp;
            <img
              src={removeNote}
              alt="settings"
              height="30px"
              width="28.5px"
              onClick={() => noteRemover(note.id)}
              className="note-remove"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TodoNote
