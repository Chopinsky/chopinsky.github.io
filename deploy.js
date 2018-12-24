const fs = require("fs");

fs.readFile("./build/index.html", (err, buffer) => {
  if (err) {
    console.error(`Deployment failed: ${err}`);
    return;
  }

  let content = buffer.toString();
  if (content) {
    content = content.split(`src="`).join('src="/build');
    content = content.split(`ref="`).join('ref="/build');

    console.log(content);
  }

  fs.writeFile("./index.html", content, err => {
    if (err) {
      console.error(`Failed to generated index.html: ${err}`);
    } else {
      console.log("The file has been saved!");
    }
  });
});
