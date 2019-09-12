
export default {
    name: 'Card',
    props: {
      name: String,
      avatar: String,
      border: {
        type: Boolean,
        default: false
      },
      dynamic: {
        type: Boolean,
        default: false
      },
      content: String,
      contentImg: [String, Array],
      time: String
    },
    data() {
      return {
        col: 1
      }
    },
    computed: {
      initAvtar() {
        return {
          backgroundImage: `url(${this.avatar})`
        };
      },
      cardStyle() {
        if(Array.isArray(this.contentImg)){
          this.dynamic = true;
          this.contentImg.length === 1 ? this.col = 1 : this.col = 3;
        } else {
          this.dynamic = false;
          this.col = 1;
        }
        return this.dynamic;
      },
      cols() {
        return `col-${this.col}`
      }
    },
    render() {
      const { contentImg }  = this;
        const action = (
          <div class={['text-gray', this.dynamic === true ? 'text-right padding'  : '']}>
            <span class="icon-attentionfill margin-left-sm" ></span> 10
            <span class="icon-appreciatefill margin-left-sm"></span> 20
            <span class="icon-messagefill margin-left-sm"></span> 30
          </div>
        );
        const ordinary = (
          <div class="cu-card case">
            <div class="cu-item shadow">
              <div class='image'>
              <img src={contentImg} />
                <div class='cu-bar bg-shadeBottom'>{this.content}</div>
              </div>
              <div class="cu-list menu menu-avatar">
              <div class="cu-item">
              <div class="cu-avatar round lg" style={this.initAvtar}></div>
                  <div class='content flex-sub'>
                  <div class='text-grey'>{this.name}</div>
                  <div class='text-gray text-sm  flex justify-between'>
                      {this.time}
                      {action}
                  </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
        )
        const dynamic = (
          <div class="cu-card dynamic">
            <div class="cu-item shadow">
              <div class="cu-list menu menu-avatar">
                <div class="cu-item">
                <div class="cu-avatar round lg" style= {this.initAvtar}></div>
                  <div class='content flex-sub'>
                    <span class='text-grey'>{this.name}</span>
                    <span class='text-gray text-sm flex justify-between'>
                      {this.time}
                    </span>
                  </div>
                </div>
              </div>
              <div class='text-content'>
              {this.content}
              </div>
              <div class={['grid grid-square flex-sub padding-lr','col-'+ this.col ]}>
              {Array.isArray(this.contentImg) === true ? contentImg.map((item) => (
                  <div class="bg-img only-img" style={[{backgroundImage: 'url(' + item + ')'}]}>
                  </div> 
              )) : ''}
              </div>
              <div class='text-gray text-sm'>
                {action}
              </div>
              <div class="cu-list menu menu-avatar comment solids-top">
              </div>
            </div>
          </div>
        )

      return (
        <div>
          { this.cardStyle === false?  ordinary: dynamic}
        </div>
      );
    }
  }