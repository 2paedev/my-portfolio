import { shallowMount } from '@vue/test-utils';
import PersonalInfo from '../PersonalInfo.vue';

describe('PersonalInfo.vue', () => {
  it('renders the same HTML', () => {
    const wrapper = shallowMount(PersonalInfo);
    expect(wrapper.element).toMatchSnapshot();
  });
});
