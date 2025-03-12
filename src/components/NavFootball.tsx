import React from 'react';

import Title from '@/components/Title';

const NavFootball: React.FC = () => {
	return (
		<nav className='container pt-[28px]'>
			<Title type='page-title'>Футбол</Title>
			<div className='w-full mobile-nav mb-[22px]'>
				<p className='mobile-nav-title'>Розділи</p>
			</div>
		</nav>)
}

export default NavFootball;