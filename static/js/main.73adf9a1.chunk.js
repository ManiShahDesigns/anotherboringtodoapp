(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,function(t,e,o){t.exports=o(22)},,,,,function(t,e,o){},,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(9),c=o.n(r),s=(o(16),o(6)),u=o.n(s),d=o(10),i=o(7),l=o(1),p=o(2),m=o(4),f=o(3),h=o(5),b=(o(18),o(19),function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).toggleTodo=function(){o.props.updateTodoFn(o.props.todo)},o}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.todo;return a.a.createElement("div",{className:"todoitem"+(t.completed?" completed":""),onClick:this.toggleTodo},t.text)}}]),e}(a.a.Component)),v=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).updateTodo=function(t){o.props.updateTodoFn(t),console.log(t)},o}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todos;return a.a.createElement("div",{className:"todoListContainer"},e.map((function(e,o){return a.a.createElement(b,{updateTodoFn:t.updateTodo,key:o,todo:e})})))}}]),e}(a.a.Component),O=(o(20),function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(m.a)(this,Object(f.a)(e).call(this))).updateInput=function(e){t.setState({todo:e.target.value})},t.submitTodo=function(e){e.preventDefault(),t.props.addTodoFunc(t.state.todo),document.getElementById("addTodoInput").value=""},t.state={todo:""},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"addTodoContainer"},a.a.createElement("form",{onSubmit:function(e){return t.submitTodo(e)}},a.a.createElement("input",{className:"input",id:"addTodoInput",onChange:function(e){return t.updateInput(e)},type:"text",placeholder:"Type in your todos..."}),a.a.createElement("button",{className:"button",type:"submit"},"Add Todo")))}}]),e}(a.a.Component));o(21);function g(){return a.a.createElement("h2",null,"Another Boring Todo App")}var j=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(m.a)(this,Object(f.a)(e).call(this))).componentDidMount=function(){var e=localStorage.getItem("todos");if(e){var o=JSON.parse(e);t.setState({todos:o})}},t.addTodo=function(){var e=Object(i.a)(u.a.mark((function e(o){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({todos:[].concat(Object(d.a)(t.state.todos),[{text:o,completed:!1}])});case 2:localStorage.setItem("todos",JSON.stringify(t.state.todos)),console.log(localStorage.getItem("todos"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updateTodo=function(){var e=Object(i.a)(u.a.mark((function e(o){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.todos.map((function(t){return o===t?{text:o.text,completed:!o.completed}:t})),e.next=3,t.setState({todos:n});case 3:localStorage.setItem("todos",JSON.stringify(t.state.todos));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={todos:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"body-bg"},a.a.createElement(g,null),a.a.createElement(O,{addTodoFunc:this.addTodo}),a.a.createElement(v,{updateTodoFn:this.updateTodo,todos:this.state.todos}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.73adf9a1.chunk.js.map