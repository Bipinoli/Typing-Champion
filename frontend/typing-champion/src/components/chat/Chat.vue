<template>
    <div class="chat">
            <div class="chat-display">
                <template v-for="msg in allMessages">
                    <chat-message
                        v-if="msg.category == 'chat'"
                        :key='msg.id'
                        :type='msg.type'
                        :author='msg.author'
                        :text='msg.text'>
                    </chat-message>
                    <joined-left-info
                        v-else
                        :key='msg.id'
                        :name='msg.name'
                        :info='msg.info'>
                    </joined-left-info>
                </template>
                <span id="end-mark"></span>
            </div>
            <chat-input></chat-input>
        </div>
</template>


<script>
import { mapGetters } from 'vuex';

import ChatMessage from '@/components/chat/ChatMessage.vue'
import JoinedLeftInfo from '@/components/chat/JoinedLeftInfo.vue'
import ChatInput from '@/components/chat/ChatInput.vue'

import io from 'socket.io-client';

export default {
    name: 'Chat',
    components: {
        ChatMessage,
        JoinedLeftInfo,
        ChatInput,
    },
    data() {
        return {
            socket: {},
        };
    },
    created() {
        this.socket = io("http://localhost:3000")
    },
    computed: mapGetters(['allMessages']),
}
</script>


<style scoped>
.chat {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0,0,0,.25);
}
.chat-display {
    width: 100%;
    flex: .93;
    display: flex;
    flex-direction: column;
    padding: .7rem;
    overflow: auto;
}
.chat-input {
    flex: .07;
    padding: .7rem;
}
</style>