window.TRACKER_CONFIG = {
  feedEndpoint: "",
  surfaceEndpoint: "/api/metars",
  feedRefreshMs: 30000,
  trackerRefreshMs: 60000,
  discordChannel: "chasing-discussion",
  discordCommandPrefix: "!tracker",
  discordPublishers: ["elusiveeuphoria", "sirvatka"]
};

window.CHASE_FEED = [
  {
    id: "preview-1",
    author: "Tracker Preview",
    postedAt: "2026-06-22T20:00:00Z",
    text: "The Discord publishing rule is prepared for @elusiveeuphoria and @sirvatka. A message beginning with !tracker and its attached image will appear here after the feed service is connected.",
    imageUrl: "",
    xUrl: ""
  }
];
