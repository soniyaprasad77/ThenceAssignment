import React from 'react'

function Caption({caption}) {
    return (
        <div>
            <>
                <h3 className="font-coveredByYourGrace text-3xl text-green-400">
                    {caption}
                </h3>
            </>
        </div>
    )
}

export default Caption;
