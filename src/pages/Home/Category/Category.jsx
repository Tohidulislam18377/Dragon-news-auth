import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
    const categoriesNews = useLoaderData()
    // console.log(categoriesNews);
    const {id} = useParams()
    return (
        <div>
            { id&&
                <h3>This category News:{categoriesNews.length}</h3>
            }
            {
                categoriesNews.map(news=><NewsCard 
                key={news._id}
                news={news}
                >
                </NewsCard>)
            }
        </div>
    );
};

export default Category;