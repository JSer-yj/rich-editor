## 使用示例   
> 组件参数说明     

    editorDisabled: '=',//不可编辑   
    content: '=', //富文本的值        

> package.json/bower.json   

```json
{
  "dependencies": {
    "rich-editor": "JSer-yj/rich-editor"
  }
}
```    

> 执行 npm/bower install       

> html页面：   

```html
<rich-editor id="richTxt" editor-disabled="false" content="content"></rich-editor>
```


> 依赖注入   
```javascript
angular.module('mydemo',['rich.editor']);  
```

> angular controller： 

```javascript
//设置
$scope.content="<h1>吼吼~</h1>";
$scope.$broadcast('message:richEditor-set',$scope.content);
//接收
$scope.$on("message:richEditor-get", function(e, txt) {
  $scope.content=txt;
});
```
