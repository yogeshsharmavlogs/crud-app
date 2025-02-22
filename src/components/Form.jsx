import { useState } from "react";

function Form({ addItem }) {
  const [Product, setProduct] = useState("");
  const [Price, setPrice] = useState(null);
  const [Status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Product.trim() || !Price.trim() || !Status.trim()) return;
  };

  return (
    <form>
      <div className="flex justify-between mt-10">
        <input
          type="text"
          placeholder="Product Name"
          className="py-1.5 px-3 shadow rounded"
          value={Product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <input
          type="text"
          placeholder="Price"
          className="py-1.5 px-3 shadow rounded"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Status"
          className="py-1.5 px-3 shadow rounded"
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          type="submit"
          className="h-10 py-1 px-3 font-semibold rounded border border-slate-200 text-slate-600 bg-white active: scale-95"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
