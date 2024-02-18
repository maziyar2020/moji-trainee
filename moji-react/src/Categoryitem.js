import React from 'react'

const Categoryitem = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.title}
        </div>
    )
}

export default Categoryitem
