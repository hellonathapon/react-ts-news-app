import React from 'react';
import { INews } from '../../interfaces/interfaces';

interface NewsProp {
    data: INews[] | null
}

const News:React.FC<NewsProp> = ({data}) => {
    return (
        <div className="home-grid-item home-grid-item-3 news">
            { data ? data.slice(6).map((n,i) => (
                <a href={n.url} target="_blank" key={i} className="news-card">
                    <figure>
                        <img src={n.urlToImage} alt="image"/>
                    </figure>
                    <article>
                        <p>{n.title}</p>
                    </article>
                </a>
            )): null }
        </div>
    )
}

export default News;