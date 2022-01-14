import { useEffect, useState} from 'react';
import axios from 'axios';

const useAxiosFetch = (url, search) => {
    const [videosList, setvideosList] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
        try {
            const response = await axios.get(url);
            const items = await response.data.items;
            console.log(items);
            setvideosList(items);
         } catch (error) {
            console.error(error);
        }
    };

    getVideos();

    }, [search])

    return {  url, videosList }
}

export default useAxiosFetch;