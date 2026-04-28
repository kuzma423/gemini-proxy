// Прокси для Gemini API
const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

async function handleRequest(request) {
  const url = new URL(request.url);
  const targetUrl = `${GEMINI_API_BASE}${url.pathname}${url.search}`;
  const headers = new Headers(request.headers);
  headers.set('Host', 'generativelanguage.googleapis.com');
  const modifiedRequest = new Request(targetUrl, {
    method: request.method,
    headers: headers,
    body: request.body,
  });
  return fetch(modifiedRequest);
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
