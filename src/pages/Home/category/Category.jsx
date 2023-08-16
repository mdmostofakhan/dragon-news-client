import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
            <h4>This Category News:{categoryNews}</h4>
        </div>
    );
};

export default Category;