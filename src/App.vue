<template>
  <div id="app">
    <NavBar :title="routeInfo.meta.title" :left-arrow="isBack" @left-click="back"/>
    <router-view/>
    <Tabbar v-if="show" v-model="active" fixed :activeColor="'text-green'" :bgColor="'bg-black'">
      <TabbarItem icon="icon-homefill" to="/">介绍</TabbarItem>
      <TabbarItem icon="icon-similar" to="/demo">Demo</TabbarItem>
      <TabbarItem icon="icon-profile" to="/about">关于</TabbarItem>
    </Tabbar>

        <!-- <div class="js_dialog" id="iosDialog1" style="opacity: 1; display: block;">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>
                <div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn text-red">辅助操作</a>
                    <a href="javascript:;" class="weui-dialog__btn text-red">主操作</a>
                </div>
            </div>
        </div> -->
    <!-- <Dialog
      v-model="shows"
      title="标题"
      show-cancel-button
    >
    123123
    </Dialog> -->
  </div>
</template>
<script>
import { setInterval } from 'timers';
const tabbarRoute = ['/', '/demo', '/about'];
export default {
  data() {
    return {
      active: 0,
      show: true,
      shows: true,
      isBack: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  watch: {
    $route(val) {
      const path = val.path;
      const active = tabbarRoute.indexOf(path);
      if(active < 0){
        this.isBack = true;
        this.show = false;
        return;
      }
      this.isBack = false;
      this.active = active;
      this.show = true;
    }
  },
  computed: {
    routeInfo() {
      return this.$store.state.routeInfo;
    },
  },
  created() {
  },
  methods: {
    back() {
      window.history.back(-1);
    },
    open() {
      this.shows = true;
    },
    closess() {
      this.shows = false;
    },
  }
}
</script>
<style lang="less">
body{
  background: #f1f1f1;
}
#app{
  margin-bottom: 80px;
}
@import 'assets/app.css';
.swipe-item {
  float: left;
  height: 100%;
}
.swipe {
  overflow: hidden;
  position: relative;
  user-select: none;
  &__track {
    height: 100%;
  }
  &__indicators {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    &--vertical {
      left: 10px;
      top: 50%;
      bottom: auto;
      flex-direction: column;
      transform: translateY(-50%);
      .swipe__indicator:not(:last-child) {
        margin-bottom: 6px;
      }
    }
  }
  &__indicator {
    opacity: .3;
    border-radius: 100%;
    width: 6px;
    height: 6px;
    transition: opacity .2s;
    background-color: #ebedf0;
    &:not(:last-child) {
      margin-right: 6px;
    }
    &.active {
      opacity: 1;
      background-color: #1989fa;
    }
  }
}


@black: #000;
@white: #fff;
@red: #f44;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;
@gray: #c8c9cc;
@gray-light: #e5e5e5;
@gray-darker: #7d7e80;
@gray-dark: #969799;

// Default colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f8f8f8;
@background-color-light: #fafafa;

// ActionSheet
@action-sheet-max-height: 90%;
@action-sheet-header-height: 44px;
@action-sheet-header-font-size: 16px;
@action-sheet-item-height: 50px;
@action-sheet-item-background: @white;
@action-sheet-item-font-size: 16px;
@action-sheet-item-text-color: @text-color;
@action-sheet-subname-color: @gray-darker;
@action-sheet-subname-font-size: 12px;
@action-sheet-close-icon-size: 18px;
@action-sheet-close-icon-color: @gray-dark;

// Button
@button-default-color: @text-color;
@button-default-background-color: @white;
@button-default-border-color: @border-color;
@button-primary-color: @white;
@button-primary-background-color: @green;
@button-primary-border-color: @green;
@button-info-color: @white;
@button-info-background-color: @blue;
@button-info-border-color: @blue;
@button-danger-color: @white;
@button-danger-background-color: @red;
@button-danger-border-color: @red;
@button-warning-color: @white;
@button-warning-background-color: @orange;
@button-warning-border-color: @orange;
@button-bottom-action-default-color: @white;
@button-bottom-action-default-background-color: @orange;
@button-bottom-action-primary-color: @white;
@button-bottom-action-primary-background-color: @red;
@button-border-radius: 2px;
@button-round-border-radius: 10em;

// Checkbox
@checkbox-size: 20px;
@checkbox-border-color: @gray-light;
@checkbox-transition-duration: .2s;
@checkbox-label-margin: 10px;
@checkbox-label-color: @text-color;
@checkbox-checked-icon-color: @blue;
@checkbox-disabled-icon-color: @gray;
@checkbox-disabled-label-color: @gray;
@checkbox-disabled-background-color: @border-color;

// Collapse
@collapse-item-transition-duration: .3s;
@collapse-item-content-padding: 15px;
@collapse-item-content-font-size: 13px;
@collapse-item-content-line-height: 1.5;
@collapse-item-content-text-color: @gray-dark;
@collapse-item-content-background-color: @white;
@collapse-item-title-disabled-color: @gray;

// Info
@info-size: 16px;
@info-color: @white;
@info-padding: 0 3px;
@info-font-size: 12px;
@info-font-weight: 500;
@info-border-width: 1px;
@info-background-color: @red;
@info-font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;

// List
@list-icon-size: 16px;
@list-icon-margin-right: 5px;
@list-text-color: @gray-dark;
@list-text-font-size: 13px;
@list-text-line-height: 50px;

// NavBar
@nav-bar-height: 46px;
@nav-bar-background-color: @white;
@nav-bar-arrow-size: 16px;
@nav-bar-icon-color: @blue;
@nav-bar-text-color: @blue;
@nav-bar-title-font-size: 16px;
@nav-bar-title-text-color: @text-color;

// Notify
@notify-padding: 6px 15px;
@notify-font-size: 14px;
@notify-line-height: 20px;

// NumberKeyboard
@number-keyboard-key-height: 54px;
@number-keyboard-key-background: #ebedf0;

// Overlay
@overlay-background-color: rgba(0, 0, 0, 0.7);

// Radio
@radio-size: 20px;
@radio-border-color: @gray-light;
@radio-transition-duration: .2s;
@radio-label-margin: 10px;
@radio-label-color: @text-color;
@radio-checked-icon-color: @blue;
@radio-disabled-icon-color: @gray;
@radio-disabled-label-color: @gray;
@radio-disabled-background-color: @border-color;

// Swipe
@swipe-indicator: 6px;

// Switch
@switch-width: 2em;
@switch-height: 1em;
@switch-node-size: 1em;
@switch-node-z-index: 1;
@switch-node-background-color: @white;
@switch-node-box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05);
@switch-background-color: @white;
@switch-on-background-color: @blue;
@switch-transition-duration: .3s;
@switch-disabled-opacity: .4;
@switch-border: 1px solid rgba(0, 0, 0, .1);

