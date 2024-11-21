from django.db import models

class Charity(models.Model):
    # Basic Details
    name = models.CharField(max_length=255)  
    mission = models.TextField(blank=True, null=True)  
    contact_email = models.EmailField()  
    contact_phone = models.CharField(max_length=15, blank=True, null=True)
    website_url = models.URLField(blank=True, null=True)  

    # Categorization
    scope = models.CharField(
        max_length=50, 
        choices=[
            ('Local', 'Local'),
            ('Regional', 'Regional'),
            ('National', 'National'),
            ('International', 'International')
        ],
        default='Local'
    )
    categories = models.CharField(max_length=255, blank=True, null=True)  # Category/sub-category

    # Media
    profile_image = models.ImageField(upload_to='media/', blank=True, null=True)  # Profile image
    additional_media = models.FileField(upload_to='media/', blank=True, null=True)  # Other media files

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set on creation
    updated_at = models.DateTimeField(auto_now=True)  # Automatically set on update

    def __str__(self):
        return self.name
