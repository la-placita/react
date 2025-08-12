import React from "react";

export const ShowIncrementar = React.memo(({increment}) => {
    console.log('Me volvì a genear');
    return (
        <button
            className="btn btn-primary"
            onClick={
                () => {
                    increment(5)
                }
            }
        >
            Incrementar
        </button>
    );
})

