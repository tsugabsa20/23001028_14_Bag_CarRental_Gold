import "./style.css"
function WhyCard(props) {
    return (
    <div className="whyUs">   
        <div className="icon">
            <img src={props.img} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>     
    )
}
export default WhyCard