(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),s=n.n(c),i=(n(13),n(2)),l=n(3),u=n(5),o=n(4),y=(n(14),n(7)),j=n(0),p=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).setValue=function(){if(!r.state.player){var e=r.props,t=e.player,n=e.index;r.setState({player:t}),r.props.onPlayerChange({player:t,index:n})}},r.state={player:null},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.player;return Object(j.jsx)("div",{className:"squareStyle",style:{cursor:e?"not-allowed":"pointer"},onClick:this.setValue,children:Object(j.jsx)("span",{children:e})})}}]),n}(a.a.PureComponent),d=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e,r;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(r=t.call.apply(t,[this].concat(c))).initState={currentPlayer:"X",nextPlayer:"O",winner:"",displaceSquare:!0},r.state=r.initState,r.winStates=[[11,12,13],[21,22,23],[31,32,33],[11,21,31],[12,22,32],[13,23,33],[11,22,33],[13,22,31]],r.toeValues=(e={},Object(y.a)(e,r.initState.currentPlayer,[]),Object(y.a)(e,r.initState.nextPlayer,[]),e),r.playerChange=function(e){"X"!==e.player&&e.player?"O"===e.player&&r.setState({currentPlayer:"X",nextPlayer:"O"}):r.setState({currentPlayer:"O",nextPlayer:"X"});var t=r.state.nextPlayer,n=r.state.currentPlayer;(r.toeValues[t].push(e.index),r.toeValues[t].length>2)&&(r.winStates.map((function(e){return r.toeValues[t].filter((function(t){return e.includes(t)}))})).filter((function(e){return 3===e.length})).length&&(r.setState({winner:n}),alert("Winner is: ".concat(n)),r.reset()))},r.reset=function(){r.setState({currentPlayer:"X",nextPlayer:"O",winner:"",displaceSquare:!r.state.displaceSquare}),Object.keys(r.toeValues).forEach((function(e){r.toeValues[e]=[]}))},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.currentPlayer,r=t.nextPlayer,a=t.winner,c=t.displaceSquare,s=[0,1,2];return Object(j.jsxs)("div",{className:"containerStyle",children:[Object(j.jsxs)("div",{className:"instructionsStyle",children:["Current player: ",a?"":n]}),Object(j.jsxs)("div",{className:"instructionsStyle",children:["Next player: ",a?"":r]}),Object(j.jsxs)("div",{className:"instructionsStyle",children:["Winner: ",a]}),Object(j.jsx)("button",{className:"buttonStyle",onClick:this.reset,children:"Reset"}),Object(j.jsxs)("div",{className:"boardStyle",children:[c&&s.map((function(t,r){return Object(j.jsx)("div",{className:"rowStyle",children:s.map((function(t,a){var c=Number((r+1).toString()+(a+1).toString());return Object(j.jsx)(p,{index:c,player:n,onPlayerChange:e.playerChange},c)}))},++r)})),!c&&s.map((function(t,r){return Object(j.jsx)("div",{className:"rowStyle",children:s.map((function(t,a){var c=Number((r+1).toString()+(a+1).toString());return Object(j.jsx)(p,{index:c,player:n,onPlayerChange:e.playerChange},c)}))},++r)}))]})]})}}]),n}(a.a.PureComponent),b=d,h=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"game",children:Object(j.jsx)(b,{})})}}]),n}(a.a.PureComponent),O=h;s.a.render(Object(j.jsx)(a.a.Fragment,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d34464d6.chunk.js.map