import React from 'react';

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

interface IBreakingNews {
    BNews: INews | null

}
const Breaking:React.FC<IBreakingNews> = ({BNews}): JSX.Element => {
    console.log(BNews)
    return (
        <div className="home-grid-item home-grid-item-1 breaking">
            { BNews ? (
                <a href={BNews.url} target="_blank" className="card">
                    <img className="card-image" src={BNews.urlToImage} alt="image"/>
                    <article>
                        <h2>{BNews.title}</h2>
                        <p>{BNews.description}</p>
                    </article>
                </a>
            ): null }
        </div>
    )
}

export default Breaking;