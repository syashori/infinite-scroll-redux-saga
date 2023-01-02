import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { TOKEN } from '../utils/config'

const DetailFoto = () => {
    const [data, setData] = useState()
    const { id } = useParams()

    useEffect(()=>{
        getData();
        // eslint-disable-next-line
    },[]);

    const getData = async()=>{
        await axios.get(`https://api.unsplash.com/photos/${id}`,{
            headers: { Authorization: `Client-ID ${TOKEN}` }
        }).then(response=>{
            setData(response.data)
        }).catch()
    }
    return (
        <div className="container">
            {data ? (
                <div className="detail-foto">
                    <img src={data.urls.regular} alt={data.urls.regular} className='single-foto-detail'/>
                    <div>
                        <div>Likes : {data.likes}</div>
                        <div>Description : {data.description}</div>
                        <div>Owner : {data.user.name}</div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default DetailFoto