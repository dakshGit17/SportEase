# SportEase – Sports Equipment Management Platform

SportEase is a full-stack MERN application for managing sports equipment and facilities on a campus. Students can browse equipment, request to borrow it, and book turf/court slots, while admins review requests, track availability, and manage items.

## Features

- **Authentication and roles** – Register and log in with JWT-based authentication and bcrypt-hashed passwords. Accounts are restricted to `@thapar.edu` email addresses, and admin-only views are protected by role checks.
- **Equipment inventory** – View all equipment with category, total quantity, and currently available stock.
- **Borrow / return workflow** – Users create booking requests that move through `pending → approved / rejected → returned`. Stock is restored automatically when a request is rejected or an item is returned.
- **Availability tracking** – Available quantity updates as items are issued and returned, so the inventory always reflects what is actually in stock.
- **Turf / court booking** – Users can check availability and book or cancel time slots for courts such as badminton and tennis.
- **QR codes** – Each equipment booking generates a QR code containing the booking ID, which can be scanned to look up and process the booking.
- **Admin dashboard** – Admins can manage equipment, review and update booking statuses, and oversee users' requests.

## Tech Stack

| Layer    | Technologies |
|----------|--------------|
| Frontend | React 19, React Router, Axios, react-hot-toast, lucide-react, qrcode.react, react-qr-scanner |
| Backend  | Node.js, Express 5, Mongoose |
| Database | MongoDB |
| Auth     | JSON Web Tokens (JWT), bcryptjs |

## Project Structure

```
SportEase/
├── backend/
│   ├── config/          # MongoDB connection
│   ├── middleware/      # JWT auth middleware
│   ├── models/          # User, Item, Booking, Turf schemas
│   ├── routes/          # users, items, bookings, turfs
│   ├── seedTurfs.js     # Script to seed turf data
│   └── server.js
└── frontend/
    └── frontend/
        └── src/
            ├── components/   # Admin, Auth, Bookings, Cart, Items, Layout, Common
            ├── hooks/        # useAuth, useBookings
            ├── services/     # API calls
            └── utils/
```

## API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Log in and receive a JWT |
| GET | `/api/users/profile` | Get the logged-in user's profile |
| GET | `/api/items` | List all equipment |
| POST | `/api/items` | Add equipment |
| PUT | `/api/items/:id` | Update equipment |
| POST | `/api/bookings` | Create an equipment or turf booking |
| GET | `/api/bookings` | List bookings |
| GET | `/api/bookings/:id` | Get a booking by ID |
| PUT | `/api/bookings/:id/status` | Approve, reject, or mark a booking returned |
| GET | `/api/turfs` | List turfs and their slots |
| POST | `/api/turfs/:id/book` | Book a turf slot |
| DELETE | `/api/turfs/:id/cancel` | Cancel a turf booking |

## Author

**Daksh Raj** – [GitHub](https://github.com/dakshGit17) · [LinkedIn](https://linkedin.com/in/dakshraj17)
