import React from "react";
import propTypes from "prop-types"; 
import {cardInfo} from "./info";

const Card = ({image, title, texto}) => {
    return (
        <div className="col-3 ">
            <div className="card h-100 mx-1">
                <img src={image} style={{ height: "350px", objectFit: "cover" }} className="card-img-top border rounded "  />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">{texto}</p>
                </div>
                <div className="card-footer text-center">
                    <small className="text-body-secondary btn btn-secondary">Compra una obra!</small>
                </div>
            </div>
        </div>
    )
};

export default Card;

Card.proptType = {
	image: propTypes.string,
    title: propTypes.string,
    texto: propTypes.string,
} 