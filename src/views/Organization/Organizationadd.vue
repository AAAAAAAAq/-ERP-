<template>
  <el-container class="organizationadd-container">
    <el-header class="organizationadd-header">
      <el-row>
        <el-col :span="18">
          <div class="classify">机构信息</div>
        </el-col>
        <el-col :span="6">
          <el-button type="success">保存</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="organizationadd-main">
      <el-card class="box-card">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
          <el-form-item label="公司名称">
            <el-input v-model="formLabelAlign.companyName" placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item label="联系人姓名">
            <el-input v-model="formLabelAlign.linkmanName" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="formLabelAlign.linkmanPhone" placeholder="请输入联系电话"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="formLabelAlign.remark" placeholder="请输入备注"></el-input>
          </el-form-item>
          <el-form-item label="上传附件">
            <el-button size="small" type="success">上传附件</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        companyName: '',
        linkmanName: '',
        linkmanPhone: '',
        remark: ''
      }
    }
  }
}
</script>

<style>
.organizationadd-container {
    background-color: #fff;
    height: 100%;
  }
  .organizationadd-header {
    border: #ccc 1px solid;
    line-height: 60px;
  }
  .organizationadd-main {
    padding: 0%!important;
  }
</style>
