import WrapperHoc from "./WrapperHoc"

function LikePostHOC(props) {
    return(
        <div>
            <button onClick={props.handleCounter}>Like Post {props.counter}</button>
        </div>
    )
}

export default WrapperHoc(LikePostHOC);