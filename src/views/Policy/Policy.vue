<template>
  <el-container class="policy-container">
    <!-- 头部标题栏 -->
    <el-header class="policy-header">
      <el-row>
        <el-col :span="6">
          <div class="classify">产品分类</div>
        </el-col>
        <el-col :span="6">
          <el-button>全部</el-button>
        </el-col>
        <el-col :span="6">
          <el-autocomplete
          class="inline-input"
          v-model="policyState"
          placeholder="请输入内容"
          suffix-icon="el-icon-search">
          </el-autocomplete>
        </el-col>
        <el-col :span="6">
          <el-button @click="handleAdd">新建</el-button>
          <el-button>导入</el-button>
          <el-button>导出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <Aside :data2="data2"></Aside>
      <Table></Table>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/components/aside.vue'
import Table from '@/components/table.vue'
export default {
  data () {
    return {
      // 搜索框
      policyState: '',
      filterText: '',
      data2: [{
        id: 1,
        label: '所有分类',
        children: [{
          id: 2,
          label: '人身险',
          children: [{
            id: 3,
            label: '寿险',
            children: [{
              id: 4,
              label: '终身型',
              children: [{
                id: 5,
                label: '万能险'
              }, {
                id: 6,
                label: '寿险'
              }, {
                id: 7,
                label: '重疾险'
              }, {
                id: 8,
                label: '年金险'
              }]
            }, {
              id: 9,
              label: '定期型',
              children: [{
                id: 5,
                label: '两金险'
              }, {
                id: 6,
                label: '寿险'
              }, {
                id: 7,
                label: '重疾险'
              }, {
                id: 8,
                label: '年金险'
              }]
            }, {
              id: 9,
              label: '团体型',
              children: [{
                id: 5,
                label: '两金险'
              }, {
                id: 6,
                label: '寿险'
              }, {
                id: 7,
                label: '重疾险'
              }, {
                id: 8,
                label: '年金险'
              }]
            }]
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleAdd: function () {
      this.$router.push({
        name: 'policy-add'
      })
    }
  },
  components: {
    Aside,
    Table
  }
}
</script>

<style>
  .policy-container {
    background-color: #fff;
    height: 100%;
  }
  .policy-header {
    border: #ccc 1px solid;
    line-height: 60px;
  }
</style>
