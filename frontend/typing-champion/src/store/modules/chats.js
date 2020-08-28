import { v4 as uuidv4 } from 'uuid';


const state = {
    messages: [
        {
            id: uuidv4(),
            category: 'chat',
            type: 'others-msg',
            author: 'bipin',
            text: "bipin ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat nemo, dicta nostrum cumque perferendis doloribus. Quae veritatis fugiat nulla! Illum amet nisi molestiae reiciendis dignissimos sed nostrum iusto provident.",
        },
        {
            id: uuidv4(),
            category: 'chat',
            type: 'my-msg',
            author: 'jackie',
            text: 'a quick brown fox is very sly',
        },
        {
            id: uuidv4(),
            category: 'info',
            name: 'kikakukakiku',
            info: 'joined',
        }
    ],
};

const mutations = {
    addMessage(state, message) {
        state.messages.push(message);
    },
};

const actions = {
    addChatMessage({ commit }, {type, author, text}) {
        commit('addMessage', {
            id: uuidv4(),
            category: 'chat',
            type: type,
            author: author,
            text: text,
        });
    },
    addJoinInfo({ commit }, {name, info}) {
        commit('addMessage', {
            id: uuidv4(),
            category: 'info',
            name: name,
            info: info,
        });
    }
};

const getters = {
    allMessages: (state) => state.messages,
};




export default {
    state,
    getters,
    actions,
    mutations
};