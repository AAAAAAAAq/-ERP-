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
          v-model="PorductState"
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
      <!-- <el-aside width="200px" class="policy-aside">
        <el-tree
          class="filter-tree"
          :data="data2"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree2">
        </el-tree>
      </el-aside> -->
      <Aside :data2="data2"></Aside>
      <Table></Table>
      <!-- <el-main class="policy-main">
        <el-card class="policy-card">
          <el-table
          :data="tableData"
          style="width: 100%">
            <el-table-column
              type="index"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="date"
              label="产品名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="产品类型">
            </el-table-column>
            <el-table-column
              prop="address"
              label="险种类型">
            </el-table-column>
            <el-table-column
              prop="address"
              label="交费方式">
            </el-table-column>
            <el-table-column
              prop="address"
              label="保险公司">
            </el-table-column>
            <el-table-column
              prop="address"
              label="交费年期">
            </el-table-column>
            <el-table-column
              prop="address"
              label="备注">
            </el-table-column>
            <el-table-column
              prop="address"
              label="投保时间">
            </el-table-column>
          </el-table>
        </el-card>
      </el-main> -->
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/components/aside.vue'
import Table from '@/components/table.vue'
export default {
  data () {
    return {
      PorductState: '',
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
  .policy-aside {
    border: 1px #ccc solid;
    border-top: none
  }
</style>
