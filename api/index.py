from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import tweepy
from textblob import TextBlob
from dotenv import load_dotenv
import os

app = FastAPI()
load_dotenv('access.env')

consumer_key = os.getenv('CONSUMER_KEY')
consumer_secret = os.getenv('CONSUMER_SECRET')
access_token = os.getenv('ACCESS_TOKEN')
access_token_secret = os.getenv('ACCESS_TOKEN_SECRET')

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)
class TweetSentiment(BaseModel):
    tweet: str

@app.post("/analyze_sentiment")
async def analyze_sentiment(request: Request, tweet_sentiment: TweetSentiment):
    try:
        analysis = TextBlob(tweet_sentiment.tweet)
        sentiment = analysis.sentiment.polarity
        if sentiment > 0:
            sentiment_label = 'positive'
        elif sentiment < 0:
            sentiment_label = 'negative'
        else:
            sentiment_label = 'neutral'
        response_data = {"tweet": tweet_sentiment.tweet, "sentiment": sentiment_label}
        return JSONResponse(content=response_data)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})
