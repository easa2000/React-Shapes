import Rectangle from "./Rectangle.js";


function Square(){
    let side_val = 5;
    let area = side_val * side_val;

    return(
        <div>
            <h3>Square</h3>
        <p>Side area of the Square : {side_val}</p>
        <p>Area of Square : {area}</p>
        <hr/>
        <Rectangle/>

        </div>

    )

}
export default Square;