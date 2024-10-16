import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Card from "./Card"
import PropTypes from "prop-types";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div>
					<Jumbotron />

					<div className="cardsContainer">
						<Card title="Joyería en Acero"
							texto="Pieza única realizada en acero inoxidable. Conjunto de gargantilla y pendientes."
							image="https://scontent-mad1-1.xx.fbcdn.net/v/t1.18169-9/10403463_10202226791531084_910745788577560378_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f798df&_nc_ohc=vF93Ncok3okQ7kNvgEWrZ-N&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&oh=00_AYBs9Qkh8OSzjkB94jWt2Plm3QRnVLt5zxxnQMeUA2G_Lw&oe=6735FB6D" />
						<Card title="El pastor"
							texto="Un campesino y un verano abrasador. Obra elaborada en aceroinoxidable, 28 cm de alto por 32 cm de ancho por 25 cm de profundidad."
							image="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/340648540_2069610599910765_2347849905876643635_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EHvrhvRb1JsQ7kNvgE1yFUL&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=AcgJhI0X_eRmnTfjmKz7JvB&oh=00_AYBsfR46iSlJEqQQoDu3uFUAxElmVUqYOLQotXqAkYwL0g&oe=671470E0" />
						<Card title="Ada de los pensamientos"
							texto="Obra elaborada en aceroinoxidable, mineral de hiero y resina con tintas de alcohol. Mención de honor 2023 AEPE"
							image="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/347434404_988422085873235_6054891249413772352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pTea0zqvpaEQ7kNvgEPIvMr&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=AvAV6pk6V4d5n77erj-ML6Q&oh=00_AYD0RhdCuTOaT79o_lcorVeNjTmjN7Psf4tjdr5z0-DsYA&oe=67148460" />
						<Card title="Sueños de la arboleda"
							texto="Obra elaborada en aceroinoxidable y resina con tintas de alcohol. Mención de honor 2021 Universidad de La Laguna"
							image="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/241455166_10220466359828892_3933434571968941590_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MJzx2KKDAvoQ7kNvgE_SNZM&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=Ahn3WOzZVn6wpYyz8OtDqOX&oh=00_AYDca5Qxke2avY6K1VPiZAAzRh-bcUnwvUd2szFxZC5pKA&oe=6714756B" />
					</div>

				</div>
			</div>
			<div class="card-footer text-light text-center bg-dark mt-3 mb-3">
				Copyright @ tu pagina 2024
			</div>
		</>
	);
};

export default Home;

