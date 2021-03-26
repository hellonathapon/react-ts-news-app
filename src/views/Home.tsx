import React from 'react';
import useFetch from '../useFetch';
import Layout from '../components/Layout';
import { Breaking, Trending, News } from '../components/home'
import { INews } from '.././interfaces/interfaces';

interface hover {
    imgToUrl: string,
    des: string
}
const Home = (): JSX.Element => {

    const url = process.env.REACT_APP_BASE_URL;    
    // custom hook
    const data = useFetch<INews>(url!);


    return (
        <Layout>
            <div className="home-grid">
                <Breaking 
                    IBreaking={data.response ? data.response[0] : null}
                />
                <Trending TNews={data.response ? data.response : null}/>
                <News data={data.response ? data.response : null}/>
            </div>
        </Layout>
    )
}

export default Home;