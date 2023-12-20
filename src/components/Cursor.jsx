import React, { useRef, useEffect } from 'react'

function Cursor() {

    const circleRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => { 
            const posX = e.clientX;
            const posY = e.clientY;

            dotRef.current.style.left = `${posX}px`;
            dotRef.current.style.top = `${posY}px`;

            circleRef.current.style.left = `${posX-12}px`;
            circleRef.current.style.top = `${posY-12}px`;
        }

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        }
    }, [])

    return (
        <>
            <div ref={circleRef} className='fixed top-0 left-0 border-[#adb5bd] bg-none rounded-full z-20 w-8 h-8 border-2 transition-all duration-75 pointer-events-none'>
            </div>
            <div ref={dotRef} className='fixed top-40 left-50 bg-white rounded-full z-20 w-2 h-2 pointer-events-none'>
            </div>
        </>
    )
}

export default Cursor