'use strict';
(function() {
  var app = angular.module('rich.editor',[]);
  app.directive('richEditor', function($window, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        editorDisabled: '=',//不可编辑
        content: '=' //富文本的值
      },
      template: '<div class="richEditor wh540" style=""><div ng-show="editorDisabled" class="disabled"></div><div id="{{EID}}"></div></div>',
      link: function(scope) {
        scope.EID = 'editor' + (new Date()).getTime(); //生成随机数id
        var E = window.wangEditor;
        var editor = '';
        function init() {
          editor = new E(document.getElementById(scope.EID));
          // 自定义菜单配置
          editor.customConfig.menus = [
            'head', // 标题
            'bold', // 粗体
            'italic', // 斜体
            'underline', // 下划线
            'strikeThrough', // 删除线
            'foreColor', // 文字颜色
            'backColor', // 背景颜色
            'justify', // 对齐方式
            'image' // 插入图片
          ];

          editor.customConfig.uploadImgShowBase64 = true;

          /*插入网络图片的校验*/
          editor.customConfig.linkImgCheck = function(src) {
            // console.log(src) // 图片的链接
            return true // 返回 true 表示校验成功
            // return '验证失败' // 返回字符串，即校验失败的提示信息
          }
          editor.customConfig.onchange = function(html) {
            scope.content = html; // html 即变化之后的内容
          };
          editor.create();
          if (scope.content) {
            editor.txt.html(scope.content)
          }

          // 关闭编辑功能
          if (scope.editorDisabled) {
            editor.$textElem.attr('contenteditable', false);
          }

        }
        var receive = scope.$on("method:richEditor-set", function(e, txt) {
          editor.txt.html(txt);
        });
        var disable = scope.$watch("editorDisabled", function(n, o) {
          if (n != o) editor.$textElem.attr('contenteditable', !scope.editorDisabled);
        });
        scope.$on('$destroy', function() { //controller回收资源时执行
          receive();
          disable();
        });
        /*初始化*/
        $timeout(function() {
          init();
        });

      }
    };
  });
})();
