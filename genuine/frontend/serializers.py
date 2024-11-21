from rest_framework import serializers
from .models import Charity, Image, Video, Quote, Category

# Supporting Serializers
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image', 'caption']  # Include `id` for reference in requests

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'video', 'caption']

class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ['id', 'text', 'attributed_to', 'link', 'language']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'sub_category']

# Main Charity Serializer
class CharitySerializer(serializers.ModelSerializer):
    # Use nested serializers for related fields
    images = ImageSerializer(many=True, required=False)
    videos = VideoSerializer(many=True, required=False)
    quotes = QuoteSerializer(many=True, required=False)
    additional_categories = CategorySerializer(many=True, required=False)

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
            'images',
            'videos',

            # Page Visuals
            'main_charity_image_english',
            'main_charity_image_french',

            # Quotes
            'quotes',

            # Donation Presets
            'one_time_donation_amount',
            'one_time_donation_impact_english',
            'one_time_donation_impact_french',
            'monthly_donation_amount',
            'monthly_donation_impact_english',
            'monthly_donation_impact_french',

            # Campaign
            'campaign_language',
            'campaign_name_english',
            'campaign_name_french',
            'campaign_start_date',
            'campaign_end_date',
            'campaign_goal_amount',

            # Donation Settings
            'emotive_image',
            'search_image_english',
            'search_image_french',
            'primary_category',
            'primary_sub_category',
            'short_intro_text_english',
            'short_intro_text_french',
            'scope_of_mission',
            'additional_categories',
        ]
        extra_kwargs = {
            'charity_logo_english': {'required': False},
            'main_charity_image_english': {'required': False},
            'main_charity_image_french': {'required': False},
            'emotive_image': {'required': False},
            'search_image_english': {'required': False},
            'search_image_french': {'required': False},
        }

    def create(self, validated_data):
        # Handle nested fields for Many-to-Many relationships
        images_data = validated_data.pop('images', [])
        videos_data = validated_data.pop('videos', [])
        quotes_data = validated_data.pop('quotes', [])
        additional_categories_data = validated_data.pop('additional_categories', [])

        charity = Charity.objects.create(**validated_data)

        # Add related objects
        for image_data in images_data:
            image = Image.objects.create(**image_data)
            charity.images.add(image)

        for video_data in videos_data:
            video = Video.objects.create(**video_data)
            charity.videos.add(video)

        for quote_data in quotes_data:
            quote = Quote.objects.create(**quote_data)
            charity.quotes.add(quote)

        for category_data in additional_categories_data:
            category, _ = Category.objects.get_or_create(**category_data)
            charity.additional_categories.add(category)

        return charity
