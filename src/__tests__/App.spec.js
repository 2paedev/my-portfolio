import { shallowMount } from '@vue/test-utils';
import App from '../App.vue';

describe('App.vue', () => {
  it('renders the same HTML', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('render PersonalInfo component', () => {
    const wrapper = shallowMount(App);
    const component = wrapper.find({ name: 'personal-info' });
    expect(component.exists()).toBeTruthy();
  });

  it('render Skills component', () => {
    const wrapper = shallowMount(App);
    const component = wrapper.find({ name: 'skills' });
    expect(component.exists()).toBeTruthy();
  });

  it('render Projects component', () => {
    const wrapper = shallowMount(App);
    const component = wrapper.find({ name: 'projects' });
    expect(component.exists()).toBeTruthy();
  });

  it('render Hobbies component', () => {
    const wrapper = shallowMount(App);
    const component = wrapper.find({ name: 'hobbies' });
    expect(component.exists()).toBeTruthy();
  });
});
