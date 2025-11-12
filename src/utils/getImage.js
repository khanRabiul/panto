const getImagURL = (name) => new URL(`../assets/products/${name}`, import.meta.url).href

export { getImagURL };