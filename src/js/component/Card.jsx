import React from "react";

function Card(props) {
    return (
        <div className="col-3 ">
            <div className="card h-100 mx-1">
                <img src={props.image} style={{ height: "350px", objectFit: "cover" }} className="card-img-top border rounded " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.texto}</p>
                </div>
                <div className="card-footer text-center">
                    <small className="text-body-secondary btn btn-secondary">Compra una obra!</small>
                </div>
            </div>
        </div>
    )
}
export default Card;

/* Card.ProtoType = {
	image: PropTypes.string,
    title: PropTypes.string,
    texto:PropTypes.string,
} */