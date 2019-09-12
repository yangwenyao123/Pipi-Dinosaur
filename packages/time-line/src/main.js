export default {
    name: 'TimeLine',
    props: {
      time: String,
    },
    render(h) {
      const { time, $slots } = this;
      const Time = (<span class="cu-time">{time}</span>);
      return (
        <div class="cu-timeline">
          {Time}
          {$slots.default}
        </div>
      );
    }
  }