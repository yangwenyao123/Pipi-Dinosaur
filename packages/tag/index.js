export default {
    name: 'PiTag',
    props: {
      size: String,
      color: String,
      dotClass: {
        type: Boolean,
        default: false,
      },
      textColor: {
        type: String,
        default: "#FFF"
      }
    },
    render() {
      const { $slots, dot, size, border } = this;
      const tagClass = [
        'pi-tag',
        size,
        border
      ]
      const dotClass = 'cu-tag badge';
      return (
        <span class={dot === true ?  dotClass : tagClass }>{$slots.default}</span>
      );
    }
  }
  