# Deployment Notes

This page is currently a small static web app:

- `index.html`
- `styles.css`
- `app.js`

Local project folder:

`C:\Users\sirva\Documents\Codex\2026-06-15\to-start-i-want-this-page\outputs\cod-weather-scratch`

## Basic Server Path

Copy the contents of this folder into a web-accessible directory on the NexLab/COD server, for example:

`/var/www/html/quick-briefing/`

Possible public URL:

`https://weather.cod.edu/quick-briefing/`

or:

`https://nexlabweather.com/quick-briefing/`

## Server Requirements

The server only needs to serve static files for the first version:

- `index.html`
- `styles.css`
- `app.js`

## Production Caveats

Some products are external pages or external data sources. A few may behave differently on a production server because of:

- iframe-blocking rules
- CORS restrictions
- provider-side security headers
- mixed behavior between local files and hosted pages

Before publishing, do a server-ready pass:

- confirm each iframe still loads from the final domain
- replace fragile embedded pages with direct COD-hosted image/text endpoints where possible
- consider server-side proxy endpoints for products that cannot be fetched directly in the browser
- make sure linked NexLab logo/assets are approved for this page or copied locally if preferred

## Next Step

When ready, make a clean deployable folder and test it from a local web server before copying to production.
