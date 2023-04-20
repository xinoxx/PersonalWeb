<template>
    <div class="postern">
        <div class="postern_bg">
            <div class="close" @click="close"></div>
            <div class="input_pwd">
                <div class="input_bg">
                    <input type="password" v-model.trim="pwd">
                </div>
                <button type="submit" @click="enter"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "Postern",
    data() {
        return {
            pwd: '',
            state: false
        }
    },
    methods: {
        close() {
            this.pwd = ''
            this.state = false
            this.$emit('closePostern', this.state)
        },
        enter() {
            if (this.pwd === 'kkkarlooo'){
                localStorage.setItem('token', '假如这是token')
            }else {

            }
        }
    }
}
</script>

<style>
.postern {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.postern_bg {
    position: absolute;
    top: -100%;
    left: 50%;
    width: 470px;
    height: 230px;
    background-image: url(../../assets/images/admin_pop.png);
    background-position: -5px -5px;
    opacity: 0;
    transform: translateX(-50%);
    animation: window_move 1s 1 forwards;
}

@keyframes window_move {
    to {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        opacity: 1;
    }
}

.postern_bg .close {
    position: absolute;
    top: -25px;
    right: 10px;
    width: 55px;
    height: 55px;
    background-image: url(../../assets/images/admin_pop.png);
    background-position: -5px -240px;
    border: none;
    appearance: none;
    cursor: pointer;
}

.postern_bg .input_pwd {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 165px;
    width: 180px;
    height: 30px;
}

.postern_bg .input_pwd .input_bg {
    width: 150px;
    height: 30px;
    background: url(../../assets/images/admin_pop.png) -65px -240px;
}

.postern_bg .input_pwd .input_bg input {
    margin: 5px 10px;
    padding-left: 5px;
    width: 130px;
    height: 20px;
}

.postern_bg .input_pwd button {
    width: 25px;
    height: 30px;
    background: url(../../assets/images/admin_pop.png) -220px -240px;
}
</style>