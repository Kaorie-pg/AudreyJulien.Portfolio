# Portfolio - Audrey Julien

A modern, responsive portfolio website showcasing projects and experience, built with Express.js and Pug templating engine.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [License](#license)

## Features

- Responsive design
- Modern UI with custom styling
- Fast and lightweight
- Multiple project showcases
- Navigation bar for easy access

## Tech Stack

- **Backend:** Node.js with Express.js
- **Templating:** Pug (formerly Jade)
- **Styling:** CSS
- **Version:** 1.0.0

## Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd Portfolio_AudreyJulien_v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the development server:

```bash
npm start
```

The portfolio will be available at `http://localhost:3000`

## Docker

Build the Docker image locally:

```bash
docker build -t audre-portfolio:latest .
```

Run the app alone (exposes container port to host):

```bash
docker run --rm -p 3000:3000 audre-portfolio:latest
```

Run with Docker Compose (app behind an Nginx reverse proxy on port 80):

```bash
docker compose up --build
```

The site will be available at `http://localhost`.

## Secrets

This repo supports two ways to provide secrets to the application:

- Environment variables via a `.env` file (for development).
- Docker secrets (mounted as a file at `/run/secrets/app_secret`) for Compose/production.

Using Docker secrets in Compose:

1. Create a real secret file and ensure it is excluded from git (e.g. `secrets/app_secret`).
2. Compose mounts the secret in `/run/secrets/app_secret`. The application checks `APP_SECRET` env first,
   and then looks for a secret file at `APP_SECRET_FILE` (default `/run/secrets/app_secret`).

Example: create a secret and start Compose

```bash
mkdir -p secrets
echo "$(openssl rand -base64 32)" > secrets/app_secret
docker compose up --build
```

## Project Structure

```
Portfolio_AudreyJulien_v2/
├── app.js                 # Main Express application
├── package.json           # Project dependencies and configuration
├── public/                # Static files
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   ├── cv/               # CV documents
│   └── images/           # Project images and assets
├── views/                # Pug templates
│   ├── index.pug         # Home page
│   ├── layout.pug        # Main layout template
│   ├── partials/
│   │   └── navbar.pug    # Navigation bar component
│   └── projets/
│       ├── runathon.pug
│       ├── foreigngineer.pug
│       └── glimmerwood.pug
└── README.md             # This file
```

## Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/projets/runathon` | Runathon project details |
| `/projets/foreigngineer` | Foreign Gineer project details |
| `/projets/glimmerwood` | Glimmerwood project details |

## License

ISC