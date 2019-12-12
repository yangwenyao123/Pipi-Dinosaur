
export default {
    name: 'PiCellGroup',
    render() {
      const { $slots } = this;
      return (
        <div class="pi-list menu">
            {$slots.default}
        </div>
      );
    }
  }
  
  