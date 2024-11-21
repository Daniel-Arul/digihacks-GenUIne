import React, { useState } from "react";
import axios from "axios";

const CharityForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mission: "",
    contact_email: "",
    contact_phone: "",
    website_url: "",
    scope: "Local",
    categories: "",
    profile_image: null,
    additional_media: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file inputs
  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await axios.post("/api/charities/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Charity created:", response.data);
    } catch (error) {
      console.error("Error creating charity:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Mission:</label>
        <textarea name="mission" value={formData.mission} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Contact Email:</label>
        <input type="email" name="contact_email" value={formData.contact_email} onChange={handleChange} required />
      </div>
      <div>
        <label>Contact Phone:</label>
        <input type="text" name="contact_phone" value={formData.contact_phone} onChange={handleChange} />
      </div>
      <div>
        <label>Website URL:</label>
        <input type="url" name="website_url" value={formData.website_url} onChange={handleChange} />
      </div>
      <div>
        <label>Scope:</label>
        <select name="scope" value={formData.scope} onChange={handleChange}>
          <option value="Local">Local</option>
          <option value="Regional">Regional</option>
          <option value="National">National</option>
          <option value="International">International</option>
        </select>
      </div>
      <div>
        <label>Categories:</label>
        <input type="text" name="categories" value={formData.categories} onChange={handleChange} />
      </div>
      <div>
        <label>Profile Image:</label>
        <input type="file" name="profile_image" onChange={handleFileChange} />
      </div>
      <div>
        <label>Additional Media:</label>
        <input type="file" name="additional_media" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CharityForm;