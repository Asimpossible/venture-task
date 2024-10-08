import React from 'react';

interface ArrowProps {
    onClick: () => void;
}


export const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/4 right-3 rounded-full cursor-pointer"
            onClick={onClick}
        >
            <img src="/images/arrow.svg" alt="" />
        </div>
    );
};

