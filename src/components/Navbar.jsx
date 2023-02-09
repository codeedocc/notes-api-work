import { Stack } from '@mui/material'
import settings from '../assets/settings.svg'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useNewsContext } from '../context/NewsContext'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const contextNews = useNewsContext()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleHideNews = () => {
    contextNews.setShowNews(false)
    setAnchorEl(null)
  }

  const handleShowNews = () => {
    contextNews.setShowNews(true)
    setAnchorEl(null)
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={0.5}
      px={6}
      sx={{
        position: 'sticky',
        background: '#202020',
        top: 0,
        justifyContent: 'space-between',
        color: '#fff',
        zIndex: 1,
      }}
    >
      <h1>To Do</h1>
      <div>
        <Button id="basic-button" onClick={handleClick}>
          <img
            src={settings}
            alt="settings"
            height="30px"
            width="28.5px"
            className="settings"
          />
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {!contextNews.showNews && (
            <MenuItem onClick={handleShowNews}>Show news</MenuItem>
          )}
          {contextNews.showNews && (
            <MenuItem onClick={handleHideNews}>Hide news</MenuItem>
          )}
        </Menu>
      </div>
    </Stack>
  )
}

export default Navbar
