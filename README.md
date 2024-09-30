# Talk AI GPT Web Application

## Overview

Talk AI GPT is an AI-powered chatbot web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a conversational experience similar to ChatGPT, leveraging the GPT API for natural language processing. Users can interact with the chatbot, with conversations stored in a database for later retrieval. The application also includes user authentication via Clerk, ensuring secure access.

## Features

- **Conversational Interface**: Engage in real-time conversations with the AI chatbot powered by the GPT API.
- **Session Management**: Each chat session is uniquely created and can be managed independently.
- **Conversation Storage**: Conversations are stored in a database, allowing users to retrieve previous interactions.
- **Delete Conversations**: Users can delete their stored conversations as needed.
- **Token and Cookie Management**: Securely handles user sessions with tokens and cookies that are valid for up to 7 days.
- **Image Handling**: Utilizes the ImageKit library for efficient image management.

## Tech Stack

- **Frontend**: 
  - React
  - Vite
  
- **Backend**: 
  - Node.js
  - Express.js
  
- **Database**: 
  - MongoDB
  
- **Authentication**: 
  - Clerk
  
- **AI API**: 
  - GPT API
  
- **Image Management**: 
  - ImageKit

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB (local or cloud instance)
- Clerk account for authentication

