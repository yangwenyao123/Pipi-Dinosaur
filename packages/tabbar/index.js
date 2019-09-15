export default {
    name: 'tabbar',
    data() {
      return {
        items: []
      };
    },
    props: {
      value: Number,
      activeColor: String,
      fixed: Boolean,
      bgColor: {
        type: String,
        default: 'bg-white'
      }
    },
    methods: {
      setActiveItem() {
        this.items.forEach((item, index) => {
          item.active = index === this.value;
        });
      },
      onChange(active) {
        if (active !== this.value) {
          this.$emit('input', active);
          this.$emit('change', active);
        }
      }
    },
    watch: {
      items() {
        this.setActiveItem();
      },
      value() {
        this.setActiveItem();
      }
    },
    components: {
    },
    render() {
      const { fixed, bgColor, $slots } = this; 
      const classed = [
        {
          'foot': fixed,
        },
        bgColor,
        'tabbar'
      ]
      return (
        <div class={classed}>
          {$slots.default}
        </div>
      );
    }
  }