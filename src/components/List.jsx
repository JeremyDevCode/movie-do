
import React, { useRef, useState } from 'react'

function List({children}) {

  const listRef = useRef()

  const [slideNumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber-1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } 
    if (direction === "right" && slideNumber < 14) {
      setSlideNumber(slideNumber+1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    if (slideNumber >= 14) {
      setSlideNumber(0);
      listRef.current.style.transform = `translateX(0)`
    }
  }

  return (
    <div className='w-full'>
        <div className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className={`w-[40px] h-[40px] text-white bg-transparent absolute top-0 left-0 bottom-0 m-auto cursor-pointer z-10 ${slideNumber === 0 ? 'hidden' : 'block'}`} 
          onClick={() => handleClick("left")}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <div className='flex ml-[0px] w-max mt-5 duration-200 ease-in' ref={listRef}>
            {children}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] text-white bg-transparent absolute top-0 bottom-0 m-auto right-0 cursor-pointer"
          onClick={() => handleClick("right")}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
    </div>
  )
}

export default List