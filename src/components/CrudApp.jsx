import React from "react";
import Form from "./Form";
import Table from "./Table";

function CrudApp() {
  const [items, setItems] = useState([]);

  // Add the Record
  const addItem = (item) => {
    setItems([...items, { id: Date.now(), ...item }]);
  };
  return (
    <div className="w-1/2 bg-[#1d293d] shadow rounded py-10 px-2">
      <h2 className="text-center text-4xl/9 font-bold tracking-tighter text-white">
        Crud App
      </h2>
      <Form addItem={addItem} />
      <Table />
    </div>
  );
}

export default CrudApp;
