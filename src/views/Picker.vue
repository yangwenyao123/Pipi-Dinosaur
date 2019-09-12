<template>
    <div id="Picker">
    <Picker show-toolbar
        title="标题"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"  
        @change="onChange"
    ></Picker>
    </div>
</template>
<script>
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};
export default {
    data() {
        return {
            columns: [
                {
                    values: Object.keys(citys),
                    className: 'column1'
                },
                {
                    values: citys['浙江'],
                    className: 'column2',
                    defaultIndex: 2
                }
            ]
        }
    },
    methods: {
        onConfirm(value, index) {
            alert(11);
        },
        onCancel() {
            alert(11);
        }
    }
}
</script>
