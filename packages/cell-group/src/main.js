
export default {
    name: 'CellGroup',
    render(h) {
      const { $slots } = this;
      return (
        <div class="cu-list menu card-menu">
            {$slots.default}
        </div>
      );
    }
  }
  
  