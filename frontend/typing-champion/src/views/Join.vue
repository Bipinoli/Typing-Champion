<template>
    <div class="join">
        <div class="content">
            <input type="text" placeholder="Enter Nickname">
            <div class="btns">
                <div class="btn">Join</div>
                <div class="btn">Host</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Join',

}
</script>


<style scoped>
.join {
    background-color: var(--white-color);
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
}
.content {
    display: flex;
    flex-direction: column;
    width: 30vw;
}
input {
    width: 100%;
    padding: .8rem 1.2rem;
    text-align: center;
    font-size: 1.5vw;
}
input::placeholder {
    font-weight: lighter;
}
.btns {
    width: 100%;
    height: 100%;
    display: flex;
    font-size: 1.5vw;
    justify-content: space-around;
    padding: 1rem;
}
.btn {
    background-color: var(--green-color);
    color: white;
    width: 48%;
    text-align: center;
    padding: .8rem;
}
</style>