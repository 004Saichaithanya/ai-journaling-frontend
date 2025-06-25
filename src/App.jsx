import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import EntryForm from './components/EntryForm'
import Timeline from './components/Timeline'

const App = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          📝 AI Journal
        </Typography>
        <EntryForm />
        <Timeline />
      </Box>
    </Container>
  )
}

export default App
