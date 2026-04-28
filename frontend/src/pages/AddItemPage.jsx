import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm.jsx";
import { createItem } from "../api/itemApi.js";

function AddItemPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      console.log("Sending data: ", formData);
      await createItem(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create item", error);
      alert(JSON.stringify(error.response?.data));
    }
  };

  return <ItemForm submitText="Add Item" onSubmit={handleCreate} />;
}

export default AddItemPage;