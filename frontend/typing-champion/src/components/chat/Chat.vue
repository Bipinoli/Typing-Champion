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
                <joined-left-info name="Romal" event="joined"></joined-left-info>
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
                <joined-left-info name="Ishan" event="left"></joined-left-info>
                <joined-left-info name="Bipin" event="joined"></joined-left-info>
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

export default {
    name: 'Chat',
    components: {
        ChatMessage,
        JoinedLeftInfo,
        ChatInput,
    },
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