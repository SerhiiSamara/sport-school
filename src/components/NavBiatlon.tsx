import React from 'react'

import Title from './Title';

const NavBiatlon: React.FC = () => {
	return (
		<nav className='container pt-[28px]'>
			<Title type='page-title'>Біатлон</Title>
			<div className='w-full mobile-nav mb-[22px]'>
				<p className='mobile-nav-title'>Розділи</p>
			</div>
		</nav>)
}

export default NavBiatlon;