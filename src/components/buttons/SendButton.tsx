import React from 'react'

const SendButton: React.FC = () => {
	return (
		<>
			<button className='flex flex-col items-center justify-center w-[327px] md:w-[297px] lg:w-[297px] h-[48px] md:h-[44px] lg:h-[48px] text-base font-display bg-button hover:bg-button-hover active:bg-button-press rounded-sm'>
				<span>Відправити</span>
			</button>
		</>
	)
}

export default SendButton;