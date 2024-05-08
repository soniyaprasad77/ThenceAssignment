import React from 'react';

function Caption({ caption, hasShadow }) {
    return (
        <div>
            <>
                <h3 className="font-coveredByYourGrace text-3xl text-green-400"
                    style={hasShadow ? { textShadow: '0 4px 3px #C6C6C6' } : {}}
                >
                    {caption}
                </h3>
            </>
        </div>
    )
}

export default Caption;
