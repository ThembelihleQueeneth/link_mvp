# LinkKeeper

LinkKeeper is a simple, elegant React application designed to help you save, manage, and access your important links. Never lose track of a useful URL again!

## Features

- **Add Links:** Save any URL with a custom name for easy identification.
- **Edit Links:** Update the name or URL of any previously saved link.
- **Delete Links:** Remove links you no longer need.
- **Copy to Clipboard:** Quickly copy a saved link's URL to your clipboard with a single click.
- **Open in New Tab:** Launch any saved link directly in a new browser tab.
- **Persistent Storage:** Your links are securely saved in your browser's local storage, meaning they'll still be there even after you refresh or close the page.
- **Loading State:** Features a sleek loading animation while retrieving your saved data.

## Tech Stack

- **Frontend Framework:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS (for responsive and modern UI)
- **Icons:** Lucide React
- **Build Tool:** Vite

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm installed on your computer.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory:
   ```bash
   cd link_mvp
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

This will typically start the application on `http://localhost:5173/`. Open this URL in your browser to start using LinkKeeper!

## Usage

1. **Saving a link:** Enter a "Link name" and a "URL" (e.g., https://example.com) into the input fields at the top, then click the **"+ Save"** button.
2. **Managing your links:** Use the action icons located on the right side of each saved link to:
   - 📋 Copy the URL
   - ✏️ Edit the link's details
   - 🗑️ Delete the link
   - 🔗 Open in a new tab
