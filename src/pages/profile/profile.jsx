import React, { Component } from 'react'
import Navbar from '../../components/landingPage/Navbar'
import DetailProfile from '../../components/profile/profile'
import Footer from '../../components/landingPage/Footer'

class Profile extends Component {
	render () {
		return (
			<>
				<Navbar />
				<DetailProfile />
				<Footer />
			</>
		)
	}
}
export default Profile