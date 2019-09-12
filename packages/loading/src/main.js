export default {
  name: 'Loading',
  props: {
    type: String,
    size: String,
    color: String
  },
  render(h) {
    const { type, size, color } = this;
    const styleed = {
      'font-size': size,
    }
    return (<span style={styleed} class={[
      type,
      'iconfont-spin',
      color,
    ]}></span>);
  }
}
