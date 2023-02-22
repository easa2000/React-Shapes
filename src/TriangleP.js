import React from "react";
import SquareP from "./SquareP";
class TriangleP extends React.Component{
    render(){
        var length = 4;
        var breadth = 7;
        var perm = (2 * length) + breadth;

        return(
            <div>
                <h3>Triangle</h3>
                <p>side : {length}</p>
                <p>breadth : {breadth}</p>
                <p>Perimeter of the Triangle : {perm}</p>
                <hr/>
                <SquareP/>
            </div>
        )
    }
}

export default TriangleP;