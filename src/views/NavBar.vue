<template>
  <div class="navbar">
    <NavBar title="首页" left-arrow  rightText="12312" @left-click="back" @right-click="menu">
        <div slot="right">
            <Icon icon="icon-cascades" color="text-white" />
        </div>
    </NavBar>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      alert(22);
    },
    menu() {
      alert(11);
    }
  }
}
</script>


