import React,{useState} from "react";
import './home.css';
import PullToRefresh from 'react-pull-to-refresh';
import axios from "axios";

const Home = () => {

    const [dummyData, setDummyData] = useState('Minesh');

    const getData = (url) => {
        return axios.get(url);
    }

    const apiData = async () => {
        await getData('https://jsonplaceholder.typicode.com/posts').then((data) => {
            setDummyData(data?.data)
        })
    }

    const handleRefresh = async () => {
        await apiData()
    };

    return (
        <PullToRefresh onRefresh={handleRefresh} >
            {typeof(dummyData) === 'object' ?
                dummyData.map((data,key) =>
                    <div key={key}>
                        <div className="dynamic-data" key={key}>
                            <div>Id:- {data.id}</div>
                            <div>Body:- {data.body}</div>
                            <div>Title:- {data.title}</div>
                            <div>UserId:- {data.userId}</div>
                        </div>
                        <hr />
                    </div>
                )
                :
                <><span className="genericon genericon-next"></span><div className="genericon genericon-next dummy-class">Minesh</div></>
            }
        </PullToRefresh>
    )
}

export default Home