addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  // Re-routes traffic seamlessly to the secure AI Studio container
  url.hostname = 'ais-pre-dlxtcm22exfd5ssxaa6siv-201471674421.us-east5.run.app'
  
  const modifiedRequest = new Request(url, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'manual'
  })

  return fetch(modifiedRequest)
}