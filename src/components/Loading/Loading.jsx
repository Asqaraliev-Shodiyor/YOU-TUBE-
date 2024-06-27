import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './load.css'

function Loading() {
  return (
    <div className='home-container'>
      <div className="home-wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <div>
            <Stack spacing={1}>
              <Skeleton variant="rounded" width={400} height={240}  />
              <div className="card">

              <Skeleton animation="wave" variant="circular" width={40} height={40} />
              <Skeleton variant="text"width={300} sx={{ fontSize: '0.5rem' }} />
              </div>
           <div className="card2">
           <Skeleton variant="text"width={250} sx={{ fontSize: '1rem' }} />
           </div>

           </Stack>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Loading