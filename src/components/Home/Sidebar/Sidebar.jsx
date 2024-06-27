import React from 'react'
import './sidebar.css'
import { Avatar, Button, Divider } from '@mui/material'
import {Newspaper,EmojiEventsOutlined,LocalFireDepartment,MusicNoteOutlined,OnlinePredictionOutlined,SportsEsportsOutlined, AccessTime, Contacts, DataArray, Download,
	 HomeSharp, MovieFilter, PlaylistPlay, PunchClock, Restore,SmartDisplay, Subscriptions, ThumbUpAltOutlined,
	  VideoCameraBack, 
	  MovieFilterOutlined,
	  SubscriptionsOutlined} from '@mui/icons-material'
import { Flex } from 'antd'


function Sidebar() {
  return (
	<div className='sidebar'>
		<Button className='side-button' startIcon={<HomeSharp className='btn-icon' />}> <p>Home</p></Button>
		<Button className='side-button' startIcon={<MovieFilterOutlined className='btn-icon' />}> <p>Shorts</p></Button>
		<Button className='side-button' startIcon={<SubscriptionsOutlined className='btn-icon' />}> <p>Subscribe</p></Button>
		<Divider /><h4 className='text-p'> You > </h4>
		<Button className='side-button' startIcon={<Restore className='btn-icon' />}> <p>History</p></Button>
		<Button className='side-button' startIcon={<PlaylistPlay className='btn-icon' />}> <p>Playlist</p></Button>
		<Button className='side-button' startIcon={<AccessTime className='btn-icon' />}> <p>Watch Later</p></Button>
		<Button className='side-button' startIcon={<ThumbUpAltOutlined className='btn-icon' />}> <p>Liked Videos</p></Button>
		<Divider /><h4 className='text-p'> Explore</h4>
		<Button className='side-button' startIcon={<LocalFireDepartment className='btn-icon' />}> <p>Trending</p></Button>
		<Button className='side-button' startIcon={<MusicNoteOutlined className='btn-icon' />}> <p>Music</p></Button>
		<Button className='side-button' startIcon={<OnlinePredictionOutlined className='btn-icon' />}> <p>Live</p></Button>
		<Button className='side-button' startIcon={<SportsEsportsOutlined className='btn-icon' />}> <p>Gaming</p></Button>
		<Button className='side-button' startIcon={<Newspaper className='btn-icon' />}> <p>News</p></Button>
		<Button className='side-button' startIcon={<EmojiEventsOutlined className='btn-icon' />}> <p>Sports</p></Button>
		{/* <h4 style={{marginTop:10}}>Subscriptions</h4> */}
		{/* <Flex align='center' gap='10px' style={{marginTop:10}}>
			<Avatar  sx={{ width: 28, height: 28,fontSize:12}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<p>Dostonbek </p>
		</Flex>
		<Flex align='center' gap='10px' style={{marginTop:10}}>
			<Avatar  sx={{ width: 28, height: 28,fontSize:12}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<p>Yuksalish maktabi </p>
		</Flex>
		<Flex align='center' gap='10px' style={{marginTop:10}}>
			<Avatar  sx={{ width: 28, height: 28,fontSize:12}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<p>Yoshlar ittifoqi </p>
		</Flex> */}

	</div>
  )
}

export default Sidebar