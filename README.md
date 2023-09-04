# Henrry News

## Overview
Northcoders News is a web application designed to provide news articles, enable user subscriptions to articles, facilitate article comments, and allow users to rate articles. Additionally, it serves as an advertising source.

## API Exploration
The project leverages a dedicated API with the following endpoints:

- **GET /api**: Provides a JSON representation of all available API endpoints.
- **GET /api/topics**: Serves an array of all topics, essential for categorizing articles.
- **GET /api/articles**: Provides an array of all articles with options to filter and sort by author, topic, and more.
- **GET /api/articles/:article_id**: Retrieves a single article by its ID, offering detailed article information.
- **GET /api/articles/:article_id/comments**: Fetches all comments for a specific article.
