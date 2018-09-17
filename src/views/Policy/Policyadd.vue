<template>
  <el-container class="policyadd-container">
    <el-header class="policyadd-header">
      <el-row>
        <el-col :span="18">
          <div class="classify">保单信息</div>
        </el-col>
        <el-col :span="6">
          <el-button type="success">保存</el-button>
        </el-col>
      </el-row>
    </el-header>
  <el-main class="policyadd-mian">
    <el-tabs v-model="activeName" class="policyadd-tabs">
      <el-tab-pane label="保单信息" name="first">
        <!-- <el-card class="policy-card"> -->
          <el-form label-position="left" label-width="80px" :model="formLabelAlign" size="mini">
            <el-form-item label="投保单号">
              <el-input v-model="formLabelAlign.insuranceSlip" placeholder="请输入投保单号"></el-input>
            </el-form-item>
            <el-form-item label="保单号码">
              <el-input v-model="formLabelAlign.insuranceNum" placeholder="请输入保单号码"></el-input>
            </el-form-item>
            <el-form-item label="保险公司">
              <el-select v-model="formLabelAlign.company" placeholder="请选择">
                <el-option label="寿康人寿河北分公司" value="hebei"></el-option>
                <el-option label="平安保险天津分公司" value="beijing"></el-option>
                <el-option label="平安保险山东分公司" value="shandong"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品">
              <el-select v-model="formLabelAlign.product" placeholder="请选择">
                <el-option label="平安少儿保障计划" value="enterprise"></el-option>
                <el-option label="寿康人寿白领精英寿险" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="险种分类">
              <el-select v-model="formLabelAlign.classify" placeholder="请选择活动区域">
                <el-option label="企财险" value="shanghai"></el-option>
                <el-option label="家财险" value="beijing"></el-option>
                <el-option label="工程险" value="gongcheng"></el-option>
                <el-option label="责任险" value="zren"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="投保人">
              <el-input v-model="formLabelAlign.applicant" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="formLabelAlign.gender" placeholder="请选择">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="出生日期">
              <el-input v-model="formLabelAlign.birthday"></el-input>
            </el-form-item>
            <el-form-item label="职业">
              <el-input v-model="formLabelAlign.occupation" placeholder="请输入职业"></el-input>
            </el-form-item>
            <el-form-item label="证件类型">
              <el-select v-model="formLabelAlign.type" placeholder="请选择">
                <el-option label="身份证" value="shenfen"></el-option>
                <el-option label="军官证" value="junguan"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件号码">
              <el-input v-model="formLabelAlign.idNumber" placeholder="请输入证件号码"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="formLabelAlign.phone" placeholder="请输入电话"></el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="formLabelAlign.address" placeholder="请输入地址"></el-input>
            </el-form-item>
            <el-form-item label="被保险人">
              <el-select v-model="formLabelAlign.insured" placeholder="请选择">
                <el-option label="同投保人" value="tong"></el-option>
                <el-option label="他人" value="other"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="附件上传">
              <el-button>上传</el-button>
            </el-form-item>
            <el-form-item label="保额">
              <el-input v-model="formLabelAlign.limit" placeholder="请输入保额"></el-input>
            </el-form-item>
            <el-form-item label="主险保费">
              <el-input v-model="formLabelAlign.premium" placeholder="请输入主险保费"></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="8">
                <el-form-item label="跟单比例">
                  <el-input v-model="formLabelAlign.proportion" placeholder="请输入跟单比例"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3"><div></div></el-col>
              <el-col :span="8">
                <el-form-item label="跟单手续费" label-width="100px">
                  <el-input v-model="formLabelAlign.charge" placeholder="请输入跟单比例"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="业务员">
              <el-input v-model="formLabelAlign.salesman" placeholder="请输入业务员"></el-input>
            </el-form-item>
            <el-form-item label="投保时间">
              <el-input v-model="formLabelAlign.protectingTime"></el-input>
            </el-form-item>
            <el-form-item label="起保时间">
              <el-input v-model="formLabelAlign.startingTime"></el-input>
            </el-form-item>
            <el-form-item label="终止时间">
              <el-input v-model="formLabelAlign.terminalTime"></el-input>
            </el-form-item>
            <el-form-item label="回执日">
              <el-input v-model="formLabelAlign.receipt"></el-input>
            </el-form-item>
          </el-form>
        <!-- </el-card> -->
      </el-tab-pane>
      <el-tab-pane label="受益人信息" name="second">
        <el-form label-position="left" label-width="100px" :model="formLabelAlign" size="mini">
          <el-form-item label="受益人姓名">
            <el-input v-model="formLabelAlign.favoreeName" placeholder="请输入受益人姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别">
              <el-select v-model="formLabelAlign.favoreeGender" placeholder="请选择">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="formLabelAlign.contactWay" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item label="证件类型">
              <el-select v-model="formLabelAlign.favoreeType" placeholder="请选择">
                <el-option label="男" value="shanghai"></el-option>
                <el-option label="女" value="zren"></el-option>
              </el-select>
            </el-form-item>
          <el-form-item label="证件号码">
            <el-input v-model="formLabelAlign.favoreeIdnum" placeholder="请输入证件号码"></el-input>
          </el-form-item>
          <el-form-item label="与投保人关系">
              <el-select v-model="formLabelAlign.relation" placeholder="请选择">
                <el-option label="父母" value="parent"></el-option>
                <el-option label="子女" value="children"></el-option>
                <el-option label="配偶" value="mate"></el-option>
                <el-option label="亲属" value="relatives"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="受益顺序">
            <el-input v-model="formLabelAlign.order" placeholder="请输入受益顺序"></el-input>
          </el-form-item>
          <el-form-item label="受益比例">
            <el-input v-model="formLabelAlign.ratio" placeholder="请输入受益比列(1-100%)"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="服务记录" name="third">服务记录</el-tab-pane>
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
        insuranceSlip: '',
        insuranceNum: '',
        company: '',
        product: '',
        classify: '',
        applicant: '',
        gender: '',
        birthday: '',
        occupation: '',
        type: '',
        idNumber: '',
        phone: '',
        address: '',
        insured: '',
        limit: '',
        premium: '',
        proportion: '',
        charge: '',
        salesman: '',
        protectingTime: '',
        startingTime: '',
        terminalTime: '',
        receipt: '',
        favoreeName: '',
        contactWay: '',
        favoreeType: '',
        favoreeIdnum: '',
        relation: '',
        order: '',
        ratio: ''
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
