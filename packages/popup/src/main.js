const positionList = {
  'center': '',
  'bottom': 'bottom-modal',
  'left': 'drawer-modal justify-start',
  'right': 'drawer-modal justify-end'
}

export default({
  name: 'Popup',
  props: {
    value: Boolean,
    position: {
      default: 'center',
      type: String
    },
    styleed: String
  },
  data() {
    return {
      inited: this.value
    };
  },
  watch: {
    value(val) {
      const type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    }
  },
  computed: {
    positioned() {
      return positionList[this.position];
    }
  },
  methods: {
    open(){
      this.$emit('input', true);
    },
    close(){
      this.$emit('input', false);
    } 
  },
  render(h) {
    const { $slots, value, styleed } = this;
    if(!value){
      return;
    }
    const classed = [
      'cu-modal',
      { 'show': value === true },
      this.positioned
    ];
    return(
      <div class={classed}>
        <div class="cu-dialog" style={styleed}>
        {$slots.default}
        </div>
      </div>
    )
  }
});