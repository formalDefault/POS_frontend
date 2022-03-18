import Navbar from "./components/NavBar.jsx";
import Modal from './components/Modal.jsx'

//caja
import terminal from "./pages/caja/Terminal.jsx"; 

//inventario
import Stock from "./pages/inventario/Stock";
import ProductDetails from "./pages/inventario/ProductDetails";
import FormularioRegProduct from "./pages/inventario/FormularioRegProduct";
import FormularioRegEntrada from "./pages/inventario/FormularioRegEntrada";

//clientes
import clientes from "./pages/clientes/ListaClientes";
import listaClientesdetalles from "./pages/clientes/ClientDetails";
import FormularioRegClient from "./pages/clientes/FormularioRegClient.jsx";

//contenedor
import Container from "./pages/Contenedor";

export default {
    "Navbar": Navbar,
    "Terminal": terminal, 
    "Stock": Stock,
    "Clientes": clientes,
    "Modal": Modal,
    "Container": Container,
    "ProductDetails": ProductDetails,
    "ClientDetails": listaClientesdetalles,
    "FormularioRegClient": FormularioRegClient,
    "FormularioRegProduct": FormularioRegProduct,
    "FormularioRegEntrada": FormularioRegEntrada
}