import { mount } from "@vue/test-utils";

import AutoComplete from "@/components/common-components/AutoComplete.vue";

const itemList = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pear",
  "Peach",
  "Grape",
  "Tangerine",
  "Pineapple"
];

describe("AutoComplete.vue", () => {
  it("renders Autocomplete when passed", () => {
    const wrapper = mount(AutoComplete, {
      propsData: {
        items: itemList,
        type: "text",
        placeholder: "Type in to see the list",
        inputStyle: "box",
        icon: "fa-search",
        iconType: "left",
        isError: "false"
      }
    });
    const autocompleteComponent = wrapper.find(".autocomplete-component");
    autocompleteComponent.trigger("focus");
  });
});

describe("AutoComplete.vue", () => {
  it("renders Autocomplete with value entered", () => {
    const wrapper = mount(AutoComplete, {
      propsData: {
        items: itemList,
        type: "text",
        placeholder: "Type in to see the list",
        inputStyle: "box",
        icon: "fa-search",
        iconType: "left",
        isError: "false"
      }
    });
    const autocompleteComponent = wrapper.find(".autocomplete-component input");
    autocompleteComponent.setValue("apple");
  });
});
