import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<header className='bg-header text-white'>
			<div className='container flex justify-between items-center m-auto py-[6px]'>
				<Link href={'/'} className='flex items-center'>
					<Image src='/svg/headerLogo.svg' alt='Logo' width={60} height={51} className='mr-[5px]' />
					<p className='text-lg font-ermilov font-bold leading-[110%]'>КДЮСШ</p>
				</Link>
				<button>
					<Image
						className="ml-1"
						src="/svg/burger.svg"
						alt="icon burger"
						width={27}
						height={18}
					/>
				</button>
			</div>
		</header>
	)
}

export default Header;
