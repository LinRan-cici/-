// 存放了跟todo相关的业务逻辑的代码
// 刚学完jquery. 为了练习. 就通过这个案例,利用jquery对页面的元素进行增删改查

//点击todo-header input输入框，输入信息后按回车键把输入的信息添加到内容中
//1.获取todo-header input，注册键盘抬起事件
$(".todo-header input").on("keyup", function (e) {
  //2.在事件函数中判断是否按下的是回车键
  if (e.keyCode === 13) {
    var value = $(this).val().trim();

    if (!value) return;

    str =
      '<li><label><input type="checkbox" /><span>' +
      value +
      '</span></label><button class="btn btn-danger">删除</button></li>';
    //3.获取信息添加到todo-main
    $(".todo-main").append(str);
    //清空todo-header input
    $(this).val("");
    showDetail()
  }
});

//2.单选框都选中，多选框也选中
$(".todo-main").on("click", "li>label>input", function () {
  //点击改变复选框的样式
  console.log(11);
  $(this).next().toggleClass("isDone");
  //选中复选框的个数

  allChecked();
  showDetail()
});

//3.点击多选按钮，改变复选框的状态
$(".todo-footer input").on("click", function () {
  $(".todo-main  li input").prop("checked", $(this).prop("checked"));

  $(this).prop("checked")
    ? $(".todo-main  li span").addClass("isDone")
    : $(".todo-main  li span").removeClass("isDone");
    showDetail()
});

//4.点击删除按钮 删除选中的信息
$(".todo-main button").on("click", function () {
  $(this).parent().remove();

  allChecked();
  showDetail()
});

//5.点击清除已完成任务，删除选中的信息
$(".todo-footer button").on("click", function () {
  $(".todo-main  li input:checked").parent().parent().remove();

  allChecked();
  showDetail()
 
});

function allChecked() {
  var totalChecked = $(".todo-main  li input:checked").length;
  var total = $(".todo-main  li input").length;
  //给全选设置
  if (totalChecked === 0 || total === 0) {
    $(".todo-footer input").prop("checked", false);
    return;
  }
  $(".todo-footer input").prop("checked", totalChecked === total);
}

function showDetail(){
  var totalChecked = $(".todo-main  li input:checked").length;
  var total = $(".todo-main  li input").length;
console.log(totalChecked )
  $("#done").text("已完成" + totalChecked);
  $("#total").text("全部" + total);
}