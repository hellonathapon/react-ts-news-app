import React from 'react'
interface INews {
    title: string,
    content: string,
    description: string,
    author: string,
    publishedAt: string,
    url: string,
    urlToImage: string,
    source: {
        id: string,
        name: string
    }
}

interface TrendingNews {
    TNews: INews[] | null
}

const Trending: React.FC<TrendingNews> = ({TNews}): JSX.Element => {
    console.log(TNews)
    return (
        <div className="home-grid-item home-grid-item-2 trending">
            { TNews ? TNews.slice(1, 5).map(n => (
                <div>
                    <h3><a href="#">{n.title}</a></h3>
                    <small>{n.description}</small>
                </div>
            )): null }
        </div>
    )
}

export default Trending;