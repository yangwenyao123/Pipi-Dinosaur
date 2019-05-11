import { prevent } from '../../utils/event';
import { deepClone } from '../../utils/deep-clone';
import PickerColumn from './PickerColumn';

export default({
  name: 'Picker',
  props: {
    title: String,
    loading: Boolean,
    showToolbar: {
      default: true,
      type: Boolean
    },
    cancelButtonText: String,
    confirmButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: Array,
    defaultIndex: {
      type: Number,
      default: 0
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      children: []
    };
  },

  computed: {
    simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },

  watch: {
    columns() {
      this.setColumns();
    }
  },

  methods: {
    setColumns() {
      const columns = this.simple ? [{ values: this.columns }] : this.columns;
      columns.forEach((column, index) => {
        this.setColumnValues(index, deepClone(column.values));
      });
    },

    emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },

    onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },

    // get column instance by index
    getColumn(index) {
      return this.children[index];
    },

    // get column value by index
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.getValue();
    },

    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      column && column.setValue(value);
    },

    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },

    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },

    // get options of column by index
    getColumnValues(index) {
      return (this.children[index] || {}).options;
    },

    // set options of column by index
    setColumnValues(index, options) {
      const column = this.children[index];
      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },

    // get values of all columns
    getValues() {
      return this.children.map(child => child.getValue());
    },

    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },

    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex);
    },

    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    },

    onConfirm() {
      this.emit('confirm');
    },

    onCancel() {
      this.emit('cancel');
    }
  },

  render(h) {
    const { itemHeight, $slots } = this;
    const columns = this.simple ? [this.columns] : this.columns;

    const frameStyle = {
      height: `${itemHeight}px`
    };

    const columnsStyle = {
      height: `${itemHeight * this.visibleItemCount}px`
    };

    const Toolbar = this.showToolbar && (
      <div class='cu-bar bg-white solid-bottom solid-top'>
        {$slots.default || [
          <div class="action text-blue" onClick={this.onCancel}>取消</div>,
          <div class="action text-green" onClick={this.onConfirm}>确定</div>
        ]}
      </div>
    );
    return (
      <div class="van-picker">
       {Toolbar}
        <div class="van-picker__columns" style={columnsStyle} onTouchmove={prevent}>
          {columns.map((item, index) => (
            <PickerColumn
              valueKey={this.valueKey}
              className={item.className}
              itemHeight={this.itemHeight}
              defaultIndex={item.defaultIndex || this.defaultIndex}
              visibleItemCount={this.visibleItemCount}
              initialOptions={this.simple ? item : item.values}
              onChange={() => {
                this.onChange(index);
              }}
            />
          ))}
          <div class='solid-bottom solid-top van-picker__frame' style={frameStyle} />
        </div>
      </div>
    );
  }
});