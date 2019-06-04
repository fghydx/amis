define('docs/renderers/Form/Combo.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"combo\" href=\"#combo\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Combo</h2><p>组合模式，支持自由组合多个表单项。</p>\n<ul>\n<li><code>type</code> 请设置成 <code>combo</code></li>\n<li><code>multiple</code> 默认为 <code>false</code> 配置是否为多选模式</li>\n<li><code>controls</code> 配置组合成员，所有成员都是横向展示，可以是任意 <a href=\"#/docs/renderers/Form/FormItem\">FormItem</a></li>\n<li><code>controls[x].columnClassName</code> 列的类名，可以用它配置列宽度。默认平均分配。</li>\n<li><code>controls[x].unique</code> 设置当前列值是否唯一，即不允许重复选择。</li>\n<li><code>maxLength</code> 当 multiple 为 true 的时候启用，设置可以最大项数。</li>\n<li><code>flat</code> 默认为 <code>false</code>, 是否将结果扁平化(去掉 name),只有当 controls 的 length 为 1 且 multiple 为 true 的时候才有效。</li>\n<li><code>joinValues</code> 默认为 <code>true</code> 当扁平化开启的时候，是否用分隔符的形式发送给后端，否则采用 array 的方式。</li>\n<li><code>delimiter</code> 当扁平化开启并且 joinValues 为 true 时，用什么分隔符。</li>\n<li><code>multiLine</code> 默认是横着展示一排，设置以后竖着展示</li>\n<li><code>addable</code> 是否可新增。</li>\n<li><code>removable</code> 是否可删除</li>\n<li><code>deleteApi</code> 如果配置了，则删除前会发送一个 api，请求成功才完成删除！</li>\n<li><code>deleteConfirmText</code> 默认为 <code>确认要删除？</code>，当配置 <code>deleteApi</code> 才生效！删除时用来做用户确认！</li>\n<li><code>draggable</code> 默认为 <code>false</code>, 是否可以拖动排序, 需要注意的是当启用拖动排序的时候，会多一个\\$id 字段</li>\n<li><code>draggableTip</code> 可拖拽的提示文字，默认为：<code>&quot;可通过拖动每行中的【交换】按钮进行顺序调整&quot;</code></li>\n<li><code>addButtonText</code> 新增按钮文字，默认为 <code>&quot;新增&quot;</code>。</li>\n<li><code>minLength</code> 限制最小长度。</li>\n<li><code>maxLength</code> 限制最大长度。</li>\n<li><code>scaffold</code> 单条初始值。默认为 <code>{}</code>。</li>\n<li><code>canAccessSuperData</code> 指定是否可以自动获取上层的数据并映射到表单项上，默认是<code>true</code>。</li>\n<li>更多配置请参考 <a href=\"#/docs/renderers/Form/FormItem\">FormItem</a></li>\n</ul>\n<div class=\"amis-preview\" style=\"height: 650px\"><script type=\"text/schema\" height=\"650\" scope=\"form\">[\n{\n  \"type\": \"combo\",\n  \"name\": \"combo\",\n  \"label\": \"单选组合项\",\n  \"controls\": [\n    {\n      \"name\": \"a\",\n      \"type\": \"text\"\n    },\n    {\n      \"name\": \"b\",\n      \"type\": \"select\",\n      \"options\": [\"a\", \"b\", \"c\"]\n    }\n  ]\n},\n{\n  \"type\": \"static\",\n  \"name\": \"combo\",\n  \"label\": \"当前值\"\n},\n\n{\n  \"type\": \"combo\",\n  \"name\": \"combo2\",\n  \"label\": \"多选组合项\",\n  \"multiple\": true,\n  \"draggable\": true,\n  \"controls\": [\n    {\n      \"label\": \"字段1\",\n      \"name\": \"a\",\n      \"type\": \"text\"\n    },\n    {\n      \"label\": \"字段2\",\n      \"name\": \"b\",\n      \"type\": \"select\",\n      \"options\": [\"a\", \"b\", \"c\"],\n      \"unique\": true\n    }\n  ]\n},\n{\n  \"type\": \"static\",\n  \"name\": \"combo2\",\n  \"label\": \"当前值\"\n}\n]\n</script></div>\n<p>combo 多行模式。</p>\n<div class=\"amis-preview\" style=\"height: 650px\"><script type=\"text/schema\" height=\"650\" scope=\"form\">[\n{\n  \"type\": \"combo\",\n  \"name\": \"combo\",\n  \"label\": \"多选组合form\",\n  \"multiple\": true,\n  \"multiLine\": true,\n  \"controls\": [\n      {\n        \"label\": \"字段1\",\n        \"name\": \"a\",\n        \"type\": \"text\"\n      },\n      {\n        \"label\": \"字段2\",\n        \"name\": \"b\",\n        \"type\": \"select\",\n        \"options\": [\"a\", \"b\", \"c\"]\n      }\n    ]\n\n},\n{\n  \"type\": \"static\",\n  \"name\": \"combo\",\n  \"label\": \"当前值\"\n},\n\n{\n  \"type\": \"combo\",\n  \"name\": \"xxx\",\n  \"label\": \"单选组合form\",\n  \"multiLine\": true,\n  \"controls\": [\n    {\n      \"name\": \"a\",\n      \"type\": \"text\"\n    },\n    {\n      \"name\": \"b\",\n      \"type\": \"select\",\n      \"options\": [\"a\", \"b\", \"c\"]\n    }\n  ]\n},\n{\n  \"type\": \"static\",\n  \"name\": \"xxx\",\n  \"label\": \"当前值\"\n}\n\n]\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Combo",
          "fragment": "combo",
          "fullPath": "#combo",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
