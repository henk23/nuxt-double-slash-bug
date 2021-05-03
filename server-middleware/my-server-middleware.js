export default function (req, res, next) {
  console.log('my-server-middleware', req.url);

  // "Bug" can be fixed by handling double slashes explicitly in this middleware

  // const new_url = req.url.replace('//', '/');
  //
  // if(req.url !== new_url) {
  //   res.writeHead(301, {
  //     'Location': new_url,
  //   });
  //   res.end();
  //   return;
  // }

  next();
}
