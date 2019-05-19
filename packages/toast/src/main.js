import Loading from '../../loading';
import Icon from '../../icon';
export function isDef(value) {
    return value !== undefined && value !== null;
}


const STYLE = ['success', 'fail', 'loading'];
export default({
    name: 'Toast',
    data() {
        return {
          inited: this.value
        };
    },
    components: {
        Loading,
        Icon
    },
    props: {
        value: Boolean,
        title: String,
        message: String,
        type: {
            type: String,
            default: 'text'
        },
    },
    watch: {
        value(val) {
          this.inited = this.inited || this.value;
        }
    },
    created(){
        console.log(isDef);
    },
    computed: {
    },
    methods: {
    },
    render(h) {
        const { message, type } = this;
        const style = STYLE.indexOf(type) !== -1 ? 'default' : type;
        function Content() {
            switch (style) {
                case 'text':
                    return <div class={'toast--text'}>{message}</div>;
                case 'html':
                    return <div domPropsInnerHTML={message} />;
                default:
                    return [
                        type === 'loading' ? (
                            <Loading class={'van-icon'} type="icon-loading" size="48px" />
                        ) : (
                            <Icon class={'van-icon'} icon={'icon-' + type } />
                        ),
                        isDef(message) && <div class={'toast__text'}>{message}</div>
                    ];
            }
        };
        return(
            <Popup value={this.value} position="center">
                <div class={['weui-toast', { 'toast__defalut': style === 'default'}]} >
                    {Content()}
                </div>
            </Popup>
        )
    }
});