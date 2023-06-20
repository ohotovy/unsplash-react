import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

export function Image(){
    const { context: { apiKey } } = useContext(Context)
    const { image_id } = useParams();
    const [image, setImage] = useState('')

    const fetchImage = async () => {
        const response = await fetch(`https://api.unsplash.com/photos/${image_id}?client_id=${apiKey}`);
        const data = await response.json();
        setImage(data);
    };
    useEffect(() => {
        fetchImage();
    }, [image_id]);

    return(
        image ?
        <div className="imageContainer">
            <img src={image.urls.regular} alt={image.description} />
            <div className="imageDetails">
                <p>Captured with: {image.exif && image.exif.name}</p>
                <p>{image.description ? image.description : 'This image has no description'}</p>
                <p>Downloads: {image.downloads}</p>
                <p>Location: {(image.location && image.location.city || image.location && image.location.country) ? image.location.city +', '+ image.location.country : 'Unknown'}</p>
                <p>Author: <Link to={`/users/${image.user.username}`}>{image.user.name}</Link></p>
            </div>
        </div>
        :
        <></>
      )
}