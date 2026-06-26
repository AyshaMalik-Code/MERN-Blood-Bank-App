import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddInventory = () => {
const navigate = useNavigate();

const [form, setForm] = useState({
bloodGroup: "",
inventoryType: "in",
quantity: "",
});

// handle change
const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value,
});
};

// handle submit
const handleSubmit = async (e) => {
e.preventDefault();
try {
const { data } = await axios.post(
"/api/v1/inventory/create-inventory",
form,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("token")}`,
},
}
);

  if (data?.success) {
    toast.success("Inventory Added Successfully");
    navigate("/");
  } else {
    toast.error(data?.message);
  }
} catch (error) {
  console.log(error);
  toast.error("Something went wrong");
}

};

return (
<div className="container mt-4">
<h2 className="mb-4">🩸 Add Blood Inventory</h2>

  <form onSubmit={handleSubmit} className="card p-4 shadow">
    
    {/* Blood Group */}
    <div className="mb-3">
      <label>Blood Group</label>
      <select
        name="bloodGroup"
        className="form-control"
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
    </div>

    {/* Inventory Type */}
    <div className="mb-3">
      <label>Type</label>
      <select
        name="inventoryType"
        className="form-control"
        onChange={handleChange}
      >
        <option value="in">IN (Donate)</option>
        <option value="out">OUT (Use)</option>
      </select>
    </div>

    {/* Quantity */}
    <div className="mb-3">
      <label>Quantity (ML)</label>
      <input
        type="number"
        name="quantity"
        className="form-control"
        onChange={handleChange}
        required
      />
    </div>

    {/* Submit */}
    <button className="btn btn-danger w-100">
      Add Inventory
    </button>
  </form>
</div>

);
};

export default AddInventory;