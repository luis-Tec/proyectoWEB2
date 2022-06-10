import React from 'react'
import Footer from './Footer'
import Header from './Header'

const SurffReact = () => {
    return (
        <React.Fragment>
            <Header></Header>
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4 m-2 border p-2">
                    <div className="col">
                        <div className="card">
                            <img src="assets/images/service-imgs/equipoSurf.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Surfear</h5>
                                <p className="card-text">Le proveemos el equipo necesario para su aventura playera en alguna de
                                    nuestras areas especializadas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="assets/images/service-imgs/tour.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Tour costero</h5>
                                <p className="card-text">Conozca bellas playas con los fabulosos tours que tenemos alrededor de
                                    las playas más hermosas del pais.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="assets/images/service-imgs/voley-playa.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Deportes</h5>
                                <p className="card-text">Ofrecemos la oportunidad de practicar diversos deportes en la arena como el
                                    volleyball, futbol, motocross y más.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="assets/images/service-imgs/delfines.jpg" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Delfines</h5>
                                <p className="card-text">Se le ofrece ir en un catamarán a un área donde pueden ser encontrados delfines
                                    y es posible interactuar con ellos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </React.Fragment>

    )
}

export default SurffReact