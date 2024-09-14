import requests
from bs4 import BeautifulSoup

def scrape_headlines(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  
        soup = BeautifulSoup(response.content, 'html.parser')

        headlines = soup.find_all('h2')

        for headline in headlines:
            print(headline.text.strip())  

    except requests.RequestException as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    news_url = "https://www.example-news-website.com" 
    scrape_headlines(news_url)
