<template>
    <div class="joined-left-info">
        <img src="@/assets/dots.svg" alt="">
        <p>{{name}}<span>{{event}}</span></p>
    </div>
</template>


<script>
export default {
    name: 'JoinedLeftInfo',
    props: ['name', 'event'],
}
</script>


<style scoped>
.joined-left-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}
.joined-left-info span {
    font-weight: 100;
    padding-left: .5rem;
}
</style>