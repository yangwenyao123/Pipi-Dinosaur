<template>
  <div id="app">
    <Dialog
      v-model="shows"
      title="标题"
      show-cancel-button
    >
    123123
    </Dialog>
  </div>
</template>
<script>
export default {
    data() {
        return {
            shows: true,
        }
    },
}
</script>


