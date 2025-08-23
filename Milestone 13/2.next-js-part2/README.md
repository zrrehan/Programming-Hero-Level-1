# NextJS Part 2 / 4

This demonstrates different rendering techniques in Next.js, comparing **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** using practical examples.

---

## Server-Side Rendering (SSR)

Server-Side Rendering (SSR) is a technique where the HTML for a page is generated on the server for each request. This means the page is fully rendered before it reaches the client, which can improve SEO and initial load performance.

In this project, the SSR example is implemented in the **`posts` directory/route**. Here, data is fetched on the server and the HTML is rendered with the posts already populated, so the user receives a fully rendered page immediately.

---

## Client-Side Rendering (CSR)

Client-Side Rendering (CSR) is a technique where the HTML is rendered on the client (browser) after the JavaScript is loaded. The page initially loads faster, but data fetching and rendering happen in the browser.

In this project:

- **`meals-react-way`**: We fetch a meal API and display the results entirely on the client side, just like in a traditional React app. The search and display logic is fully handled in the client.
  
- **`meals-nextjs-way`**: We split responsibilities between server and client. The **interactive search** is handled in the client via `MealSearch.jsx`, while the **data showcase** is rendered on the server. This demonstrates a hybrid approach where SSR and CSR coexist.

---

This project highlights how Next.js allows flexibility in rendering strategies, enabling developers to choose SSR, CSR, or a combination depending on performance and user experience requirements.
