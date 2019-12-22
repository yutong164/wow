Page({
  data:{
input:''
  },
  modalcnt: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })  
  }  ,


    //表单提交触发此函数

  formSubmit(e) {

    //检查基础库版本

    if (!wx.cloud) {

      console.error('请使用 2.2.3 或以上的基础库以使用云能力')

    } else {

      wx.cloud.init({

        traceUser: true,

      })

    }

    //保存this变量

    var _this = this;

    //调用云函数

    wx.cloud.callFunction({

      // 云函数名称

      name: 'search',

      // 传给云函数的参数

      data: {

        content: e.detail.value.input_content,     //要更新的值为输入框里的值

        tag: 1

      },

      success: function (res) {

        console.log(res.result)

        //更新成功后清空输入框的值

        _this.setData({
          input: "",
        })
      },

      fail: console.error
    })
  },
})
  
