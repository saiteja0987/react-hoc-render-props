import  WapperHoc from "./WrapperHoc"
  function LikeImageHoc (props){
    return (
        <div>
            <button onClick={props.handleCounter}> Like Image {props.counter}</button>
        </div>
    )
  }

  export default WapperHoc(LikeImageHoc);