import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";

//Redux
import { useDispatch} from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';  

const Producto = ({producto}) => {
    const  { nombre, precio, id } = producto

    const dispatch = useDispatch();
    const history = useHistory(); //habilitra history para redireccion

    //confirmar si desea eliminar producto
    const confirmarEliminarProducto = (id) => {

        // preguntar al usuario
        Swal.fire({
            title: 'Confirma que quiere borrar el producto?',
            text: "Este proceso no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI, eliminarlo!'
          }).then((result) => {
            if (result.isConfirmed) {
                // pasarlo al action
                dispatch(borrarProductoAction(id));
            }
          });
    }

    //funcion que redirige de froma programada al editar producto
    const redireccionarEdicion = (producto) => {
        dispatch(obtenerProductoEditar(producto)); 
        history.push(`/productos/editar/${producto.id}`)
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={() => redireccionarEdicion(producto)}
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Producto;