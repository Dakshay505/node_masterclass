import "./add.css"
import {useState} from "react";
import axios from "axios";


const Add = () => {
  
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    thumbnail:''
  });
  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e:any) => {
    e.preventDefault();
   const resp= await axios.post("/api/v1/user/new",formData);
   setFormData({
    title: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    thumbnail:''
  })
    
    console.log(formData);
    console.log(resp);
  };

  return (
    <div>
        <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="title" className="form-label">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="form-label">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="discountPercentage" className="form-label">Discount:</label>
        <input
          type="text"
          id="discountPercentage"
          name="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating" className="form-label">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="stock" className="form-label">Stock:</label>
        <input
          type="text"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="thumbnail" className="form-label">Thumbnail:</label>
        <input
          type="text"
          id="thumbnail"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-submit">
        Submit
      </button>
    </form>
    </div>
  )
}

export default Add