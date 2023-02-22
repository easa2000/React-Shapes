import React from "react";
import TriangleP from "./TriangleP";
class CircleP extends React.Component{
    render(){
        var radius = 6;
        var perm = 2 * 3.14 * radius;
        return(
            <div>
                <h1>Perimeter of The Shapes (using Class Component)</h1>
                <hr/>
                <h3>Circle</h3>
                <p>radius : {radius}</p>
                <p>Perimeter of circle : {perm}</p>
                <hr/>
                <TriangleP/>

            </div>
        )
    }
}

export default CircleP;
