from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin  # For handling relative URLs

app = Flask(__name__)

# Function to scrape the website
def scrape_website(url):
    try:
        print(f"Fetching URL: {url}")  # Debugging
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)  # Add timeout to prevent hanging
        response.raise_for_status()
        print("Fetched content successfully!")  # Debugging

        # Parse the HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # Extract title
        title = soup.title.string if soup.title else "No title found"
        print(f"Title: {title}")  # Debugging

        # Extract description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        og_desc = soup.find('meta', property='og:description')
        description = meta_desc['content'] if meta_desc else (og_desc['content'] if og_desc else "No description found")
        print(f"Description: {description}")  # Debugging

        # Extract profile picture
        og_image = soup.find('meta', property='og:image')
        profile_pic = urljoin(url, og_image['content']) if og_image else "No image found"
        print(f"Profile Picture: {profile_pic}")  # Debugging

        # Extract all other images
        images = []
        for img_tag in soup.find_all('img'):
            img_src = img_tag.get('src')
            if img_src:  # Ensure the src attribute exists
                absolute_url = urljoin(url, img_src)  # Convert to absolute URL
                images.append(absolute_url)
        print(f"Found images: {images}")  # Debugging

        # Return the scraped data
        return {
            'title': title,
            'description': description,
            'profile_pic': profile_pic,
            'images': images
        }

    except Exception as e:
        print("Error occurred:", str(e))  # Debugging
        return {'error': str(e)}

# Flask route for scraping
@app.route('/scrape', methods=['POST'])
def scrape():
    try:
        data = request.json  # Get the JSON input
        url = data.get('url')
        if not url:
            return jsonify({'error': 'URL is required'}), 400

        result = scrape_website(url)
        return jsonify(result)  # Return the scraped data as JSON

    except Exception as e:
        print("Server Error:", str(e))  # Log server errors
        return jsonify({'error': 'Server encountered an issue'}), 500

# Entry point for running the Flask app
if __name__ == '__main__':
    print("Starting Flask server...")  # Debugging
    app.run(debug=True)
