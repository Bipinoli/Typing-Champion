<template>
    <div class="chat-input">
        <div class="chat-input-content">
            <div class="chat-write">
                <span class="text-growable" role="textbox" contenteditable></span>
            </div>
            <div class="chat-send">
                <img src="@/assets/send.svg" alt="send">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ChatInput',
}
</script>


<style scoped>
.chat-input-content {
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    /* box-shadow: 0 0 1px rgba(0,0,0,.1); */
}
.chat-write {
    flex: .8;
    padding: 10px 10px 10px 16px;
    display: flex;
    align-items: center;
}
.text-growable {
    display: block;
    width: 18vw;
    max-height: 60vh;
    min-height: 1.5rem;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    outline: none;
}
.chat-send {
    flex: .2;
    display: grid;
    place-items: center;
    background-color: var(--white-color);
    border-radius: 0 10px 10px 0;
    padding-left: 4px;
}
.chat-send:hover {
    cursor: pointer;
}
</style>