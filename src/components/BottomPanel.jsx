import { Box, Stack } from '@mui/material'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { useNewsContext } from '../context/NewsContext'
import AddTodo from './AddTodo'
import Loader from './Loader'

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
  const { showNews } = useNewsContext()
  const [headline, setHeadline] = useState('Latest news...')

  const { isLoading, error, data } = useQuery('news', () =>
    fetch(
      'https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=30',
      {
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_NEWS_KEY,
          'X-RapidAPI-Host': 'cnbc.p.rapidapi.com',
        },
      }
    ).then((res) => res.json())
  )

  const info = data?.data?.mostPopularEntries

  useEffect(() => {
    const min = 0
    const max = info?.assets?.length - 1
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min

    setHeadline(info?.assets[randomIndex]?.headline)
  }, [showNews, info])

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
      {isLoading && <Loader />}
      <NewsPanel showNews={showNews} headline={headline} />
      <AddTodo />
    </Stack>
  )
}

export default BottomPanel
