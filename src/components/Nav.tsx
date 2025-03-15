import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav: React.FC = () => {
	return (
		<nav className='bg-nav-gradient'>
			<div className='container m-auto pt-[10px] pb-1'>
				<div className='flex justify-center py-1 gap-10'>
					{/* <Link href={'/football/main'} className='flex items-center'>
						<Image
							className='mr-[9px]'
							src="/svg/footballIcon.svg"
							alt="icon football"
							width={27}
							height={28}
						/>
						<p className='text-black-text font-semibold'>Футбол</p>
					</Link>
					<Link href={'/biatlon/main'} className='flex items-center'>
						<Image
							className='mr-[9px]'
							src="/svg/biatlonIcon.svg"
							alt="icon football"
							width={30}
							height={30}
						/>
						<p className='text-black-text font-semibold'>Біатлон</p>
					</Link> */}
					<Link href={'/sky_racing/main'} className='flex items-center'>
						<Image
							className='mr-[9px]'
							src="/svg/skyRacingIcon.svg"
							alt="icon football"
							width={39}
							height={29}
						/>
						<p className='text-black-text font-semibold'>Лижні гонки</p>
					</Link>
					<Link href={'/alpine_skiing/main'} className='flex items-center'>
						<Image
							className='mr-[9px]'
							src="/svg/alpineSkiingIcon.svg"
							alt="icon football"
							width={30}
							height={32}
						/>
						<p className='text-black-text font-semibold'>Гірські лижі</p>
					</Link>
				</div>
			</div>
		</nav>

	)
}

export default Nav;