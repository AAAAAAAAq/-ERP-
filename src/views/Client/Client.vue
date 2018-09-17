<template>
  <el-container class="client-container">
    <el-header class="client-header"> </el-header>
    <el-main class="client-main">
      <el-card class="box-card">
        <el-form label-position="left" label-width="10%" :model="clientForm" size="mini">
          <el-form-item label="编号">
            <el-input v-model="clientForm.serial" placeholder="请输入编号"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="clientForm.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="clientForm.gender" placeholder="请选择">
              <el-option label="男" value="man"></el-option>
              <el-option label="女" value="woman"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学历">
            <el-select v-model="clientForm.education" placeholder="请选择">
              <el-option v-for="(item, index) in education" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="clientForm.birthday"></el-date-picker>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-select v-model="clientForm.politicsStatus" placeholder="请选择">
              <el-option v-for="(item, index) in politicsStatus" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="婚姻状况">
            <el-select v-model="clientForm.maritalStatus" placeholder="请选择">
              <el-option v-for="(item, index) in maritalStatus" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上传图片">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-form-item>
          <el-form-item label="部门">
            <el-input v-model="clientForm.department" placeholder="搜索部门"></el-input>
          </el-form-item>
          <el-form-item label="入职时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="clientForm.entryTime"></el-date-picker>
          </el-form-item>
          <el-form-item label="合同开始时间">
            <el-date-picker
              v-model="clientForm.startTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="合同开始时间">
            <el-date-picker
              v-model="clientForm.endTime"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
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
      clientForm: {
        serial: '',
        name: '',
        gender: '',
        education: '',
        birthday: '',
        politicsStatus: '',
        maritalStatus: '',
        department: '',
        entryTime: '',
        startTime: '',
        endTime: ''
      },
      maritalStatus: [{
        value: 1,
        label: '未婚'
      }, {
        value: 2,
        label: '已婚'
      }, {
        value: 3,
        label: '离异'
      }, {
        value: 4,
        label: '保密'
      }],
      politicsStatus: [{
        value: 1,
        label: '群众'
      }, {
        value: 2,
        label: '团员'
      }, {
        value: 3,
        label: '党员'
      }, {
        value: 4,
        label: '其他'
      }],
      education: [{
        value: 1,
        label: '中专'
      }, {
        value: 2,
        label: '大专'
      }, {
        value: 3,
        label: '本科'
      }, {
        value: 4,
        label: '硕士'
      }, {
        value: 5,
        label: '博士'
      }, {
        value: 6,
        label: '其他'
      }]
    }
  }
}
</script>

<style>
  .client-header {
    background-color: #ccc;
  }
  .client-container,.client-main {
    height: 100%;
  }
  .box-card {
    height: 100%;
    padding: 2%
  }
</style>
