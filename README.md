
# Exhibit Explorer 🎨  

This project is a **Next.js web app** that connects to the [Metropolitan Museum of Art API](https://metmuseum.github.io/) and lets users search, view, and save artworks.  

I built it step by step for a course assignment, and I’m sharing it here as a reference for anyone learning **API integration, state management, and deployment with Next.js**.

---

## ✨ What You’ll Learn From This Project

Instead of just showing the finished code, I want to highlight the **programming concepts this project covers**. If you’re learning web dev, these are the main takeaways:

- **Working with APIs**  
  - Constructing query strings for different search modes (title, tags, artist).  
  - Fetching JSON data with `fetch` and handling loading/error states.  
  - Filtering API responses with a local whitelist of IDs.

- **Data Fetching with SWR**  
  - How to set up a global fetcher in `_app.js`.  
  - Using SWR to automatically cache and revalidate results.  
  - Debugging the infamous *“Rendered more hooks than during the previous render”* error (caused by calling hooks conditionally).

- **State Management with Jotai**  
  - Storing a list of favourites and search history in atoms.  
  - Updating global state from different components.  
  - (Optionally) syncing with `localStorage` for persistence.

- **UI Components and Layout**  
  - Breaking the app into reusable parts (`MainNav`, `ArtworkCard`, `ArtworkCardDetail`).  
  - Building responsive layouts with **React-Bootstrap**.  
  - Adding pagination for large result sets.

- **Debugging & Build Issues**  
  - Fixing ESLint errors (like unescaped quotes in JSX).  
  - Understanding how dev vs. build environments differ.  
  - Learning why misconfigured `vercel.json` can wipe your build.  

- **Deployment**  
  - How Vercel automatically detects Next.js and runs `next build`.  
  - Why production builds are stricter (and how to prepare for that).  
  - Setting up environment variables if you’re calling another API.  

---

## 🛠️ Tech Stack
- **Next.js 15** – React framework with file-based routing.  
- **React 18** – core UI library.  
- **React-Bootstrap** – layout and components.  
- **SWR** – client-side data fetching with caching.  
- **Jotai** – global state management.  

---

## 🧩 Project Structure
```
/components    → Navbar, Layout, Artwork cards
/pages         → Routes (home, search, artwork detail, favourites, history)
/public        → Static assets + validObjectIDList.json
/store.js      → Jotai atoms for favourites/history
```

---

## 🚀 How to Run It
Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/exhibitExplorer.git
cd exhibitExplorer
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deployment
The app is deployed on [Vercel](https://vercel.com).  
When you push to `main`, Vercel automatically builds and deploys.  

---

## 📚 Closing Note
This isn’t meant to be a perfect production app — it’s a **learning playground**. By working through it, you’ll practice the skills that matter when building modern web apps:

- Calling APIs and shaping data.  
- Managing state across components.  
- Debugging issues between local and deployed builds.  
- Understanding the deployment pipeline.  

Feel free to fork it, break it, fix it, and extend it ✨. That’s the best way to learn.  

Test it on https://exhibit-explorer.vercel.app/

##Credits: Manas Gandotra
