function DegitalItem(props){
    return(
        <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay={props.delay}>
    <i className={props.iconClass} />
    <h4>{props.title}</h4>
    <p>{props.description}</p>
  </div>

    );

}
export default DegitalItem;