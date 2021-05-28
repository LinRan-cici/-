console.log("fenxiancheng");
//onmessage事件 是监听其他线程传输数据 如果一旦有传输数则事件触发
//this代表当前的线程
this.onmessage =function(e){ 
    //在event事件中，有一个data属性 保存的是触发事件的数据
    console.log(e);
    var sum = 0;
  for (var i = 0;i < e.data; i++){
    sum += Math.sqrt(i);
  }
     //当线程执行结果完成，可以需要给主线程返回数据，直接使用postMessage即可
     postMessage(sum);

      //在分线程关闭关闭自身使用close方法
       close();

  
}

