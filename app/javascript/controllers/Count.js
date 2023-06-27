import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Count = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <Box sx={{ p: 2, border: '2px dashed black', width: 475 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                Counter {count} clicks
              </Typography>
              <Button variant="contained" onClick={() => { setCount(count + 1) }}>Click me</Button>
            </CardContent>
          </Card>
        </Box>
    </>
    
  )
}

export default Count                                                   


