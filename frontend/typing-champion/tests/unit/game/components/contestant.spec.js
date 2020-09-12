import {mount} from '@vue/test-utils';
import Contestant from '@/components/game/raceComponents/Contestant';

test('correctly renders contestant', () => {
  let wrapper = mount(Contestant, {
    propsData: {
      name: 'bipin',
      nameSpecial: '(you)',
      wpm: 30,
      rank: 1,
      progress: 100
    }
  });

  expect(wrapper.find('.wpm').text()).toBe('30 wpm');
  expect(wrapper.find('.rank').text()).toBe('1st');
  expect(wrapper.find('.racer').element.style.height).toBe('100%');
  expect(wrapper.find('.name-part').text()).toBe('bipin (you)');
});

