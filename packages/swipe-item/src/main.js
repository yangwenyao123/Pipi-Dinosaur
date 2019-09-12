
export default {
    name: 'SwipeItem',
    data() {
      return {
        offset: 0
      };
    },
  
    beforeCreate() {
      this.$parent.swipes.push(this);
    },
  
    destroyed() {
      this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
    },
  
    render(h) {
      const { vertical, computedWidth, computedHeight } = this.$parent;
      const { $slots } = this;
  
      const style = {
        width: computedWidth + 'px',
        height: vertical ? computedHeight + 'px' : '100%',
        transform: `translate${vertical ? 'Y' : 'X'}(${this.offset}px)`
      };
  
      return (
        <div class='swipe-item' style={style}>
          {$slots.default}
        </div>
      );
    }
  }
  
  