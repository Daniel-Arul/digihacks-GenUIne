import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

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
  const [currentSection, setCurrentSection] = useState("Profile");

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

  const sections = [
    "Profile",
    "Media Library",
    "Page Visuals",
    "Quotes",
    "Donation Presets",
    "Campaign",
    "Donation Settings",
  ];

  return (
    <Box sx={{ display: "flex", mt: 4 }}>
      {/* Right-hand Navigation */}
      <Box sx={{ width: 240, mr: 4 }}>
        <List component="nav" sx={{ borderRight: "1px solid #ccc", height: "100%" }}>
          {sections.map((section) => (
            <ListItem key={section}>
              <ListItemButton onClick={() => setCurrentSection(section)}>
                <ListItemText primary={section} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Form Content */}
      <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
        {currentSection === "Profile" && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Profile
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Popular Name (French)"
                  name="popular_name_french"
                  value={formData.popular_name_french}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Popular Name (English)"
                  name="popular_name_english"
                  value={formData.popular_name_english}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Website URL (English)"
                  name="website_url_english"
                  value={formData.website_url_english}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Website URL (French)"
                  name="website_url_french"
                  value={formData.website_url_french}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact Name (English)"
                  name="contact_name_english"
                  value={formData.contact_name_english}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Contact Email (English)"
                  name="contact_email_english"
                  value={formData.contact_email_english}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="communication-language-label">Communication Language</InputLabel>
                  <Select
                    labelId="communication-language-label"
                    name="communication_language"
                    value={formData.communication_language}
                    onChange={handleChange}
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                    <MenuItem value="Bilingual">Bilingual</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="About Text (English)"
                  name="about_text_english"
                  value={formData.about_text_english}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Charity Logo (English)</Typography>
                <input type="file" name="charity_logo_english" onChange={handleFileChange} />
              </Grid>
            </Grid>
          </Box>
        )}

        {currentSection === "Media Library" && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Media Library
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Images</Typography>
                <input type="file" name="images" multiple onChange={handleFileChange} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Videos</Typography>
                <input type="file" name="videos" multiple onChange={handleFileChange} />
              </Grid>
            </Grid>
          </Box>
        )}

        {currentSection === "Page Visuals" && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Page Visuals
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Main Charity Image (English)</Typography>
                <input type="file" name="main_charity_image_english" onChange={handleFileChange} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Main Charity Image (French)</Typography>
                <input type="file" name="main_charity_image_french" onChange={handleFileChange} />
              </Grid>
            </Grid>
          </Box>
        )}

        {currentSection === "Quotes" && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Quotes
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Quotes"
                  name="quotes"
                  value={formData.quotes}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </Box>
        )}

        {currentSection === "Donation Presets" && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Donation Presets
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="One-Time Donation Amount"
                  name="one_time_donation_amount"
                  value={formData.one_time_donation_amount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="One-Time Donation Impact (English)"
                  name="one_time_donation_impact_english"
                  value={formData.one_time_donation_impact_english}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="One-Time Donation Impact (French)"
                  name="one_time_donation_impact_french"
                  value={formData.one_time_donation_impact_french}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Monthly Donation Amount"
                  name="monthly_donation_amount"
                  value={formData.monthly_donation_amount}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Monthly Donation Impact (English)"
                  name="monthly_donation_impact_english"
                  value={formData.monthly_donation_impact_english}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Monthly Donation Impact (French)"
                  name="monthly_donation_impact_french"
                  value={formData.monthly_donation_impact_french}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        )}

        {currentSection === "Campaign" && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Campaign
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="campaign-language-label">Campaign Language</InputLabel>
                  <Select
                    labelId="campaign-language-label"
                    name="campaign_language"
                    value={formData.campaign_language}
                    onChange={handleChange}
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Campaign Name (English)"
                  name="campaign_name_english"
                  value={formData.campaign_name_english}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Campaign Name (French)"
                  name="campaign_name_french"
                  value={formData.campaign_name_french}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Campaign Start Date"
                  name="campaign_start_date"
                  type="date"
                  value={formData.campaign_start_date}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Campaign End Date"
                  name="campaign_end_date"
                  type="date"
                  value={formData.campaign_end_date}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Campaign Goal Amount"
                  name="campaign_goal_amount"
                  value={formData.campaign_goal_amount}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        )}

        {currentSection === "Donation Settings" && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Donation Settings
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Emotive Image</Typography>
                <input type="file" name="emotive_image" onChange={handleFileChange} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Search Image (English)</Typography>
                <input type="file" name="search_image_english" onChange={handleFileChange} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Search Image (French)</Typography>
                <input type="file" name="search_image_french" onChange={handleFileChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Primary Category"
                  name="primary_category"
                  value={formData.primary_category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Primary Sub-Category"
                  name="primary_sub_category"
                  value={formData.primary_sub_category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Short Intro Text (English)"
                  name="short_intro_text_english"
                  value={formData.short_intro_text_english}
                  onChange={handleChange}
                  multiline
                  rows={2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Short Intro Text (French)"
                  name="short_intro_text_french"
                  value={formData.short_intro_text_french}
                  onChange={handleChange}
                  multiline
                  rows={2}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="scope-of-mission-label">Scope of Mission</InputLabel>
                  <Select
                    labelId="scope-of-mission-label"
                    name="scope_of_mission"
                    value={formData.scope_of_mission}
                    onChange={handleChange}
                  >
                    <MenuItem value="Local">Local</MenuItem>
                    <MenuItem value="National">National</MenuItem>
                    <MenuItem value="International">International</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Categories"
                  name="additional_categories"
                  value={formData.additional_categories}
                  onChange={handleChange}
                  multiline
                  rows={2}
                />
              </Grid>
            </Grid>
          </Box>
        )}

        <Button variant="contained" color="primary" type="submit" sx={{ mt: 4 }}>
          Submit
        </Button>
        {message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
      </Box>
    </Box>
  );
};

export default CharityForm;