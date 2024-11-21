from rest_framework import serializers
from .models import Charity

class CharitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Charity
        fields = [
            # Profile fields
            'popular_name_french',
            'popular_name_english',
            'website_url_english',
            'website_url_french',
            'contact_name_english',
            'contact_email_english',
            'contact_name_french',
            'contact_email_french',
            'communication_language',
            'about_text_english',
            'about_text_french',
            'charity_logo_english',
            
            # Media Library
            'images',  # Correct field name for images
            'videos',  # Correct field name for videos
            
            # Page Visuals
            'main_charity_image_english',
            'main_charity_image_french',
            
            # Quotes
            'quotes',  # Correct field name for quotes
            
            # Donation Presets
            'one_time_donation_amount',
            'one_time_donation_impact_english',
            'one_time_donation_impact_french',
            'monthly_donation_amount',
            'monthly_donation_impact_english',
            'monthly_donation_impact_french',

            # Campaign fields
            'campaign_language',
            'campaign_name_english',
            'campaign_name_french',
            'campaign_start_date',
            'campaign_end_date',
            'campaign_goal_amount',

            # Donation settings
            'emotive_image',
            'search_image_english',
            'search_image_french',
            'primary_category',
            'primary_sub_category',
            'short_intro_text_english',
            'short_intro_text_french',
            'scope_of_mission',
            'additional_categories',  # Correct field name for additional categories
        ]
        extra_kwargs = {
            'charity_logo_english': {'required': False},
            'main_charity_image_english': {'required': False},
            'main_charity_image_french': {'required': False},
            'emotive_image': {'required': False},
            'search_image_english': {'required': False},
            'search_image_french': {'required': False},
            'images': {'required': False},
            'videos': {'required': False},
            'quotes': {'required': False},
        }