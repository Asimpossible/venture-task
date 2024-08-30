import React from 'react';

interface ArrowProps {
    onClick: () => void;
}


export const SampleUpcomingArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/3 -right-12 bg-white rounded-full cursor-pointer"
            onClick={onClick}
        >
            <img src="/images/upcomingArrow.svg" alt="" />
        </div>
    );
};

