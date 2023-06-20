import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

import { SearchBar } from './SearchBar.jsx'
import { SearchResults } from './SearchResults.jsx'
import { Loading } from "./Loading.jsx";

import { Context } from '../contexts/Context.jsx';

export function HomePage() {
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const { query } = useParams()

    const { context: { apiKey } } = useContext(Context)

    const fetchImageList = async () => {
        setIsLoading(true);
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${apiKey}`);
        const data = await response.json();
        setImageList(data.results);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchImageList();
    }, [page, query]);

    return (
        <>
            <SearchBar />
            {
            isLoading !== true ?
                imageList.length!== 0 ?
                    <SearchResults imageList={imageList} page={page} setPage={setPage}/>
                    :
                    <></>
                :
                <Loading/>
            }
        </>
    )
}

