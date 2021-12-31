export const PageCardCategory=(props)=>{
    return(
        <>
        <div className=" col-md-3  p-3">
            <div className="CardWrapper border  p-2">
            <img className="w-100" src={props.img} alt="" />
            <p className="pt-2 text-center">{props.i.name}</p>
            </div>
        </div>
        
        </>
    )
}