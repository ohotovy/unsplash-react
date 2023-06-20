import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

export function Header(){

    const {context, dispatch} = useContext(Context)

    const [width, setWidth] = useState(context.width)
    const [height, setHeight] = useState(context.width)

    return(
        <>
            <nav id="nav">
                <Link to='/'>Home</Link>
            </nav>
            <div>
                <span>{width}x{height}</span><br/>
                W:<input type="range" min="100" max="500" step="50" value={width} onChange={(e) => {
                    e.preventDefault()
                    setWidth(e.target.value)
                }}/><br />
                H:<input type="range" min="100" max="500" step="50" value={height} onChange={(e) => {
                    e.preventDefault()
                    setHeight(e.target.value)
                }}/><br />
            </div>

            <button onClick={() => {
                dispatch({
                    type: "size/set",
                    payload: {height, width}
                })
            }}>Confirm</button>
        </>
    )
}