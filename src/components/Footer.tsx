import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ContactButton from './buttons/ContactButton';

const Footer: React.FC = () => {
	return (
		<footer className='bg-black flex justify-center'>
			<div className='container pt-[20px] pb-2'>
				<div className='flex justify-between items-center mb-[58px]'>
					<div className='flex items-start'>
						<Image
							className="mr-[6px]"
							src="/svg/locationIcon.svg"
							alt="icon location"
							width={24}
							height={24}
						/>
						<div className='flex flex-col gap-[6px] font-display text-sm'>
							<p>
								<span className='text-base font-medium'>Київ, </span>
								Голосіївский район,
							</p>
							<p>вул. Героїв Маріуполя 7а</p>
							<p>Тел.:<span>(044) 250-10-33</span></p>
						</div>
					</div>
					<Link href={'/'}>
						<Image
							className=""
							src="/svg/footerLogo.svg"
							alt="logo"
							width={107}
							height={93}
						/></Link>
				</div>
				<div className='flex justify-between mb-8'>
					<div className='flex flex-col gap-2 font-display text-sm'>
						<p>Залишились питання?</p>
						<ContactButton />
					</div>
					<div className='flex gap-3'>
						<Image
							className=""
							src="/svg/instagramIcon.svg"
							alt="logo"
							width={26}
							height={26}
						/>
						<Image
							className=""
							src="/svg/facebookIcon.svg"
							alt="logo"
							width={26}
							height={26}
						/>
					</div>
				</div>
				<div className='flex flex-col items-center gap-1 text-xs'>
					<p>© 2024, Всі права захищенні</p>
					<p>Договір оферти і Політика конфіденційності</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
