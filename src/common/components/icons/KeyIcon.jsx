import React from 'react';

export const KeyIcon = ({width=18, height=12, ...props}) => {
    return (
        <>
            <svg width={ width } height={ height } {...props} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 11.25H12V8.25H9.99C9.135 10.065 7.29 11.25 5.25 11.25C2.355 11.25 0 8.895 0 6C0 3.105 2.355 0.75 5.25 0.75C7.29 0.75 9.1275 1.935 9.99 3.75H18V8.25H16.5V11.25ZM13.5 9.75H15V6.75H16.5V5.25H8.955L8.7825 4.7475C8.2575 3.255 6.8325 2.25 5.25 2.25C3.18 2.25 1.5 3.93 1.5 6C1.5 8.07 3.18 9.75 5.25 9.75C6.8325 9.75 8.2575 8.745 8.7825 7.2525L8.955 6.75H13.5V9.75ZM5.25 8.25C4.0125 8.25 3 7.2375 3 6C3 4.7625 4.0125 3.75 5.25 3.75C6.4875 3.75 7.5 4.7625 7.5 6C7.5 7.2375 6.4875 8.25 5.25 8.25ZM5.25 5.25C4.8375 5.25 4.5 5.5875 4.5 6C4.5 6.4125 4.8375 6.75 5.25 6.75C5.6625 6.75 6 6.4125 6 6C6 5.5875 5.6625 5.25 5.25 5.25Z" fill="#5C5E61" />
            </svg>
        </>
    );
};
