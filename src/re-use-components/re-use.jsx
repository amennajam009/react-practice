
export default function ReUseComponent({card_heading = "" , card_description = "" , btnClassName = "" }){
    return(
        <>
<div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">{card_heading}</h5>
    <p className="card-text">{card_description}</p>
    <a href="#" className={btnClassName}>Go somewhere</a>
  </div>
</div>
        </>
    )
}