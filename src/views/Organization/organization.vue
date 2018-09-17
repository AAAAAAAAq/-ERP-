<template>
  <el-container class="policy-container">
    <!-- 头部标题栏 -->
    <el-header class="policy-header">
      <el-row>
        <el-col :span="8">
          <div class="classify">保险机构</div>
        </el-col>
        <el-col :span="12">
          <el-button>全部</el-button>
        </el-col>
        <el-col :span="4">
          <el-autocomplete
          class="inline-input"
          v-model="organizationState"
          placeholder="请输入内容"
          suffix-icon="el-icon-search">
          </el-autocomplete>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <Aside :data2="data2"></Aside>
      <el-main class="policy-main">
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
              label="名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="联系人">
            </el-table-column>
            <el-table-column
              prop="address"
              label="联系电话">
            </el-table-column>
            <el-table-column
              prop="address"
              label="交费方式">
            </el-table-column>
          </el-table>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '@/components/aside.vue'
export default {
  data () {
    return {
      organizationState: '',
      filterText: '',
      data2: [{
        id: 1,
        label: '所有机构',
        children: [{
          id: 2,
          label: '寿康人寿',
          children: [{
            id: 3,
            label: '寿康人寿河北分公司'
          }]
        }, {
          id: 3,
          label: '平安保险',
          children: [{
            id: 3,
            label: '平安保险天津分公司'
          }, {
            id: 4,
            label: '平安保险山东分公司'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: []
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
    Aside
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
