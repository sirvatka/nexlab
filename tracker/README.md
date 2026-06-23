# Local Chase Tracker

Run `node server.js`, then open `http://127.0.0.1:8787` to preview the live COD vehicle map, METAR surface plots, and local Chase Updates feed. You can also open `index.html` directly from this folder; while the local server is running, the file-opened page automatically uses it for live tracker, surface, and alert data.

On this PC, double-click `Open Tracker.cmd` to start the local service when needed and open the fully working tracker.

The local server securely proxies NOAA Aviation Weather METAR data for the visible map area. Surface observations use standard 5/10/50-knot wind barbs. The Watches / Warnings overlay combines live NWS warning polygons with official SPC watch boxes. Severe thunderstorm watches are dark blue and tornado watches are dark red, with 25% opaque fills. The deployed Discord service can expose the same `/api/metars` route.

## Discord connection still needed

The page is ready to consume a JSON feed. Set `feedEndpoint` in `feed-data.js` after the Discord service is deployed.

The initial publishing policy is:

- Channel: `#chasing-discussion`
- Allowed publishers: `@elusiveeuphoria`, `@sirvatka`
- Required message prefix: `!tracker`
- An image attached to the same Discord message becomes the update image.

Example from the Discord iPhone app:

```text
!tracker Tornadic supercell developing to our west near Goodland, Kansas.
```

Attach the photo before sending. MEE6 messages and ordinary channel discussion will be ignored.

Each feed item should contain:

```json
{
  "id": "discord-message-id",
  "author": "Team member",
  "postedAt": "2026-06-22T20:00:00Z",
  "text": "Field update",
  "imageUrl": "https://permanent-image-storage/image.jpg",
  "xUrl": "https://x.com/account/status/id"
}
```

Never place a Discord bot token or X API key in this folder. Those secrets belong in the server-side feed service.
