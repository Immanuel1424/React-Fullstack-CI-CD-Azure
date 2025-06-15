# Fullstack App: React + Node.js + PostgreSQL

This is a fullstack boilerplate project with:

- **Frontend**: React (in `/client`)
- **Backend**: Node.js + Express (in `/server`)
- **Database**: PostgreSQL

## 🔧 Project Structure

```
fullstack/
├── client/         # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/         # Node.js backend
│   ├── index.js
│   ├── queries.js
│   ├── .env
│   └── package.json
```

## 🚀 Deployment with Script

Use the [`deploy.sh`](deploy.sh) script to install and deploy this app on any Ubuntu server.

### Prerequisites

- Ubuntu 20.04+
- GitHub repo (with this project pushed)
- Internet access

### Steps

1. Upload this project to a **GitHub repository**.
2. On your Ubuntu server, run the deployment script:

```bash
curl -O https://yourserver.com/deploy.sh
chmod +x deploy.sh
./deploy.sh https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

3. Access the app in your browser:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🐘 Database Configuration

The script creates a PostgreSQL database called `reactdb` and uses the `postgres` user. Modify the `.env` file in `/server` if needed.

## 📦 NPM Registry Optimization

The script uses a fast mirror:
```bash
npm config set registry https://registry.npmmirror.com
```

## 🛠 Services

- `frontend.service`: Runs the React frontend via `serve`
- `backend.service`: Runs the Node.js backend API

Both are managed via `systemd` and start automatically on boot.

## 🧪 Development

You can run client and server independently during development:

```bash
# In /client
npm start

# In /server
node index.js
```

## 📄 License

MIT License. Customize as needed.
