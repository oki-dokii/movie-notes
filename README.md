# 🎬 Movie Notes App

A beautiful, Letterboxd-inspired web application for tracking and reviewing your movie collection. Built with Node.js, Express, and PostgreSQL.

![Movie Notes App](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## ✨ Features

- **Beautiful UI**: Dark theme inspired by Letterboxd's design
- **Movie Collection**: Add, edit, and delete movie reviews
- **Rating System**: Rate movies out of 10 with star display
- **Poster Integration**: Add movie posters via URLs
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Interactive Cards**: Hover effects and smooth animations
- **Date Tracking**: Keep track of when you watched each movie

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movie-notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL database**
   ```bash
   # Create a new database
   createdb movie_notes_db
   
   # Or using psql
   psql -c "CREATE DATABASE movie_notes_db;"
   ```

4. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/movie_notes_db
   PORT=3000
   ```

5. **Start the application**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
movie-notes-app/
├── public/
│   └── styles.css          # Main stylesheet with Letterboxd-inspired design
├── views/
│   ├── partials/
│   │   ├── header.ejs      # Header component
│   │   └── footer.ejs      # Footer component
│   ├── index.ejs           # Homepage/Add movie form
│   ├── movies.ejs          # Movie collection display
│   ├── add.ejs            # Add new movie form
│   └── edit.ejs           # Edit existing movie
├── routes/
│   └── movies.js          # Movie routes and database operations
├── index.js              # Main application entry point
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (create this)
└── README.md             # You are here!
```

## 🎯 Core Functionality

### Adding Movies
- Navigate to the homepage or `/add`
- Fill in movie details (title, poster URL, rating, date, review)
- Live preview shows how your movie card will look
- Submit to add to your collection

### Viewing Collection
- Visit `/movies` to see your entire collection
- Beautiful grid layout with movie posters
- Hover over cards to reveal edit/delete actions
- Responsive design adapts to screen size

### Editing Movies
- Click the "✏️ Edit" button on any movie card
- Modify any details in the same format as adding
- Changes are saved and reflected immediately

### Deleting Movies
- Click the "🗑️ Delete" button on any movie card
- Confirmation dialog prevents accidental deletions
- Movie is permanently removed from collection

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes with a cinematic feel
- **Smooth Animations**: Subtle hover effects and transitions
- **Typography**: Uses Inter and Playfair Display fonts
- **Color Scheme**: Teal accents (#00d4aa) on dark backgrounds
- **Card Layout**: Clean, organized movie cards with ratings
- **Mobile-First**: Responsive design that works on all devices

## 🛠️ Technologies Used

- **Backend**: Node.js with Express.js framework
- **Database**: PostgreSQL for robust, scalable data storage
- **Frontend**: EJS templating engine
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Emoji-based icons for simplicity

## 📊 Database Schema

The app uses a PostgreSQL table structure:

```sql
CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  imdb_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  poster TEXT,
  rating INTEGER,
  watched_date DATE,
  review TEXT
);

```

## 🔧 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Homepage with add movie form |
| GET | `/movies` | Display all movies in collection |
| GET | `/add` | Add new movie form |
| POST | `/add` | Create new movie record |
| GET | `/edit/:id` | Edit movie form |
| POST | `/edit/:id` | Update existing movie |
| POST | `/delete/:id` | Delete movie from collection |

## 🎬 Usage Tips

1. **Poster URLs**: Use high-quality movie poster URLs from sites like TMDb or IMDb
2. **Ratings**: Rate movies 1-10 based on your personal enjoyment
3. **Reviews**: Write thoughtful reviews to remember your experience
4. **Dates**: Track when you watched movies for better organization
5. **Database**: Ensure PostgreSQL is running before starting the app

## 🚀 Deployment

### Environment Variables
Make sure to set these environment variables in production:
```env
DATABASE_URL=your_production_database_url
PORT=your_production_port
NODE_ENV=production
```

### Database Setup for Production
1. Create a PostgreSQL database on your hosting platform
2. Run the table creation SQL to set up the schema
3. Update your `DATABASE_URL` environment variable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎭 Acknowledgments

- Design inspiration from [Letterboxd](https://letterboxd.com/)
- Icons and styling inspired by modern movie tracking applications
- Built with love for movie enthusiasts everywhere

---

**Happy movie tracking! 🍿**
