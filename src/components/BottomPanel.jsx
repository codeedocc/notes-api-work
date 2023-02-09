import { Box, Stack } from '@mui/material'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { useNewsContext } from '../context/NewsContext'

const AddButton = () => (
  <Fab color="default" aria-label="add">
    <AddIcon />
  </Fab>
)

const NewsPanel = ({ showNews, headline }) => (
  <>
    {showNews && (
      <Box className="news">
        <p>{headline}</p>
      </Box>
    )}
  </>
)

const BottomPanel = () => {
  const contextNews = useNewsContext()
  const [headline, setHeadline] = useState('Latest news...')

  const { isLoading, error, data } = useQuery('news', () =>
    fetch(
      'https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=5',
      {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_NEWS_KEY,
          'X-RapidAPI-Host': 'cnbc.p.rapidapi.com',
        },
      }
    ).then((res) => res.json())
  )

  useEffect(() => {
    const min = 0
    const max = data?.data?.mostPopularEntries?.assets?.length - 1
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min

    setHeadline(data?.data?.mostPopularEntries?.assets[randomIndex]?.headline)
  }, [contextNews.showNews])

  if (isLoading) return 'Loading...'

  if (error) return 'Error: ' + error.message

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      pr={5}
      pb={4}
      sx={{
        position: 'sticky',
        bottom: '20px',
      }}
    >
      <NewsPanel showNews={contextNews.showNews} headline={headline} />
      <AddButton />
    </Stack>
  )
}

export default BottomPanel
