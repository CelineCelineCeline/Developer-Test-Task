# Developer Test Task – Custom Shopify Product Page

This project is a custom Shopify product page implementation based on the **Dawn theme**, built as part of a developer test task.

# Features Implemented

- **Custom product layout** using a new template: `product.neoric`
- **Image gallery** with Swiper.js (thumbnail + main image sync)
- **Responsive design**, pixel-perfect based on Adobe XD specs
- **Trust icon section** below the product content
- **Theme sections fully editable via Shopify Admin**

## Files Added or Modified

| File | Purpose |
|------|---------|
| `sections/product-wrapper.liquid` | Combines gallery + info into one responsive layout using blocks |
| `sections/product-trust.liquid` | Trust icon section with 3 blocks |
| `templates/product.json` | Modified to include new product layout (`product-wrapper`, `product-trust`) |
| `assets/product-gallery.js` | Swiper.js logic to sync thumbnails and main image |
| `assets/product-gallery.css` | Custom styles for gallery layout and product info |
| `theme.liquid` | Includes gallery JS and CSS |
| `assets/swiper-bundle.min.css` | Swiper styles for gallery layout |
| `assets/swiper-bundle.min.js`  | Swiper JS library for image slider functionality |
| `.gitignore` | Keeps repo clean of unnecessary files |


## Base Theme

- [Shopify Dawn theme](https://github.com/Shopify/dawn) used as the starting point
- Only product page files were customized — all other pages remain untouched

---

## Tech Stack

- Shopify (Liquid)
- HTML / CSS / JavaScript
- Swiper.js (for the gallery)

---
