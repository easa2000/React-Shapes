import React from "react";
import RectangleP from "./RectangleP";
class SquareP extends React.Component{
    render(){
        var side = 7;
        var perm = 4 * side;

        return(
            <div>
                <h3>Square</h3>
                <p>side of square : {side}</p>
                <p>Perimeter of Square : {perm}</p>
                <hr/>

                <RectangleP/>

            </div>
        )
    }
}

export default SquareP;