import http from "http";
import fs from "fs";

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url.startsWith("/product")) {
    console.log(req.url.split("/")[2]);
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(modifiedIndex);
    return;
  }

  //   
  //   
  //  
    
  // }
  //   

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
      case '/product':
            res.setHeader('Content-Type', 'text/html');
            let modifiedIndex = index.replace('**title**', products[0].title)
            .replace('**url**', products[0].thumbnail)
            .replace('**price**', products[0].price)
            .replace('**rating**', products[0].rating)
            res.end(modifiedIndex);
            break;
    default:
      res.writeHead(404);
      res.end();
  }

  console.log("server started  ");
  //   res.setHeader('Dummy', 'DummyValue');

  //
});

server.listen(5050);