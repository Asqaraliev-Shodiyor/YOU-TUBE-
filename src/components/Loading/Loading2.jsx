import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './load2.css'

function Loading2() {
  return (
    <div className='home-container'>
      <div className="home-wrapper">
        {[1, 2, 3].map(() => (
          <div className='cards'>
            <Stack spacing={1}>
              <Skeleton variant="rounded" width={400} height={260}  />
              <div className="card">
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
              <Skeleton variant="text"width={300} sx={{ fontSize: '0.5rem' }} />
              </div>
              <Skeleton variant="text"width={250} sx={{ fontSize: '1rem' }} />
           </Stack>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Loading2