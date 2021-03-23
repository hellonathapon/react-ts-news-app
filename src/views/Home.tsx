import useFetch from '../useFetch';
import Layout from '../components/Layout';
import { Breaking, Trending } from '../components/home'

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


const Home = (): JSX.Element => {

    const url = process.env.REACT_APP_BASE_URL;
    
    // custom hook
    const data = useFetch<INews>(url!);


    return (
        <Layout>
            <div className="home-grid">
                <Breaking 
                    BNews={data.response ? data.response[0] : null}
                />
                <Trending TNews={data.response ? data.response : null}/>
                <div className="home-grid-item home-grid-item-3"></div>
            </div>
        </Layout>
    )
}

export default Home;