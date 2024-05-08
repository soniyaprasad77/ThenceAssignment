import React from 'react';

function Title({ title, hasShadow }) {
    return (
        <>
            <h1 className={`text-4xl font-bold}`}
                style={hasShadow ? { textShadow: '0 4px 3px #C6C6C6' } : {}}
            >
                {title}
            </h1>
        </>
    )
}

export default Title;
