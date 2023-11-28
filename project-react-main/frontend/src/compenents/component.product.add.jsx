import { useState } from "react";
import { addProduct } from "../services/product.services";
import { useNavigate } from "react-router-dom";

export function ProductAddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    const product = { name, price };
    addProduct(product);
    navigate("/products");
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title mb-4">Add Product</h2>
                <form onSubmit={(e) => handleForm(e)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary me-2">
                    Save
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
