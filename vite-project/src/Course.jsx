function Course(props){
    function BuyCourse() {
        console.log(props.name," Purchased...!");
    }
    return(
        <div className="card">
            <img src={props.image} alt="corse-image" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>Rating: {props.rating}⭐</p>
            <button onClick={BuyCourse}>Buy Now</button>
        </div>
    );
}
export default Course;