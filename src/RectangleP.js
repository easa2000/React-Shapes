import React from "react";
class RectangleP extends React.Component{
    render(){
        var length = 4;
        var breadth = 5;
        var perm = 2 * (length + breadth);

        return(
            <div>
                <h3>Rectangle</h3>
                <p>length : {length}</p>
                <p>breadth : {breadth}</p>
                <p>Perimeter of Rectangle : {perm}</p>
                <hr/>

            </div>
        )
    }
}

export default RectangleP;
