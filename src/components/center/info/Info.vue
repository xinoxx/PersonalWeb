<template>
    <div class="info">
        <div class="wrapper">
            <div class="line1"></div>
            <div class="title"></div>
            <div class="info-content-box">
                <ul>
                    <li>
                        <span></span>
                        <p>项目目前只有一个前端简单壳子，之后完善前端功能后会加入后端，前后端联调后才算真正完成开发ORZ</p>
                    </li>
                    <li>
                        <span></span>
                        <p>由于没有后端，所有前端资源都只是选了一部分进行展示，以文件的形式存储在项目里T T</p>
                    </li>
                    <li>
                        <span></span>
                        <p>目前网页还只能支持网页端，手机端还需要再进一步的学习，适配性略差。。。</p>
                    </li>
                    <li>
                        <span></span>
                        <p>技术不熟练，还在研究学习中，请多多包涵。</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
}
</script>

<style scoped>
.info {
    height: 85%;
    background: url(@/assets/images/index_bg.png) no-repeat center 0/cover;
}

.info .wrapper {
    position: relative;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.info .wrapper .line1 {
    position: absolute;
    top: 10px;
    left: 70px;
    width: 1100px;
    height: 2px;
    background-color: #fced54;
}

.info .wrapper .title {
    text-align: center;
    line-height: 100px;
    width: 100%;
    height: 120px;
    background: url(@/assets/images/info_bg.png) no-repeat center 0/contain;
}

.info .wrapper .info-content-box {
    width: 100%;
    height: 540px;
}

.info .wrapper .info-content-box ul {
    padding-top: 30px;
}

.info .wrapper .info-content-box ul li {
    display: flex;
    justify-content: center;
}

.info .wrapper .info-content-box ul li span {
    width: 30px;
    height: 25px;
    background-image: url(@/assets/images/tag1.png);
}

.info .wrapper .info-content-box ul li p {
    padding-left: 20px;
    color: #fff;
    font-size: 20px;
    width: 70%;
    height: 100px;
}
</style>