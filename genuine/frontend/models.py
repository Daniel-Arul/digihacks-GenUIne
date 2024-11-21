from django.db import models

class Charity(models.Model):
    # Profile
    popular_name_french = models.CharField(max_length=255, blank=True, null=True)
    popular_name_english = models.CharField(max_length=255, blank=True, null=True)
    website_url_english = models.URLField(blank=True, null=True)
    website_url_french = models.URLField(blank=True, null=True)
    contact_name_english = models.CharField(max_length=255, blank=True, null=True)
    contact_email_english = models.EmailField(blank=True, null=True)
    contact_name_french = models.CharField(max_length=255, blank=True, null=True)
    contact_email_french = models.EmailField(blank=True, null=True)
    communication_language = models.CharField(
        max_length=50,
        choices=[
            ('English', 'English'),
            ('French', 'French'),
            ('Bilingual', 'Bilingual')
        ],
        default='English'
    )
    about_text_english = models.TextField(blank=True, null=True)
    about_text_french = models.TextField(blank=True, null=True)
    charity_logo_english = models.ImageField(upload_to='charity_logos/', blank=True, null=True)

    # Media Library
    images = models.ManyToManyField('Image', blank=True)
    videos = models.ManyToManyField('Video', blank=True)

    # Page Visuals
    main_charity_image_english = models.ImageField(upload_to='page_visuals/', blank=True, null=True)
    main_charity_image_french = models.ImageField(upload_to='page_visuals/', blank=True, null=True)

    # Quotes
    quotes = models.ManyToManyField('Quote', blank=True)

    # Donation Presets
    one_time_donation_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    one_time_donation_impact_english = models.TextField(blank=True, null=True)
    one_time_donation_impact_french = models.TextField(blank=True, null=True)
    monthly_donation_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    monthly_donation_impact_english = models.TextField(blank=True, null=True)
    monthly_donation_impact_french = models.TextField(blank=True, null=True)

    # Campaign
    campaign_language = models.CharField(
        max_length=50,
        choices=[
            ('English', 'English'),
            ('French', 'French')
        ],
        default='English'
    )
    campaign_name_english = models.CharField(max_length=255, blank=True, null=True)
    campaign_name_french = models.CharField(max_length=255, blank=True, null=True)
    campaign_start_date = models.DateField(blank=True, null=True)
    campaign_end_date = models.DateField(blank=True, null=True)
    campaign_goal_amount = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)

    # Donation Settings
    emotive_image = models.ImageField(upload_to='donation_settings/', blank=True, null=True)
    search_image_english = models.ImageField(upload_to='donation_settings/', blank=True, null=True)
    search_image_french = models.ImageField(upload_to='donation_settings/', blank=True, null=True)
    primary_category = models.CharField(max_length=255, blank=True, null=True)
    primary_sub_category = models.CharField(max_length=255, blank=True, null=True)
    short_intro_text_english = models.TextField(blank=True, null=True)
    short_intro_text_french = models.TextField(blank=True, null=True)
    scope_of_mission = models.CharField(
        max_length=50,
        choices=[
            ('Local', 'Local'),
            ('Regional', 'Regional'),
            ('National', 'National'),
            ('International', 'International')
        ],
        default='Local'
    )
    additional_categories = models.ManyToManyField('Category', blank=True)

    def __str__(self):
        return self.popular_name_english or "Charity"

# Supporting Models
class Image(models.Model):
    image = models.ImageField(upload_to='media_library/images/')
    caption = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.caption or "Image"

class Video(models.Model):
    video = models.FileField(upload_to='media_library/videos/')
    caption = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.caption or "Video"

class Quote(models.Model):
    text = models.TextField()
    attributed_to = models.CharField(max_length=255, blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    language = models.CharField(
        max_length=50,
        choices=[
            ('English', 'English'),
            ('French', 'French')
        ],
        default='English'
    )

    def __str__(self):
        return self.text[:50]

class Category(models.Model):
    name = models.CharField(max_length=255)
    sub_category = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name
