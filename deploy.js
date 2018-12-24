var ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "https://github.com/Chopinsky/chopinsky.github.io.git"
  },
  function(err) {
    if (!err) {
      console.log("Deployed successfully!");
    } else {
      console.error(`Unable to deploy: ${err}`);
    }
  }
);
