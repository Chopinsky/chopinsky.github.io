const ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "https://github.com/Chopinsky/chopinsky.github.io.git"
  },
  err => {
    if (err) {
      console.error(`Failed to publish: ${err}`);
      return;
    }

    console.log("Published successfully!");
  }
);
