# News feed reader

## 💡 The goal of the project
I made this simple project to discover and learn some new tech:

- [Svelte](https://svelte.dev/)
- [ViteJs](https://vitejs.dev/)
- Serverless functions (with [Netlify](https://docs.netlify.com/functions/overview/))

## 📰 What it does
This app displays the latest news from [Le Monde](https://www.lemonde.fr/) using their [RSS feed](https://www.lemonde.fr/rss/une.xml).

## 💻 How to run locally

To run the backend, just use the *Netlify CLI* and simulate Netflify functions
```
$ npm install netlify-cli -g

$ netlify functions:serve
```

To run the frontend, just start the server
```
$ npm run dev
```
