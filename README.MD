## 使用示例   
> 组件参数说明     

    editorDisabled: '=',//不可编辑   
    content: '=', //富文本的值        

> package.json   

```json
  /*bower.json*/
  "dependencies": {
    "rich-editor": "http://git.aerohuanyou.com:81/yangjie/rich-editor.git#1.0.0"
  }
```    

> 执行 bower install       

> html页面：   

```html
<rich-editor id="richTxt" editor-disabled="false" content="content"></rich-editor>
```

> angular controller：   

```javascript
$scope.content="<h1>吼吼~</h1>";
$scope.$broadcast('method:richEditor-set',$scope.content);
```
