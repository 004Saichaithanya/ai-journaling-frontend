import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import axios from 'axios'

const Timeline = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    const res = await axios.get('https://ai-journaling-backend.onrender.com/entries')
    setEntries(res.data)
  }

  return (
    <Box>
      {entries.map((entry) => (
        <Card key={entry.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              {entry.text}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Summary: {entry.summary}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Mood: {entry.mood}
            </Typography>
            <Typography variant="caption" display="block">
              {entry.created_at}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default Timeline
