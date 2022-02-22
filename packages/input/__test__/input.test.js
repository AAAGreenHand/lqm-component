require("jsdom-global")();
import { mount } from '@vue/test-utils'
import Input from "../src/input.vue";

describe("lg-input", () => {
  test("Input Text", () => {
    let wrapper = mount(Input);
    // expect(wrapper.html().toContain(`input type="text"`));
  });
});
