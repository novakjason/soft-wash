export default function SnipIt(props) {
    return (
        <div class="col-sm-4 text-center" style={{paddingTop:" 45px", paddingBottom:"45px"}}>
            {props.children}
            <h3>{props.h3}</h3>
            <p>{props.smTalk}</p>
        </div>
    );
}