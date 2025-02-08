import { toast } from "sonner";

import { useEffect } from "react";
import { useAddProductMutation } from "../features/product/productApi";
const AddProductForm = () => {
  const [addProduct, { isLoading, isError, isSuccess }] =
    useAddProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const year = form.year.value;
    const cpu = form.cpu.value;
    const price = form.price.value;
    const disk = form.disk.value;

    if (!name || !year || !cpu || !price || !disk) {
      toast.error("Please fill all fields");
      return;
    }

    addProduct({
      name: name,
      data: {
        year: year,
        "CPU model": cpu,
        price: price,
        "Hard disk size": disk,
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product added successfully");
    }

    if (isError) {
      toast.error("Failed to add product");
    }
  }, [isSuccess, isError]);
  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="">
        <label className="form-label">Name</label>
        <input type="text" name="name" required className="form-input" />
      </div>
      <div className="">
        <label className="form-label">Year</label>
        <input
          type="number"
          name="year"
          min="1900"
          max="2099"
          className="form-input"
          step="1"
        />
      </div>
      <div className="">
        <label className="form-label">Cpu Model</label>
        <input type="text" name="cpu" required className="form-input" />
      </div>
      <div className="">
        <label className="form-label">price</label>
        <input type="number" name="price" required className="form-input" />
      </div>
      <div className="">
        <label className="form-label">Hard disk size</label>
        <input type="text" name="disk" required className="form-input" />
      </div>

      <button type="submit" disabled={isLoading} className="form-button">
        Add Product
      </button>
    </form>
  );
};
export default AddProductForm;
