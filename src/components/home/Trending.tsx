import React from 'react'
import { INews } from '../../interfaces/interfaces';

interface TrendingNews {
    TNews: INews[] | null
}

const Trending: React.FC<TrendingNews> = ({TNews}): JSX.Element => {
    console.log(TNews)
    return (
        <div className="home-grid-item home-grid-item-2 trending">
            { TNews ? TNews.slice(1, 5).map(n => (
                <div className="trending-card">
                    <h3><a href={n.url} target="_blank">🔥 {n.title.slice(0, n.title.indexOf('-'))}</a></h3>
                    <small>{n.description}</small>
                </div>
            )): null }
        </div>
    )
}

export default Trending;