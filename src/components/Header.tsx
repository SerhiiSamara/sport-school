import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
	return (
		<header className='bg-header text-white'>
			<div className='container flex justify-between items-center m-auto py-[6px]'>
				<div className='flex items-center'>
					<Image src='/mobileLogo.png' alt='Logo' width={60} height={51} className='mr-[5px]' />
					<p className='text-lg font-bold leading-[110%]'>КДЮСШ</p>
				</div>
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
