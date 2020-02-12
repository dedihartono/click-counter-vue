import { shallowMount, mount } from "@vue/test-utils";
import ClickCounter from "@/components/ClickCounter.vue";

describe("ClickCounter.vue", () => {
  it("renders component existing", () => {
    const wrapper = shallowMount(ClickCounter);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders button increment", () => {
    const wrapper = shallowMount(ClickCounter);
    expect(wrapper.find("#increment_button").exists()).toBe(true);
  });

  it("renders button increment", () => {
    const wrapper = shallowMount(ClickCounter);
    expect(wrapper.text()).toMatch("Increment");
  });

  it("renders button decrement", () => {
    const wrapper = shallowMount(ClickCounter);
    expect(wrapper.find("#decrement_button").exists()).toBe(true);
  });

  it("renders button decrement", () => {
    const wrapper = shallowMount(ClickCounter);
    expect(wrapper.text()).toMatch("Decrement");
  });

  it("renders input counter", () => {
    const wrapper = shallowMount(ClickCounter);
    expect(wrapper.find("#input_counter").exists()).toBe(true);
  });

  it("renders input counter with 0 value", () => {
    const wrapper = mount(ClickCounter, {
      data() {
        return {
          counter: 0
        };
      }
    });
    expect(wrapper.find("#label_counter").text()).toMatch("0");
  });

});
