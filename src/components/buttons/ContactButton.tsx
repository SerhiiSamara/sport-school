import React from 'react'

const ContactButton: React.FC = () => {
	return (
		<>
			<button className='flex flex-col items-center justify-center w-[137px] h-[34px] lg:h-[38px] text-base font-display bg-button hover:bg-button-hover active:bg-button-press rounded-sm'>Зв’язатись</button>
		</>
	)
}

export default ContactButton;