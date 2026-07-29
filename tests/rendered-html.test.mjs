import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Network Animal homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Know what you bring/);
  assert.match(html, /Build relationships that matter/);
  assert.match(html, /Powered by/);
  assert.match(html, /One Purpose Network/);
  assert.doesNotMatch(html, /Your site is taking shape|SkeletonPreview/);
});

test("keeps the app invitation event route working", async () => {
  const response = await render(
    "/event.html?slug=built-different-wildcard-charity-poker-tournament",
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Built Different Wildcard Charity Poker Tournament/);
  assert.match(html, /Hilton Irvine Orange County Airport/);
});
