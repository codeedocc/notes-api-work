import { Stack } from '@mui/material'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

const AddTodo = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      pr={5}
      pb={2}
      sx={{
        position: 'sticky',
        bottom: '20px',
      }}
    >
      <Fab color="default" aria-label="add">
        <AddIcon />
      </Fab>
    </Stack>
  )
}

export default AddTodo
