import React from 'react';

function PortWorks({workList}) {
    return (
        <ul>
            {
                workList.length>0
                ?
                workList.map((work,index)=><li key={index}>{work}</li>)
                :
                <li>пусто</li>

            }
        </ul>
    );
}

export default PortWorks;