export default {
    name: 'Icon',
    props: {
        icon: String,
        size: String,
        color: String,
    },
    render() {
        const { icon, color, size } = this;
        return (
            <span style={size} class={[icon, color]}>123</span>
        )
    }
}