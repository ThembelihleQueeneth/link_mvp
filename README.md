#  LinkKeeper

**LinkKeeper** is a simple and elegant **React application** that helps you **save, organize, and quickly access your important links**.
Never lose track of a useful URL again!

Whether it's documentation, tools, learning resources, or favorite websites, LinkKeeper keeps them all in one place.

---

#  Preview

![linkKeeper](https://github.com/user-attachments/assets/9f7f012b-1c79-4cd2-89d5-c97dbaf7d939)

---

#  Features

*  **Add Links**
  Save any URL with a custom name for easy identification.

*  **Edit Links**
  Update the name or URL of previously saved links.

*  **Delete Links**
  Remove links you no longer need.

*  **Copy to Clipboard**
  Quickly copy a saved link’s URL with a single click.

*  **Open in New Tab**
  Launch any saved link directly in a new browser tab.

*  **Persistent Storage**
  Links are stored in **localStorage**, so they remain even after refreshing or closing the browser.

*  **Loading State**
  Displays a smooth loading animation when retrieving saved links.

---

#  Tech Stack

| Technology       | Purpose                                |
| ---------------- | -------------------------------------- |
| **React**        | Frontend framework                     |
| **TypeScript**   | Type-safe JavaScript                   |
| **Tailwind CSS** | Modern responsive styling              |
| **Lucide React** | Beautiful icons                        |
| **Vite**         | Fast build tool and development server |

---

#  Project Structure

```
link_mvp
│
├── public
│   └── assets
│
├── src
│   ├── components
│   ├── hooks
│   ├── types
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

#  Getting Started

Follow these instructions to run the project locally.

##  Prerequisites

Make sure you have the following installed:

* **Node.js** (v16 or higher recommended)
* **npm** or **yarn**

Download Node.js here:
[https://nodejs.org](https://nodejs.org)

---

#  Installation

Clone the repository:

```bash
     https://github.com/ThembelihleQueeneth/link_mvp.git
```

Navigate to the project folder:

```bash
cd link_mvp
```

Install dependencies:

```bash
npm install
```

---

#  Running the Application

Start the development server:

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

Open this URL in your browser.

---

#  Usage Guide

### Saving a Link

1. Enter a **Link Name**
2. Enter a **URL** (example: `https://example.com`)
3. Click **+ Save**

---

### Managing Links

Each saved link has action buttons:

| Icon | Action               |
| ---- | -------------------- |
| 📋   | Copy link URL        |
| ✏️   | Edit link            |
| 🗑️  | Delete link          |
| 🔗   | Open link in new tab |

---

#  Future Improvements

Potential features to add:

*  Search links
*  Tag or categorize links
*  Cloud storage (Supabase / Firebase)
*  Mobile responsive improvements
*  Dark mode
*  User authentication

#  License

This project is licensed under the **MIT License**.

---

#  Author

Developed by **Thembelihle Maluka**

*  Aspiring Full Stack Developer
*  React | Node.js | TypeScript
