import { useState } from 'react'
import { useNewsContext } from '../context/NewsContext'
import { Stack } from '@mui/material'
import settings from '../assets/images/settings.svg'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const Navbar = () => {
  const { showNews, setShowNews } = useNewsContext()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const showOrHideNews = (boolean) => {
    setShowNews(boolean)
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
      <p
        style={{
          fontWeight: 400,
          fontSize: '36px',
          fontFamily: 'Actor',
        }}
      >
        To Do
      </p>

      <div>
        <Button onClick={(event) => setAnchorEl(event.currentTarget)}>
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
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {!showNews && (
            <MenuItem onClick={() => showOrHideNews(true)}>
              Показать новости
            </MenuItem>
          )}
          {showNews && (
            <MenuItem onClick={() => showOrHideNews(false)}>
              Скрыть новости
            </MenuItem>
          )}
        </Menu>
      </div>
    </Stack>
  )
}

export default Navbar
