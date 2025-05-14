# ericrobskyhuntley.github.io

<!-- badges: start -->
[![Deploy to GitHub Pages](https://github.com/ericrobskyhuntley/ericrobskyhuntley.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ericrobskyhuntley/ericrobskyhuntley.github.io/actions/workflows/deploy.yml)
<!-- badges: end -->

Essentially a slightly-more-involved LinkTree alternative. [Built with Astro](https://astro.build/). Here's how you can make it your own, assuming you're using Github pages.

## Blocks

Stored as `.mdx` files within `src/blocks/`, these are the basic units. They contain simple front-matter and lists of links that are displayed alongside the block.

## Config

The remainder of site data is populated from `src/config.json`. This should be relatively self-explanatory. `"links"` provided here appear alongside the name at the top. `"avatar"` should refernece a file in the `src/assets/` folder. `"pages.user"` is your GitHub user or organization and `"pages.repo"` is the pages repostiory.

## Astro Config

Finally, you should modify your `astro.config.mjs` file as follows...

```js
export default defineConfig({
  integrations: [icon(), mdx()],
  site: '<YOUR GITHUG PAGES SITE>'
});
```
