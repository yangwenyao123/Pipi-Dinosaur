<template>
  <div>
    <div class="cu-form-group margin-top">
        <div class="title">标题</div>
        <input placeholder="请输入标题" v-model="title" />
    </div>
    <div class="cu-form-group">
        <textarea placeholder="请输入内容……"  v-model="content"></textarea>
    </div>

    <button class="cu-btn block bg-red margin-tb-sm lg" style="height: 52px;" @click="submit">无效状态</button>
  </div>
</template>
<script>
import getData from '../utils/public';
export default {
    name: 'FeedBack',
    data(){
        return {
            title: '',
            content:"",
        }
    },
    methods: {
        submit(){
            const data = {
                title: this.title,
                content: this.content
            }
            getData(data).then( (response) => {
                if(response.code === 200){
                    alert('留言成功！');
                } else { 
                    alert(response.error);
                }
            })
        }
    } 
}
</script>

