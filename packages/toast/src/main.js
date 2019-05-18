import Loading from '../../loading';

import Icon from '../../icon';

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
    computed: {
    },
    methods: {
    },
    render(h) {
        const { message, type } = this;
        const style = STYLE.indexOf(type) !== -1 ? 'default' : type;

        console.log(type);

        function Content() {
            switch (style) {
                case 'text':
                    return <div>{message}</div>;
                case 'html':
                    return <div domPropsInnerHTML={message} />;
                default:
                    return [
                        type === 'loading' ? (
                            <Loading />
                        ) : (
                            <Icon icon={'icon-' + 'close'} style={"font-size: 52px;margin-top: 16px;margin-bottom: 10px;color: #fff"}/>
                        ),
                        <div>{message}</div>
                    ];
            }
        };

        return(
            <div class="weui-toast">
                {Content()}
            </div>
        )
    }
});