// SwitchCell
@switch-cell-padding-top: 9px;
@switch-cell-padding-bottom: 9px;

// Tab
@tabs-line-height: 44px;
@tabs-card-height: 30px;

// Toast
@toast-max-width: 70%;
@toast-font-size: 14px;
@toast-text-color: @white;
@toast-line-height: 20px;
@toast-border-radius: 4px;
@toast-background-color: rgba(@text-color, .88);
@toast-icon-size: 48px;
@toast-text-min-width: 96px;
@toast-text-padding: 8px 12px;
@toast-default-padding: 15px;
@toast-default-width: 90px;
@toast-default-min-height: 90px;
@toast-position-top-distance: 50px;
@toast-position-bottom-distance: 50px;

// Search
@search-background-color: #f7f8fA;

// Stepper
@stepper-active-color: #e8e8e8;
@stepper-background-color: @active-color;
@stepper-button-disabled-color: #f7f8fa;
@stepper-input-disabled-color: @active-color;
@stepper-border-radius: 4px;
.switch {
  display: inline-block;
  position: relative;
  width: @switch-width;
  height: @switch-height;
  border: @switch-border;
  border-radius: @switch-node-size;
  box-sizing: content-box;
  background-color: @switch-background-color;
  transition: background-color @switch-transition-duration;

  &__node {
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 100%;
    width: @switch-node-size;
    height: @switch-node-size;
    z-index: @switch-node-z-index;
    transition: @switch-transition-duration;
    box-shadow: @switch-node-box-shadow;
    background-color: @switch-node-background-color;
  }
  &--on {
    background-color: @switch-on-background-color;
    .switch__node {
      transform: translateX(@switch-width - @switch-node-size);
    }
  }
  &--disabled {
    opacity: @switch-disabled-opacity;
  }
}

.van-picker {
  overflow: hidden;
  user-select: none;
  position: relative;
  background-color:#f8f8f8;
  -webkit-text-size-adjust: 100%; /* avoid iOS text size adjust */

  &__toolbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: space-between;
  }

  &__cancel,
  &__confirm {
    color: @blue;
    padding: 0 15px;
    font-size: 14px;

    &:active {
      background-color: @active-color;
    }
  }

  &__title {
    max-width: 50%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  &__columns {
    display: flex;
    position: relative;
  }

  &__loading {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    position: absolute;
    background-color: rgba(255, 255, 255, .9);

    circle {
      stroke: @blue;
    }
  }

  &__loading .van-loading,
  &__frame {
    top: 50%;
    left: 0;
    width: 100%;
    z-index: 1;
    position: absolute;
    pointer-events: none;
    transform: translateY(-50%);
  }

  &-column {
    flex: 1;
    overflow: hidden;
    font-size: 16px;
    text-align: center;

    &__item {
      padding: 0 5px;
      color: @gray-dark;

      &--selected {
        font-weight: 500;
        color: @text-color;
      }

      &--disabled {
        opacity: .3;
      }
    }
  }
}
.white{
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
