<template>
        <el-main class="public-main">
        <el-card class="public-card">
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
      </el-main>
</template>

<script>
export default {
  props: {
    tableData: Object
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
