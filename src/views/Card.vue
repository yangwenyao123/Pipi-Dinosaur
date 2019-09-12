<template>
  <div class="card">
    <Card name="皮皮猪" :dynamic="false" time="2018年12月3日" content="皮皮猪皮皮猪皮皮猪皮皮猪皮皮猪皮皮猪皮" contentImg="https://image.weilanwl.com/img/4x3-1.jpg" avatar="https://image.weilanwl.com/img/4x3-1.jpg"></Card>
    <Card name="皮皮猪" :dynamic="true" time="2018年12月3日" content="皮皮猪皮皮猪皮皮猪皮皮猪皮皮猪皮皮猪皮" :contentImg="list" avatar="https://image.weilanwl.com/img/4x3-1.jpg"></Card>
  </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                'https://image.weilanwl.com/img/4x3-1.jpg',
                'https://image.weilanwl.com/img/4x3-1.jpg',   
                'https://image.weilanwl.com/img/4x3-1.jpg',   
                'https://image.weilanwl.com/img/4x3-1.jpg',   
                'https://image.weilanwl.com/img/4x3-1.jpg',   
                'https://image.weilanwl.com/img/4x3-1.jpg'
            ]
        }
    },
}
</script>

