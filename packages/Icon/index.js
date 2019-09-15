export default {
    name: 'icon',
    props: {
        icon: String,
        size: String,
        color: String,
    },
    render() {
        const { icon, color, size } = this;
        const styleed = {
            'font-size': size
        }
        return (
            <span style={styleed} class={[icon, color]}></span>
        )
    }
}