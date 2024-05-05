function parseURL(urlString) {
    try {
      const url = new URL(urlString);
      return {
        protocol: url.protocol,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
      };
    } catch (error) {
      console.error("Invalid URL:", urlString);
      return null; 
    }
  }
  const url1 = "https://www.exampleStatement.com/path/to/file?query=string#fragment";
  const url2 = "invalidURL";
  const parsedURL1 = parseURL(url1);
  const parsedURL2 = parseURL(url2);
  console.log("Parsed URL 1:", parsedURL1);
  console.log("Parsed URL 2:", parsedURL2);