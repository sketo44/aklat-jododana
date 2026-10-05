# أكلات جدودنا | Jododana

Proposed website for أكلات جدودنا (Jododana), a traditional restaurant in Buraydah, Qassim. Static HTML, CSS and JavaScript. No build step.

## Pages

- `index.html`: introduction, featured dishes, branches with a nearest-branch finder, booking call-out.
- `menu.html`: full menu with prices, category rail, and a personal "my order" list saved on the visitor's device.
- `reservations.html`: booking request form that hands off to WhatsApp.

Arabic (RTL) is the default. The language button switches to English.

## Run locally

```bash
npx http-server -p 5173 -c-1
```

Then open http://localhost:5173.

## Before launch

This is a proposal and has not been approved by the restaurant. Before it goes live:

- Replace the dish photos (`assets/dishes/`, cropped from delivery-app screenshots) with original high-resolution photos.
- Replace `assets/facade.jpg` (a public Google Maps photo) with an owner photo.
- Confirm prices, opening hours, and the WhatsApp booking number (`BOOKING_WHATSAPP` in `assets/app.js`).
- Add the original logo file.

Design notes are in `DESIGN.md`. Product notes are in `PRODUCT.md`.
