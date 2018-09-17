<template>
  <el-container class="organizationadd-container">
    <el-header class="organizationadd-header">
      <el-row>
        <el-col :span="18">
          <div class="classify">产品信息</div>
        </el-col>
        <el-col :span="6">
          <el-button type="success">保存</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="organizationadd-main">
      <el-card class="box-card">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size="mini">
          <el-form-item label="保险公司">
            <el-input v-model="formLabelAlign.insuranceCompany " placeholder="请输入保险公司"></el-input>
          </el-form-item>
          <el-form-item label="产品名称">
            <el-input v-model="formLabelAlign.productName" placeholder="请输入产品名称"></el-input>
          </el-form-item>
          <el-form-item label="险种类型">
            <el-input v-model="formLabelAlign.plantType" placeholder="请输入险种类型"></el-input>
          </el-form-item>
          <el-form-item label="主附险">
              <el-select v-model="formLabelAlign.mainRisks" placeholder="请选择">
                <el-option label="主险" value="shanghai"></el-option>
                <el-option label="附加险" value="zren"></el-option>
              </el-select>
          </el-form-item>
          <el-row :gutter="20">
            <el-form-item label="保险期间">
              <el-col :span="4">
                <el-select v-model="formLabelAlign.region" placeholder="至">
                  <el-option label="主险" value="shanghai"></el-option>
                  <el-option label="附加险" value="zren"></el-option>
                </el-select>
              </el-col>
              <el-col :span="2">
                <el-input v-model="formLabelAlign.region" placeholder="条件"></el-input>
              </el-col>
              <el-col :span="4">
                <span>岁</span>
              </el-col>
            </el-form-item>
          </el-row>
          <el-form-item label="交费方式">
              <el-select v-model="formLabelAlign.payType" placeholder="请选择">
                <el-option label="年" value="shanghai"></el-option>
                <el-option label="月" value="zren"></el-option>
                <el-option label="日" value="zren"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="交费年期">
            <el-row :gutter="20">
              <el-col :span="4">
                <el-select v-model="formLabelAlign.payPeriod" placeholder="请选择">
                  <el-option label="至" value="shanghai"></el-option>
                  <el-option label="交" value="zren"></el-option>
                </el-select>
              </el-col>
              <el-col :span="2">
                <el-input v-model="formLabelAlign.condition" placeholder="条件"></el-input>
              </el-col>
              <el-col :span="4">
                <span>岁</span>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="formLabelAlign.comment" placeholder="请输入备注"></el-input>
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
        insuranceCompany: '',
        productName: '',
        plantType: '',
        mainRisks: '',
        payType: '',
        payPeriod: '',
        condition: '',
        comment: ''
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
