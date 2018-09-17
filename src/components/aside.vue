<template>
  <div style="height: 100%">
    <el-aside width="200px" class="common-aside">
        <el-tree
          class="filter-tree"
          :data="data2"
          :props="defaultProps"
          default-expand-all
          ref="tree2">
        </el-tree>
    </el-aside>
  </div>
</template>

<script>
export default {
  props: {
    data2: Array,
    required: true
  },
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style>
.common-aside {
  height: 100%;
  border: 1px #ccc solid;
  border-top: none
}
</style>
