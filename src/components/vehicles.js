// import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { Context } from "../store";




// export default function (props) {
//     const { store, actions } = useContext(Context)
//     const history = useHistory();

//     useEffect(() => {
//         actions.getVehicles();

//     }, [])

//     return (
//         <>
//             <h1 className="title mt-1">Vehicles</h1>
//             <div className="peopleDiv row flex-row flex-nowrap">
//                 {store.vehicles.map((vehicle, index) =>
//                     <div key={index} className="card col-3">
//                         <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..."></img>
//                         <div className="card-body">
//                             <p>Name :{vehicle.name}</p>
//                             <p>Model :{vehicle.model}</p>
//                             <p>Vehicle class: {vehicle.vehicle_class}</p>
//                             <div className="d-flex justify-content-between">
//                                 <button className="btn btn-outline-primary" onClick={() => history.push(`/vehicles/${index}`)}>Learn more!</button>
//                                 <button className="btn btn-outline-warning">♡</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//             </div>

//         </>
        

//     );
// }

// en la swapi los vehiculos no son iterantes, el primer vehiculo es el 4 y el segundo el 6