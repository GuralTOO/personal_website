import React, { useState, useEffect, useRef } from 'react';
import { DoubleArrowRightIcon, DoubleArrowLeftIcon } from '@radix-ui/react-icons';
function RotatingItems(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isHovering = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovering.current) {
                setCurrentIndex(prevIndex => (prevIndex + 1) % props.items.length);
            }
        }, 3000);

        return () => clearInterval(interval); // cleanup on component unmount
    }, [props.items]);

    const handleLeftClick = () => {
        setCurrentIndex(prevIndex => {
            if (prevIndex === 0) return props.items.length - 1;
            return prevIndex - 1;
        });
    };

    const handleRightClick = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % props.items.length);
    };

    return (
        <div 
            onMouseEnter={() => isHovering.current = true}
            onMouseLeave={() => isHovering.current = false}
            style={{ 
                width: '100%', 
                height: '100%', 
                overflow: 'hidden', 
                position: 'relative', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
        >
            {props.items.map((item, index) => (
                <div key={index} style={{ display: currentIndex === index ? 'block' : 'none' }}>
                    {item}
                </div>
            ))}
            
            <DoubleArrowLeftIcon onClick={handleLeftClick} style={{ cursor: 'pointer', position: 'absolute', top: '50%', left: '5px', transform: 'translateY(-50%)' }} />
            <DoubleArrowRightIcon onClick={handleRightClick} style={{ cursor: 'pointer', position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%)' }} />

        </div>
    );
}



export default RotatingItems;