import React from 'react';

interface IData {
    data: string;
}

const Data = ({data}: IData) => {
    return (
        <div>
            {data}
        </div>
    );
};

export default Data;