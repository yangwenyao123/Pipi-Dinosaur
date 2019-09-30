import Popup from '../popup';
export default({
    name: 'Dialog',
    data() {
        return {
          inited: this.value
        };
    },
    props: {
        value: Boolean,
        title: String,
        message: String,
        cancelButtonText: String,
        cancelButtonColor: String,
        confirmButtonText: String,
        confirmButtonColor: String,
        showCancelButton: Boolean,
        showConfirmButton: {
          type: Boolean,
          default: true
        },
        callback: Function
    },
    watch: {
        value(val) {
          this.inited = this.inited || this.value;
        }
    },
    computed: {
        shouldRender() {
          return this.inited;
        }
    },
    methods: {
        handleAction(action) {
            this.close(action);
        },
        close(action) {
            if (this.callback) {
                this.value = false;
                this.callback(action);
            } else {
                this.$emit('input', false);
            }
        },
    },
    render(h) {
        const { title }  = this;

        if (!this.shouldRender) {
            return;
        }
        const childRen = this.$slots.default;
        const Title = (<div class="weui-dialog__hd">
            <div class="weui-dialog__title">{title}</div>
        </div>);
        const Content = ( childRen || this.message ) && (<div>{childRen || <div class="weui-dialog__bd">{this.message}</div>}</div>);
        const Buttton = (<div class="weui-dialog__ft">
                {this.showCancelButton && (
                    <div class="weui-dialog__btn text-red" onClick={() => {
                        this.handleAction('cancel');
                    }}>取消</div>
                )}{this.showConfirmButton && (
                    <div class="weui-dialog__btn text-grey" onClick={() => {
                        this.handleAction('confirm');
                    }}>确定</div>
                )}
        </div>);
        return(
            <Popup value={this.value} position="center">
                <div class="weui-dialog">
                    {Title}
                    {Content}
                    {Buttton}
                </div>
            </Popup>
        )
    }
});