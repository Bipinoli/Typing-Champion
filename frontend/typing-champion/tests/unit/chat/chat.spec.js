import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import ChatInput from '@/components/chat/ChatInput';
import ChatMessage from '@/components/chat/ChatMessage';
import JoinedLeftInfo from '@/components/chat/JoinedLeftInfo';
import Chat from '@/components/chat/Chat';

import Vuex from 'vuex';


test('displays chat input', () => {
  let wrapper = mount(ChatInput);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('.chat-send').exists()).toBe(true);
  expect(wrapper.find('.chat-write').exists()).toBe(true);
});

test('displays chat-message', () => {
  let wrapper = mount(ChatMessage, {
    propsData: {
      type: 'my-message',
      author: 'bipin',
      text: 'hey there',
    }
  });
  expect(wrapper.find('.message-author').text()).toBe('bipin');
  expect(wrapper.find('.message-text').text()).toBe('hey there');
});

test('displays joined/left info', () => {
  let wrapper = mount(JoinedLeftInfo, {
    propsData: {
      name: 'bipin',
      info: 'joined'
    }
  });
  expect(wrapper.find('p').text()).toBe('bipinjoined');
});


// const localVue = createLocalVue();
// localVue.use(Vuex);

// describe('Chat.vue', () => {
//   let actions;
//   let store;

//   beforeEach(() => {
//     actions: {
//       newChat: jest.fn()
//     };
//     store: new Vuex.Store({
//       actions
//     });
//   });

//   test('dispatchs "newChat" from ChatInput', () => {
//     let wrapper = shallowMount(Chat, { store, localVue });
//     //TODO: how to stub created hook???
//     wrapper.findComponent(ChatInput).trigger('newChat');
//     expect(actions.newChat).toHaveBeenCalled();
//   });  
// });