import Square from './Square.js';
function Triangle(){
    let breadth = 4;
    let height = 6;
    let area = 0.5 * breadth * height;
    return(
        <div>
            <h3>Triangle</h3>
            <p>height : {height}<br/>breadth : {breadth}</p>
            <p>Area of the Triangle : {area}</p>
            <hr/>
            <Square/>
        </div>
    )
}

export default Triangle;