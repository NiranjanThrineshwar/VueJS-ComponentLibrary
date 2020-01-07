import { shallowMount } from "@vue/test-utils";

import Input from "@/components/common-components/Input.vue";

describe("Input.vue", () => {
  it("renders Input when passed", () => {
    const wrapper = shallowMount(Input, {
      propsData: {
        type: "text",
        placeholder: "Text...",
        inputStyle: "box",
        isError: "false"
      }
    });
    const inputComponent = wrapper.find(".input--box.input--valid");
    inputComponent.trigger("focus");
  });
});
