import React from "react";

function Jumbotron() {
    return (
        <div className= "card text-bg-dark mb-2 mt-2">   
            <img src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.18169-9/561803_3855410952093_1599836451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2a1932&_nc_ohc=ujLKgvJjT8oQ7kNvgE0pCdM&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&oh=00_AYDAYusXkkkCFG0AN3Y53ljWtj5TNsKGnF5uZw3vdmgdpw&oe=6738A9E2" class="card-img" style={{ height: "250px", objectFit: "cover" }}/>
            <div className="card-img-overlay text-center">
                <p className="card-title fs-1 fw-bold">Escultor Carloleonardo Aponte</p>
                <p className="card-text">Especializado en hierro y acero inoxidable. 35 años de experiencia trabajando en hierro, 10 años trabajando con acero inoxidable elaborando joyería artística y 4 años haciendo esculturas en acero inoxidable. Actualmente investigando el arte fluido en la escultura y convirtiendo trazos pictóricos en volúmenes escultóricos.</p>
                <a href="#" className="btn btn-secondary">Premios y reconocimientos</a>
            </div>
        </div>
    )
}
export default Jumbotron;//"card w-100 mb-3"