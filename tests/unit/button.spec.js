import { shallowMount } from "@vue/test-utils";
import Button from "@/components/common-components/Button.vue";

describe("Button.vue", () => {
  it("renders button when passed", () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        buttonType: "primary",
        buttonText: "Primary Button"
      }
    });
    const buttonComponent = wrapper.find(".button--primary");
    buttonComponent.trigger("click");
  });
});

describe("Button.vue", () => {
  it("renders when button is clicked by default", () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        buttonType: "primary",
        buttonText: "Primary Button"
      }
    });
    const buttonComponent = wrapper.find(".button-clicked");
    expect(buttonComponent.exists());
  });
});
