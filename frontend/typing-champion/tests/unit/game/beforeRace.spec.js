import {mount} from '@vue/test-utils';
import BeforeRace from '@/components/game/BeforeRace';

test('displays before-race component (Host perspective)', () => {
  let wrapper = mount(BeforeRace, {
    propsData: {
      isHost: true
    }
  });
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('.btn').text()).toBe('Start Race');

});

test('displays before-race component (joinee perspective)', () => {
  let wrapper = mount(BeforeRace, {
    propsData: {
      isHost: false
    }
  });
  expect(wrapper.text()).toBe("Host hasn't started the race yet");
});
