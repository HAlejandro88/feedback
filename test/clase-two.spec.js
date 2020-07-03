/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../clase-two.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<clase-two></clase-two>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
