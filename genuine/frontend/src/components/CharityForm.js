import React, { useState } from "react";
import axios from "axios";

const CharityForm = () => {
  const [formData, setFormData] = useState({
    // Profile fields
    popular_name_french: "",
    popular_name_english: "",
    website_url_english: "",
    website_url_french: "",
    contact_name_english: "",
    contact_email_english: "",
    contact_name_french: "",
    contact_email_french: "",
    communication_language: "English",
    about_text_english: "",
    about_text_french: "",
    charity_logo_english: null,

    // Media Library
    images: [],
    videos: [],

    // Page Visuals
    main_charity_image_english: null,
    main_charity_image_french: null,

    // Quotes
    quotes: [],

    // Donation Presets
    one_time_donation_amount: "",
    one_time_donation_impact_english: "",
    one_time_donation_impact_french: "",
    monthly_donation_amount: "",
    monthly_donation_impact_english: "",
    monthly_donation_impact_french: "",

    // Campaign
    campaign_language: "English",
    campaign_name_english: "",
    campaign_name_french: "",
    campaign_start_date: "",
    campaign_end_date: "",
    campaign_goal_amount: "",

    // Donation Settings
    emotive_image: null,
    search_image_english: null,
    search_image_french: null,
    primary_category: "",
    primary_sub_category: "",
    short_intro_text_english: "",
    short_intro_text_french: "",
    scope_of_mission: "Local",
    additional_categories: [],
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null && formData[key] !== "") {
        form.append(key, formData[key]);
      }
    }

    // Debug: Log the FormData content
    for (let pair of form.entries()) {
      console.log(pair[0] + ": " + pair[1]); // Logs key-value pairs in FormData
    }

    try {
      const response = await axios.post("/api/charities/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Charity created successfully!");
      console.log("Charity created:", response.data);
    } catch (error) {
      setMessage("Error creating charity.");
      console.error("Error creating charity:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Profile Fields */}
      <h2>Profile</h2>
      <div>
        <label>Popular Name (French):</label>
        <input
          type="text"
          name="popular_name_french"
          value={formData.popular_name_french}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Popular Name (English):</label>
        <input
          type="text"
          name="popular_name_english"
          value={formData.popular_name_english}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Website URL (English):</label>
        <input
          type="url"
          name="website_url_english"
          value={formData.website_url_english}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Website URL (French):</label>
        <input
          type="url"
          name="website_url_french"
          value={formData.website_url_french}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact Name (English):</label>
        <input
          type="text"
          name="contact_name_english"
          value={formData.contact_name_english}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact Email (English):</label>
        <input
          type="email"
          name="contact_email_english"
          value={formData.contact_email_english}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact Name (French):</label>
        <input
          type="text"
          name="contact_name_french"
          value={formData.contact_name_french}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact Email (French):</label>
        <input
          type="email"
          name="contact_email_french"
          value={formData.contact_email_french}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Communication Language:</label>
        <select
          name="communication_language"
          value={formData.communication_language}
          onChange={handleChange}
        >
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Bilingual">Bilingual</option>
        </select>
      </div>
      <div>
        <label>About Text (English):</label>
        <textarea
          name="about_text_english"
          value={formData.about_text_english}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>About Text (French):</label>
        <textarea
          name="about_text_french"
          value={formData.about_text_french}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Charity Logo (English):</label>
        <input type="file" name="charity_logo_english" onChange={handleFileChange} />
      </div>

      {/* Media Library */}
      <h2>Media Library</h2>
      <div>
        <label>Images:</label>
        <input type="file" name="images" multiple onChange={handleFileChange} />
      </div>
      <div>
        <label>Videos:</label>
        <input type="file" name="videos" multiple onChange={handleFileChange} />
      </div>

      {/* Page Visuals */}
      <h2>Page Visuals</h2>
      <div>
        <label>Main Charity Image (English):</label>
        <input type="file" name="main_charity_image_english" onChange={handleFileChange} />
      </div>
      <div>
        <label>Main Charity Image (French):</label>
        <input type="file" name="main_charity_image_french" onChange={handleFileChange} />
      </div>

      {/* Quotes */}
      <h2>Quotes</h2>
      <div>
        <label>Quotes:</label>
        <input type="text" name="quotes" value={formData.quotes} onChange={handleChange} />
      </div>

      {/* Donation Presets */}
      <h2>Donation Presets</h2>
      <div>
        <label>One-Time Donation Amount:</label>
        <input
          type="number"
          name="one_time_donation_amount"
          value={formData.one_time_donation_amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>One-Time Donation Impact (English):</label>
        <textarea
          name="one_time_donation_impact_english"
          value={formData.one_time_donation_impact_english}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>One-Time Donation Impact (French):</label>
        <textarea
          name="one_time_donation_impact_french"
          value={formData.one_time_donation_impact_french}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Monthly Donation Amount:</label>
        <input
          type="number"
          name="monthly_donation_amount"
          value={formData.monthly_donation_amount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Monthly Donation Impact (English):</label>
        <textarea
          name="monthly_donation_impact_english"
          value={formData.monthly_donation_impact_english}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Monthly Donation Impact (French):</label>
        <textarea
          name="monthly_donation_impact_french"
          value={formData.monthly_donation_impact_french}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Campaign */}
      <h2>Campaign</h2>
      <div>
        <label>Campaign Language:</label>
        <select
          name="campaign_language"
          value={formData.campaign_language}
          onChange={handleChange}
        >
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
      </div>
      <div>
        <label>Campaign Name (English):</label>
        <input
          type="text"
          name="campaign_name_english"
          value={formData.campaign_name_english}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Campaign Name (French):</label>
        <input
          type="text"
          name="campaign_name_french"
          value={formData.campaign_name_french}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Campaign Start Date:</label>
        <input
          type="date"
          name="campaign_start_date"
          value={formData.campaign_start_date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Campaign End Date:</label>
        <input
          type="date"
          name="campaign_end_date"
          value={formData.campaign_end_date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Campaign Goal Amount:</label>
        <input
          type="number"
          name="campaign_goal_amount"
          value={formData.campaign_goal_amount}
          onChange={handleChange}
        />
      </div>

      {/* Donation Settings */}
      <h2>Donation Settings</h2>
      <div>
        <label>Emotive Image:</label>
        <input type="file" name="emotive_image" onChange={handleFileChange} />
      </div>
      <div>
        <label>Search Image (English):</label>
        <input type="file" name="search_image_english" onChange={handleFileChange} />
      </div>
      <div>
        <label>Search Image (French):</label>
        <input type="file" name="search_image_french" onChange={handleFileChange} />
      </div>
      <div>
        <label>Primary Category:</label>
        <input
          type="text"
          name="primary_category"
          value={formData.primary_category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Primary Subcategory:</label>
        <input
          type="text"
          name="primary_sub_category"
          value={formData.primary_sub_category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Short Intro Text (English):</label>
        <textarea
          name="short_intro_text_english"
          value={formData.short_intro_text_english}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Short Intro Text (French):</label>
        <textarea
          name="short_intro_text_french"
          value={formData.short_intro_text_french}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Scope of Mission:</label>
        <select
          name="scope_of_mission"
          value={formData.scope_of_mission}
          onChange={handleChange}
        >
          <option value="Local">Local</option>
          <option value="Regional">Regional</option>
          <option value="National">National</option>
          <option value="International">International</option>
        </select>
      </div>
      <div>
        <label>Additional Categories:</label>
        <input
          type="text"
          name="additional_categories"
          value={formData.additional_categories}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CharityForm;