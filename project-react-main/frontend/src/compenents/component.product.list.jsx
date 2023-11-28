import { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts } from "../services/product.services";
import { Link } from "react-router-dom";

export function ProductList() {
 const [products, setProducts] = useState([]);

 useEffect(() => {
    fetchProducts();
 }, []);

 async function fetchProducts() {
    const res = await getAllProducts();
    setProducts(res.data);
 }

 async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
 }

 // Fonction pour rediriger vers la page de modification
 function editProduct(id) {
    // Implémentez la logique pour rediriger vers la page de modification avec l'ID du produit
    console.log(`Rediriger vers la page de modification du produit avec l'ID ${id}`);
 }

 return (
    <>
      <Link to={"/products/new"} className="btn btn-ajouter">
        <i className="fas fa-plus"></i> Nouveau produit
      </Link>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {products.map((elem, index) => (
              <tr key={index}>
                <td className="text-center">{elem.name}</td>
                <td className="text-center">{elem.price}</td>
                <td className="text-center">
                 {/* Bouton de suppression avec une icône de FontAwesome */}
                 <button
                    className="btn btn-supprimer"
                    onClick={() => deleteProduct(elem._id)}
                 >
                    <i className="fas fa-trash icon-rouge"></i>
                 </button>

                 {/* Bouton de modification avec une icône de FontAwesome */}
                 <button
                    className="btn btn-modifier"
                    onClick={() => editProduct(elem._id)}
                 >
                    <i className="fas fa-pencil-alt icon-bleue"></i>
                 </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
 );
}
