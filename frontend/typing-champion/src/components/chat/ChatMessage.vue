<template>
    <div class="message" :class="{'others-message': type == 'others-msg', 'my-message': type == 'my-msg'}">
        <div class="message-author">{{author}}</div>
        <div class="message-text">{{text}}</div>
    </div>
</template>


<script>
export default {
    name: 'ChatMessage',
    props: ['type', 'author', 'text'],
}
</script>


<style scoped>
.message {
    max-width: 80%;
    border: 1px solid var(--gray-color);
    border-radius: 0 20px 20px 20px;
    padding: 1rem;
    margin-bottom: .5rem;
    margin-top: .8rem;
}
.message-author {
    font-weight: 600;
    padding-bottom: .5rem;
}
.others-message {
    justify-self: flex-start;
}
.my-message {
    background-color: var(--green-color);
    color: #fff;
    justify-self: flex-end;
    border-radius: 20px 20px 0 20px;
}
</style>