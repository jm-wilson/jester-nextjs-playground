# Joe's Everything Store (JESTER) 🃏🛒
**J**oe's **E**verything **S**tore - **T**rusted. **E**xperienced. **R**eliable.

**JESTER** is a playground for exploring [Next.js](https://nextjs.org), React Server Components and related paradigms.

The project was created with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## How to run 🏃💨

- To run the development server: `npm run dev`
- To build the project: `npm run build`
- To run the most recent build: `npm run start`

## Notable files 📝🧠

### Data stored in JSON files
`/data/cart.json` and `/data/items.json` are used to store data in the filesystem where the server is running. While this is far from production-ready, it keeps the project portable and reduces the need for configuration in a teaching context.

> [!WARNING]
> This approach to storing data, besides not scaling beyond one user, is **HAUNTED**.
>
> **DO NOT USE IT IN THE REAL WORLD.**

### Server logic implemented as [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) with the [`"use server"`](https://nextjs.org/docs/app/api-reference/directives/use-server) directive

**Server Actions** can be imported and called as type-safe functions without thinking about endpoint paths and manual fetch calls.  These are exposed in:
- `/src/api/cart.ts`: functions for getting the cart, adding an item and removing an item.
- `/src/api/items.ts`: functions for getting items by category or id.

Respectively-named files in `/src/lib/data` contain the underlying logic used for reading/writing `.json` files. These functions are imported in `/src/api/`'s files, but are not exposed as Server Actions. These could be imported from anywhere, and in the real world might contain logic for accessing a database or other resources.

#### Caching

Both of the above utilize [`unstable_cache`](https://nextjs.org/docs/app/api-reference/functions/unstable_cache) to reduce resource usage by caching responses indefinitely. Note that "unstable" in the function name indicates that the API is subject to change in future Next.js releases - ***NOT*** that the feature itself is unreliable.

The mutations in `/src/api/cart.ts` call [`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) so subsequent calls to `getCart` will retrieve new (uncached) data.

### React Server Components 🦁, and Client Components 🐯, and weaving them together 🐻... oh my!

All components beside `ActiveLink` and `ManipulateCartButton` are **React Server Components**, allowing logic to run on the server and outputs to be cached on the way to the client. The two **Client Components** mentioned include the [`"use client"`](https://nextjs.org/docs/app/api-reference/directives/use-client) directive to support interactivity:
- `ActiveLink`: This depends on the `usePathname()` hook to get the current pathname, used to add "active" styling if it matches `href`. All hooks must be called in client components.
- `ManipulateCartButton`: This passes an `onClick` handler to a `<button>` element. Event listeners must be added in client components.
  - Server components can be passed as children to client components. For example, in `StoreItemGrid` we map each item to a `ManipulateCartButton` (client component) with a `StoreItemTile` (server component) as a child.

### Other less-exciting Next.js details 😴

This section contains information that may be useful for those less experienced with Next.js and the new&ZeroWidthSpace;*(-ish)* [App Router](https://nextjs.org/docs/app).

#### File-based Routing
File-based routing is not new to Next.js, but the App Router does change how it works. Routes are determined based on the file paths of files such as `.../page.tsx`, `.../layout.tsx` and `.../route.ts`. The [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions) page in the docs is a good starting point to learn more.

Nested layouts can be achieved with multiple directories containing `layout.tsx` and each level can be cached/revalidated granularly. The experimental [Partial Prerendering](https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering) feature will make such layouts more cachable in the future.

Other portions of the file structure are less opinionated - as a contrived example, this project has multiple components folders: `/src/components` for root-level or reusable components and `/src/app/cart/components` for components specific to the Cart page. You can be as organized or disorganized as you want!

#### Built-in components

##### Optimized Images ([`Image`](https://nextjs.org/docs/app/building-your-application/optimizing/images) component)

Some of the images in `/public/` are very big, but the ones downloaded by the `StoreItemTile` components on each store page are much smaller. These are optimized by the  component provided by Next.js with very little effort from the developer.

##### Prefetched Links ([`Link`](https://nextjs.org/docs/app/api-reference/components/link) component)

`ActiveLink` is a thin wrapper around Next's provided `Link` component with extra styling for the current route. `Link` contains useful props for prefetching routes (static routes only, or both static and dynamic), maintaining scroll position, and "replacing" history (see [`History.replaceState`](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) vs [`History.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) on MDN).

# Attributions
<details>
  <summary>All images were downloaded from <a href="https://unsplash.com/license">Unsplash</a> and cropped to square aspect ratios.</summary>
  <ul>
    <li>Blender from <a href="https://unsplash.com/photos/clear-glass-pitcher-with-sliced-fruits-LbJ_jSAepKM">Andrea Niosi</a></li>
    <li>Kettle from <a href="https://unsplash.com/photos/black-kettle-on-brown-wooden-table-NTa2s1hgqSc">Charlie Firth</a></li>
    <li>Oven from <a href="https://unsplash.com/photos/white-microwave-oven-on-white-wooden-cabinet-1eWGq_l_DuU">JOSBRA design</a></li>
    <li>Microwave from <a href="https://unsplash.com/photos/white-microwave-oven-on-white-wooden-cabinet-1eWGq_l_DuU">JOSBRA design</a></li>
    <li>Shirt from <a href="https://unsplash.com/photos/white-crew-neck-t-shirt-acn5ERAeSb4">Haryo Setyadi</a></li>
    <li>Hat from <a href="https://unsplash.com/photos/brown-and-black-fedora-hat-on-gray-stone-zVycYmcblDY">Michael C</a></li>
    <li>Jacket from <a href="https://unsplash.com/photos/brown-long-sleeve-shirt-on-white-clothes-hanger-Fg15LdqpWrs">Tobias Tullius</a></li>
    <li>Socks from <a href="https://unsplash.com/photos/white-red-and-blue-socks-zOFQ8v3YBBU">Thái An</a></li>
    <li>Hockey Stick from <a href="https://unsplash.com/photos/hockey-player-wearing-full-gear-on-ice-skating-field-U3tDfBG99ws">Gerhard Crous</a></li>
    <li>Baseball Bat from <a href="https://unsplash.com/photos/woman-in-red-jersey-shirt-and-white-shorts-holding-baseball-bat-e-f17L4EBBc">Josh Hemsley</a></li>
    <li>Goalie Pads from <a href="https://unsplash.com/photos/ice-hockey-goalie-defending-the-goal-UqT1DUuZ6Yk">Andy Hall</a></li>
    <li>Tennis Ball from <a href="https://unsplash.com/photos/a-tennis-ball-sitting-on-top-of-a-tennis-court-sI-p_NLBNr0">Todd Trapani</a></li>
  </ul>
</details>

<details>
  <summary>The Jester logo was initially generated with Google's Gemini, then edited to remove the background and recolor the shadow.</summary>
  <ul>
    <li><strong>Prompt: </strong><code>/gemini/prompt.txt</code></li>
    <li><strong>Output: </strong><code>/gemini/jester.jpg</code></li>
    <li><strong>Edited: </strong><code>/public/jester.png</code></li>
  </ul>
</details>
