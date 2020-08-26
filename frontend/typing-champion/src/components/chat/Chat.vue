<template>
    <div class="chat">
            <div class="chat-display">
                <chat-message 
                    type="others-msg"
                    author="Bipin"
                    text="bipin ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat nemo, dicta nostrum cumque perferendis doloribus. Quae veritatis fugiat nulla! Illum amet nisi molestiae reiciendis dignissimos sed nostrum iusto provident.">
                </chat-message>
                <chat-message 
                    type="my-msg"
                    author="Jackie"
                    text="bipin ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat nemo, dicta nostrum cumque perferendis doloribus.">
                </chat-message>
                <joined-left-info name="Romal" info="joined"></joined-left-info>
                <chat-message 
                    type="others-msg"
                    author="Bipin"
                    text="bipin ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat nemo, dicta nostrum cumque perferendis doloribus. Quae veritatis fugiat nulla! Illum amet nisi molestiae reiciendis dignissimos sed nostrum iusto provident.">
                </chat-message>
                <chat-message 
                    type="others-msg"
                    author="Bipin"
                    text="bipin ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat nemo, dicta nostrum cumque perferendis doloribus. Quae veritatis fugiat nulla! Illum amet nisi molestiae reiciendis dignissimos sed nostrum iusto provident.">
                </chat-message>
                <joined-left-info name="Ishan" info="left"></joined-left-info>
                <joined-left-info name="Bipin" info="joined"></joined-left-info>
                <chat-message 
                    type="my-msg"
                    author="Jackie"
                    text="bipin ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat nemo, dicta nostrum cumque perferendis doloribus.">
                </chat-message>              
            </div>
            <chat-input class="chat-input"></chat-input>
        </div>
</template>


<script>
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
    }
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
    flex: .93;
    display: grid;
    place-items: center;
    padding: .7rem;
    overflow: auto;
}
.chat-input {
    flex: .07;
    padding: .7rem;
}
</style>