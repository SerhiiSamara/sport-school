import React from 'react'

const EnrollButton: React.FC = () => {
	return (
		<>
			<button className='flex flex-col items-center justify-center w-[343px] h-[48px] md:h-[44px] lg:h-[48px] text-base font-display bg-button hover:bg-button-hover active:bg-button-press rounded-sm'>
				<span>Як записати дитину до нашої школи</span>
			</button>
		</>
	)
}

export default EnrollButton;