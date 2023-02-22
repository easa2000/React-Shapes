import Triangle from './Triangle.js';
import './App.css';
function Circle(){
    let radius = 5;
    let area = 3.14 * radius;

    return(
        <div>
            <h1>Area of The Shapes (using Function Component)</h1>
            <hr/>
            <h3>Circle</h3>
            <p>radius of circle : {radius}</p>
            <p> Area of Circle is {area}</p>
            <hr/>
            <Triangle/>
        </div>
    );
}

export default Circle;
