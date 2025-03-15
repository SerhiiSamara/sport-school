import React from 'react'

const ResultButton: React.FC = () => {
	return (
		<>
			<button className='flex flex-col items-center justify-center w-[327px] md:w-[227px] lg:w-[327px] h-[48px] md:h-[44px] lg:h-[48px] text-base font-display bg-button hover:bg-button-hover active:bg-button-press rounded-sm'>
				<span>Результати</span>
			</button>
		</>
	)
}

export default ResultButton;