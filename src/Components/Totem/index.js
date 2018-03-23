import React from 'react';
import './totem.css';

const Totem = () => (
	<div className="Totem">
		<div className="row">
			<div className="col-12 col-md-12 col-lg-12">
				<div className="card">
					<div className="box"><a href=""><i className="fas fa-heart"></i></a></div>
					<div className="card-body">
						<h5 className="card-title">Cerro Blanco</h5>
						<h6 className="card-subtitle mb-2 text-muted">Metro Cerro Blanco</h6>
					</div>
					<div className="row icons">
						<div className="col-3 col-md-3 col-lg-3">
							<a href=""><i className="fas fa-circle"></i></a>
							<p className="text">2 Bici</p>
						</div>
						<div className="col-3 col-md-3 col-lg-3">
							<a href=""><i className="fas fa-circle"></i></a>
							<p className="text">0 Libres</p>
						</div>
						<div className="col-3 col-md-3 col-lg-3">
							<a href=""><i className="fas fa-circle"></i></a>
							<p className="text">Reservar</p>
						</div>
						<div className="col-3 col-md-3 col-lg-3">
							<a href=""><i className="fas fa-circle"></i></a>
							<p className="text">1 Alerta</p>
						</div>
					</div>
					</div>
			</div>
		</div>
	</div>
)

export default Totem;