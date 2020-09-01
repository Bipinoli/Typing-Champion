<template>
  <div
    class="message"
    :class="{'others-message': type == 'others-msg', 'my-message': type == 'my-msg'}"
  >
    <div class="message-author">{{author}}</div>
    <div class="message-text">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "ChatMessage",
  props: ["type", "author", "text"],
};
</script>

<style scoped>
.message {
  max-width: 80%;
  border: 1px solid var(--gray-color);
  border-radius: 0 20px 20px 20px;
  padding: .5rem 1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.8rem;
}
.message-author {
  font-weight: 600;
  padding-bottom: 0.2rem;
}
.message-text {
  word-break: break-word;
  white-space: pre-wrap;
}
.others-message {
  align-self: flex-start;
}
.my-message {
  background-color: var(--green-color);
  color: #fff;
  align-self: flex-end;
  border-radius: 20px 20px 0 20px;
  border: 0px;
}
</style>
