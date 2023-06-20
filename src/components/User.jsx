import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Loading } from "./Loading.jsx";

import { Context } from "../contexts/Context.jsx";

export function User() {
    const [userInfo, setUserInfo] = useState(null)
    const [userImages, setUserImages] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    const { username } = useParams();

    const { context } = useContext(Context);

    const fetchUserInfo = async () => {
        setIsLoading(true);
        const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${context.apiKey}`);
        const data = await response.json();
        setUserInfo(data);
    };
    const fetchuserImages = async () => {
        const response = await fetch(`https://api.unsplash.com/users/${username}/photos?per_page=12&client_id=${context.apiKey}`);
        const data = await response.json();
        setUserImages(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchUserInfo();
        fetchuserImages();
    },[username])


    return (
        isLoading !== true ?
            userInfo ?
                <div>
                    <div className="UserInfo">
                        <h3>{userInfo.name}</h3>
                        <img src={userInfo.profile_image && userInfo.profile_image.large}  alt="Profile Image"/>
                        <p>Downloads: {userInfo.downloads}</p>
                        <p>Followers: {userInfo.followers_count}</p>
                        <p>{userInfo.bio}</p>
                    </div>
                    <ul className="UserPhotos">
                        {userImages && userImages.map((image) => (
                            <li key={image.id} >
                                <Link to={`/images/${image.id}`}><img src={image.urls.raw + "&fit=crop&w="+context.width+"&h="+context.height} alt={image.alt_description} /></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <></>
            :
            <Loading/>
    )
}