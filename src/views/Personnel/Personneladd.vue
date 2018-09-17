<template>
  <el-container class="policyadd-container">
    <el-header class="policyadd-header">
      <el-row>
        <el-col :span="18">
          <div class="classify">人员信息</div>
        </el-col>
        <el-col :span="6">
          <el-button type="success">保存</el-button>
        </el-col>
      </el-row>
    </el-header>
  <el-main class="policyadd-mian">
    <el-tabs v-model="activeName" class="policyadd-tabs">
      <el-tab-pane label="基本信息" name="first">
        <!-- <el-card class="policy-card"> -->
          <el-form label-position="left" label-width="150px" :model="formLabelAlign" size="mini">
            <el-form-item label="工号">
              <el-input v-model="formLabelAlign.jobNumber" placeholder="请输入工号（自动生成）"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="formLabelAlign.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="formLabelAlign.gender" placeholder="请选择">
                <el-option label="男" value="shanghai"></el-option>
                <el-option label="女" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="学历">
              <el-select v-model="formLabelAlign.diplomas" placeholder="请选择">
                <el-option label="中专" value="shanghai"></el-option>
                <el-option label="大专" value="shanghai"></el-option>
                <el-option label="本科" value="shanghai"></el-option>
                <el-option label="硕士" value="beijing"></el-option>
                <el-option label="博士" value="beijing"></el-option>
                <el-option label="其他" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-input v-model="formLabelAlign.birthday"></el-input>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-select v-model="formLabelAlign.politicStatus " placeholder="请选择">
                <el-option label="群众" value="shanghai"></el-option>
                <el-option label="团员" value="zren"></el-option>
                <el-option label="党员" value="zren"></el-option>
                <el-option label="其他" value="zren"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="婚姻状况">
              <el-select v-model="formLabelAlign.maritalStatus" placeholder="请选择">
                <el-option label="未婚" value="shanghai"></el-option>
                <el-option label="已婚" value="zren"></el-option>
                <el-option label="离异" value="zren"></el-option>
                <el-option label="其他" value="zren"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="照片">
              <el-button>上传图片</el-button>
            </el-form-item>
            <el-form-item label="部门">
              <el-input v-model="formLabelAlign.department" placeholder="搜索部门"></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="8">
                <el-form-item label="岗位/职级">
                  <el-select v-model="formLabelAlign.station" placeholder="请选择">
                    <el-option label="内勤" value="shanghai"></el-option>
                    <el-option label="外勤" value="zren"></el-option>
                 </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="3"><div></div></el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-select v-model="formLabelAlign.rank" placeholder="请选择">
                    <el-option label="内勤" value="shanghai"></el-option>
                    <el-option label="外勤" value="zren"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="状态">
              <el-select v-model="formLabelAlign.state" placeholder="请选择">
                <el-option label="实习" value="shanghai"></el-option>
                <el-option label="在职" value="zren"></el-option>
                <el-option label="离职" value="zren"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="入职时间">
              <el-input v-model="formLabelAlign.hiredate" placeholder="请输入业务员"></el-input>
            </el-form-item>
            <el-form-item label="合同开始时间">
              <el-input v-model="formLabelAlign.startTime "></el-input>
            </el-form-item>
            <el-form-item label="合同结束时间">
              <el-input v-model="formLabelAlign.endTime"></el-input>
            </el-form-item>
          </el-form>
        <!-- </el-card> -->
      </el-tab-pane>
      <el-tab-pane label="详细信息" name="second">
        <el-form label-position="left" label-width="100px" :model="formLabelAlign" size="mini">
          <el-form-item label="民族">
            <el-input v-model="formLabelAlign.nation" placeholder="请输入民族"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="formLabelAlign.idCardNum" placeholder="请输入身份证号码"></el-input>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input v-model="formLabelAlign.nativePlace" placeholder="请输入籍贯"></el-input>
          </el-form-item>
          <el-form-item label="毕业院校">
            <el-input v-model="formLabelAlign.school" placeholder="请输入毕业院校"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="formLabelAlign.specialty" placeholder="请输入专业"></el-input>
          </el-form-item>
          <el-form-item label="职业证号">
            <el-input v-model="formLabelAlign.certificateNum" placeholder="请输入已有职称"></el-input>
          </el-form-item>
          <el-form-item label="家庭住址">
            <el-input v-model="formLabelAlign.address" placeholder="请输入家庭住址"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model="formLabelAlign.email" placeholder="请输入电子邮箱"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="其他信息" name="third">
        <el-form label-position="left" label-width="100px" :model="formLabelAlign" size="mini">
          <el-form-item label="紧急联系人">
            <el-input v-model="formLabelAlign.emergencyContact" placeholder="请输入紧急联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系人电话">
            <el-input v-model="formLabelAlign.emergencyPhone" placeholder="请输入紧急联系人电话"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系人地址">
            <el-input v-model="formLabelAlign.emergencyAddress" placeholder="请输入紧急联系人地址"></el-input>
          </el-form-item>
          <el-form-item label="毕业院校">
            <el-input v-model="formLabelAlign.graduateInstitutions" placeholder="请输入毕业院校"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="formLabelAlign.remark" placeholder="请输入备注"></el-input>
          </el-form-item>
          <el-form-item label="上传附件">
            <el-button>上传附件</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-main>
</el-container>

</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      formLabelAlign: {
        jobNumber: '',
        name: '',
        gender: '',
        diplomas: '',
        birthday: '',
        politicStatus: '',
        maritalStatus: '',
        department: '',
        station: '',
        rank: '',
        state: '',
        hiredate: '',
        startTime: '',
        endTime: '',
        nation: '',
        idCardNum: '',
        nativePlace: '',
        school: '',
        specialty: '',
        certificateNum: '',
        address: '',
        email: '',
        emergencyContact: '',
        emergencyPhone: '',
        emergencyAddress: '',
        graduateInstitutions: '',
        remark: ''
      }
    }
  }
}
</script>

<style>
.policyadd-container {
    background-color: #fff;
    height: 100%;
  }
  .policyadd-header {
    border: #ccc 1px solid;
    line-height: 60px;
  }
  /* .policyadd-mian {
    padding: 0%!important
  } */
  .policyadd-tabs {
    height: 100%;
    padding: 10px!important
  }
  .policy-card {
    height: 100%;
  }
</style>
