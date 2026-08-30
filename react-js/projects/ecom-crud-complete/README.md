# Evara — E-commerce Store + Admin Console

A single Vite/React app containing both the customer-facing storefront and
the admin console, backed by a REST API (Express-style, deployed separately)
and using Redux Toolkit (`createAsyncThunk`) for all data flow.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values below
npm run dev             # local dev server
npm run build            # production build -> dist/
npm run lint              # ESLint
```

## Environment variables (`.env`)

| Variable | Required | Purpose |
|---|---|---|
| `VITE_API_URL` | Yes | Base URL of the backend API (already set to the deployed backend). |
| `VITE_RAZORPAY_KEY_ID` | Only for online payments | Razorpay **publishable** Key ID (`rzp_...`). Cash on Delivery works without it. Never put your Razorpay **secret** key in the frontend. |

## What's in the storefront (`/`)

- Product browsing with search, category filter, sorting and pagination (`/shop`)
- Product detail page with image gallery, reviews, and related products (`/details/:id`)
- Cart, wishlist (local, per-browser) and compare (local, per-browser)
- Checkout with **Cash on Delivery** and **Razorpay online payment** (cards / UPI / netbanking)
- Auth (login/register), account dashboard, order history, order cancellation,
  profile update and password change (`/accounts`)

## What's in the admin console (`/admin`)

- Role-gated login (only accounts with `role: "admin"` can access `/admin/*`)
- Dashboard with live stats and recent orders
- Full CRUD for Products (with image upload) and Categories (with image upload)
- Order management: list, filter by status, detail view, fulfillment-status updates
- Payments log
- User management: list, search, detail, activate/deactivate, delete
- Admin profile + password change

## Security notes

- Access tokens are held in memory only (never in `localStorage`); the
  refresh token is expected to be an httpOnly cookie handled by the backend
  (`withCredentials: true` is set on the API client).
- A 401 automatically triggers a silent token refresh and retries the
  original request once; if that also fails, the user is signed out.
- Admin routes are guarded client-side by `AdminRoute` — the backend must
  still enforce the same authorization, since client-side checks are not a
  security boundary on their own.
- The Razorpay integration only ever handles the **public** key on the
  client; signature verification happens server-side via `/payments/verify`.

## Notes on backend field names

The backend for this project lives in a separate repository. Several UI
fields (e.g. product `oldPrice`, category `slug`, order `paymentStatus`)
are normalized defensively in `src/utils/normalize.js` to accept a few
common naming variants. If your backend uses different field names than
assumed, adjust the normalizers there rather than hunting through every
component.

## Recent fixes & improvements

- **Loading / error / empty states**: every screen that fetches data from
  the API (categories, shop, product details, cart, checkout, orders,
  homepage sections) now shows a styled, on-brand loading spinner, a
  retry-able error message, or an empty-state illustration instead of a
  bare "Loading..." string or nothing at all. See
  `src/componants/common/DataState.jsx`.
- **Cart/Checkout race condition**: `Cart.jsx` and `Checkout.jsx` used to
  gate the "empty cart" view on the `loading` flag, which starts `false`
  before the first fetch even runs — this could briefly flash "your cart
  is empty" even when it wasn't. Both now gate on the slice's `loaded`
  flag instead.
- **Silent failures on the homepage**: `fetchFeaturedProducts` and
  `fetchLatestProducts` had no `pending`/`rejected` handlers in
  `productSlice.js`, so a failed request silently left the homepage
  showing nothing with no way to tell loading from failure. Both now have
  dedicated `loading*`/`*Error` state and a retry action.
- **Admin image "not saving/updating"**: the create/update requests
  themselves were already sending correctly-formed `multipart/form-data`
  with axios. The most likely cause of an update looking like it didn't
  save is the browser caching the old image at the same URL your backend
  returns after an update. Category/product thumbnails and edit-form
  previews now append a cache-busting `?v=<updatedAt>` query param (see
  `src/utils/imageUrl.js`) so a changed image is always shown immediately
  after a save. Image uploads also now validate file type/size on the
  client with a visible error instead of failing silently.
- **Admin console code-splitting**: the admin pages are now lazy-loaded
  (`src/admin-panel/src/routes/lazyAdminPages.js`), so shoppers no longer
  download the admin console's JS on their first page load.

