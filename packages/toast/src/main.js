import Popup from '../../popup';
// toast 正在优化……
export default({
    name: 'Toast',
    data() {
        return {
          inited: this.value
        };
    },
    props: {
        value: Boolean,
        title: String,
        message: String,
    },
    watch: {
        value(val) {
          this.inited = this.inited || this.value;
        }
    },
    computed: {
    },
    methods: {
    },
    render(h) {
        return(
            <Popup value={this.value} position="center">
                <div class="weui-dialog">
                asdasd
                </div>
            </Popup>
        )
    }
});