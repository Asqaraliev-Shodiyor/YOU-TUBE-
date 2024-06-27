import React, { useEffect, useState } from 'react'
import './result.css'
import Sidebar from '../Home/Sidebar/Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { APIKEY } from '../base/token'
import axios from 'axios'
import { IconButton } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import Loading2 from '../Loading/Loading2'


function Result() {
	const { searchtitle } = useParams()
	const [Searched, setSearched] = useState([])
	const navigate = useNavigate()
	const [loading, setloading] = useState(true)


	useEffect(() => {
		getvideos_categories_all()
	}, [])

	function getvideos_categories_all() {
		axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchtitle}&type=video&key=${APIKEY}&maxResults=50`).then((res) => {
			console.log('all', res.data.items)
			setSearched(res.data.items)
			setloading(false)

		})
	}
		
		

	return (
		<div className='home-container'>
			<div className="sidebar-container">
				<Sidebar />
			</div>
			<div className="videos-container searched-container">
				{ loading ? <Loading2 /> :
					Searched.map((item, index) => (
						<div className='recomended-card2' onClick={() => navigate(`/watch/${item.id.videoId}`)}>
							<div className="rec-img">
								<img src={item.snippet.thumbnails.high.url} alt="" />
							</div>
							<div className="rec-desc">
								<div className='rec-flex'>
									<h4>{item.snippet.title.slice(0, 80)}</h4>
									<IconButton>
										<MoreVert />
									</IconButton>
								</div>
								<p>{item.snippet.channelTitle.slice(0, 80)}</p>
								<p>10.2k views 3 weeks ago</p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Result