import React from 'react';

class Surff extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>

                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4 m-2 border p-2">
                    <div class="col">
                        <div class="card">
                            <img src="assets/images/service-imgs/equipoSurf.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Surfear</h5>
                                <p class="card-text">Le proveemos el equipo necesario para su aventura playera en alguna de
                                    nuestras areas especializadas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="assets/images/service-imgs/tour.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tour costero</h5>
                                <p class="card-text">Conozca bellas playas con los fabulosos tours que tenemos alrededor de
                                    las playas más hermosas del pais.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="assets/images/service-imgs/voley-playa.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Deportes</h5>
                                <p class="card-text">Ofrecemos la oportunidad de practicar diversos deportes en la arena como el
                                    volleyball, futbol, motocross y más.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="assets/images/service-imgs/delfines.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Delfines</h5>
                                <p class="card-text">Se le ofrece ir en un catamarán a un área donde pueden ser encontrados delfines
                                    y es posible interactuar con ellos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Surff;