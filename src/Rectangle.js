import CircleP from "./CircleP";

function Rectangle(){
    let length = 8;
    let breadth = 12;
    let height = 14;
    let area = length * breadth * height;

    return(
        <div>
            <h3>Rectangle</h3>
            <p>length : {length}<br/>breadth : {breadth}<br/>height : {height}</p>
            <p>Area of the Rectangle : {area}</p>
            <hr/>

            <CircleP/>
        </div>
    )
}

export default Rectangle;