(this.webpackJsonpseabattleshipts=this.webpackJsonpseabattleshipts||[]).push([[0],{26:function(e,n,r){},27:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r(1),s=r.n(a),c=r(6),l=r.n(c),i=r(2),o=r(5),u=r(8);var p=Object(u.b)({name:"board",initialState:{selectSeaSize:[3,4,5],seaSize:3,numberOfShips:3,play:!1,currentPlayer:null,winner:null,player1:{name:"player1",move:[],ships:[],destroyedShips:[]},player2:{name:"player2",move:[],ships:[],destroyedShips:[]}},reducers:{reset:function(e){e.currentPlayer=null,e.play=!1,e.winner=null,e.player1={name:"player1",move:[],ships:[],destroyedShips:[]},e.player2={name:"player2",move:[],ships:[],destroyedShips:[]}},seaSize:function(e,n){e.seaSize=n.payload,e.numberOfShips=n.payload},numberOfShips:function(e,n){e.numberOfShips=n.payload},play:function(e,n){e.play=!0,e.currentPlayer=n.payload},winner:function(e,n){e.winner=n.payload},movePlayer1:function(e,n){e.player1.move=[].concat(Object(o.a)(e.player1.move),[n.payload]),e.player2.ships.includes(n.payload)&&(e.player2.ships=e.player2.ships.filter((function(e){return e!==n.payload})),e.player2.destroyedShips.push(n.payload)),0===e.player2.ships.length&&(e.winner="player1"),e.currentPlayer="player2"},shipsPlayer1:function(e,n){e.player1.ships=n.payload},movePlayer2:function(e,n){e.player2.move=[].concat(Object(o.a)(e.player2.move),[n.payload]),e.player1.ships.includes(n.payload)&&(e.player1.ships=e.player1.ships.filter((function(e){return e!==n.payload})),e.player1.destroyedShips.push(n.payload)),0===e.player1.ships.length&&(e.winner="player2"),e.currentPlayer="player1"},shipsPlayer2:function(e,n){e.player2.ships=n.payload}}}),d=p.actions,b=d.reset,j=d.seaSize,h=d.numberOfShips,y=d.play,f=(d.winner,d.movePlayer1),x=d.shipsPlayer1,O=d.movePlayer2,m=d.shipsPlayer2,v=function(e){return e.board},S=p.reducer;function w(e){return Array.from({length:e*e},(function(e,n){return n+1}))}function g(e){var n=Math.round(e*e*Math.random());return 0!==n?n:1}function N(e,n){for(var r=[],t=1;t<=e;t++){var a=void 0;do{a=g(n)}while(r.includes(a));r=[].concat(Object(o.a)(r),[a])}return r}function P(e){var n=e.explane,r=e.union,a=e.text,s=e.color,c=void 0===s?"red-500":s;return Object(t.jsxs)("div",{className:"italic font-bold text-gray-400",children:[n," ",r," ",Object(t.jsx)("span",{className:"text-".concat(c),children:a})]})}function z(e){var n=e.id,r=e.disabled,a=e.onTarget,s=e.destroyed,c="\n    h-16\n    w-full\n    border \n    border-solid \n    border-blue-900\n    text-4xl\n    text-blue-900\n    ",l="\n    ".concat(c,"\n    cursor-pointer \n    bg-blue-500 \n    hover:bg-red-500 \n    "),i="\n    ".concat(c,"\n    cursor-not-allowed \n    ");return Object(t.jsx)("div",{children:Object(t.jsx)("button",{className:r?i:l,type:"button",onClick:function(){return a(n)},disabled:r,children:s?"x":"~"})})}var A=["green-500","black","purple-500"],k=["yellow-500","white","pink-500"],M={player1:A[Math.floor(Math.random()*A.length)],player2:k[Math.floor(Math.random()*k.length)]},T={player1:"right-0",player2:"left-0"};function C(e){var n=e.seaSize,r=e.currentPlayer,a=e.player,s=e.oponent,c=e.onTarget,l="\n    absolute \n    w-1/5 \n    h-1/5 \n    bg-blue-900 \n    ";return Object(t.jsxs)("div",{className:"w-1/2 p-2 text-".concat(M[a.name]),children:[Object(t.jsxs)("p",{children:[a.name," have a"," ",Object(t.jsx)("span",{className:"font-bold",children:a.ships.length})," ",1===a.ships.length?"ship":"ships"]}),Object(t.jsx)("div",{className:"flex flex-wrap bg-blue-900",children:w(n).map((function(e){return Object(t.jsxs)("div",{className:"\n                relative \n                w-1/".concat(n," \n                ").concat(a.destroyedShips.includes(e)?"bg-".concat(M[a.name]):null),children:[a.destroyedShips.includes(e)?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"top-0 ".concat(l," ").concat(T[a.name])}),Object(t.jsx)("div",{className:"bottom-0 ".concat(l," ").concat(T[a.name])})]}):null,Object(t.jsx)(z,{id:e,disabled:r===a.name||s.move.includes(e),onTarget:c,destroyed:a.destroyedShips.includes(e)})]},e)}))})]})}function V(e){var n=e.seaOwner,r=Object(i.c)(v),a=Object(i.b)();return Object(t.jsx)(C,{seaSize:r.seaSize,currentPlayer:r.currentPlayer,player:r[n],oponent:r["player1"===n?"player2":"player1"],onTarget:function(e){"player1"===r.currentPlayer&&a(f(e)),"player2"===r.currentPlayer&&a(O(e))}})}function E(e){var n=e.text,r=e.onClick;return Object(t.jsx)("button",{onClick:r,className:"\n    py-2\n    px-4 \n    bg-blue-800 \n    hover:bg-blue-600 \n    text-white \n    rounded \n    shadow-none\n    hover:shadow-md\n    cursor-pointer\n    focus:outline-none \n    focus:shadow-outline\n    ",children:n})}function F(){var e=Object(i.b)();return Object(t.jsx)(E,{text:"PLAY AGAIN",onClick:function(){e(b())}})}function I(e){var n=e.winner,r=e.currentPlayer;return n?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(P,{explane:"Winner the game",union:"-",text:n,color:null!==r?M[n]:void 0}),Object(t.jsx)("br",{}),Object(t.jsx)(F,{})]}):Object(t.jsxs)("div",{className:"flex flex-col",children:[Object(t.jsx)(P,{explane:"Next move",union:"-",text:r,color:null!==r?M[r]:void 0}),Object(t.jsxs)("div",{className:"flex w-screen justify-center",children:[Object(t.jsx)(V,{seaOwner:"player1"}),Object(t.jsx)(V,{seaOwner:"player2"})]})]})}function L(){var e=Object(i.c)(v),n=Object(i.b)();return Object(a.useEffect)((function(){n(x(N(e.numberOfShips,e.seaSize))),n(m(N(e.numberOfShips,e.seaSize)))}),[n,e.numberOfShips,e.seaSize]),Object(t.jsx)(I,{currentPlayer:e.currentPlayer,winner:e.winner})}function Y(){return Object(t.jsxs)("span",{className:"text-6xl p-4 italic",children:[Object(t.jsx)("span",{className:"text-".concat(M.player1),children:"SEA"})," ",Object(t.jsx)("span",{className:"text-".concat(M.player2),children:"BATTLESHIP"})]})}function B(e){var n=e.labelText,r=e.defaultValue,a=e.selectArray,s=e.setValue,c=e.viewModificator;return Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{className:"text-gray-400",children:n}),Object(t.jsx)("div",{className:"flex justify-evenly w-72",children:a.map((function(e){return Object(t.jsx)("div",{className:"flex-1 cursor-pointer py-2 ".concat(e===r?"border border-solid border-gray-400 transform scale-125":""),onClick:function(){s(Number(e))},children:c(e)},e)}))})]})}function J(){var e=Object(i.b)();return Object(t.jsx)(E,{text:"PLAY",onClick:function(){var n=Math.random()>.5?"player1":"player2";e(y(n))}})}function G(e){var n=e.seaSize,r=e.seaSizeArray,a=e.setSeaSize,s=e.numberOfShips,c=e.numberOfShipsArray,l=e.setNumberOfShips;return Object(t.jsxs)("div",{className:"m-4",children:[Object(t.jsx)(B,{labelText:"Sea size",defaultValue:n,selectArray:r,setValue:a,viewModificator:function(e){return"".concat(e," x ").concat(e)}}),Object(t.jsx)("br",{}),Object(t.jsx)(B,{labelText:"Number of ships",defaultValue:s,selectArray:c,setValue:l,viewModificator:function(e){return"".concat(e)}}),Object(t.jsx)("br",{}),Object(t.jsx)(J,{})]})}function H(){var e,n,r=Object(i.c)(v),a=Object(i.b)(),s=(e=r.seaSize,n=Math.round(r.seaSize*r.seaSize/2),Array.from({length:n-e+1},(function(n,r){return r+e})));return Object(t.jsx)(G,{seaSize:r.seaSize,seaSizeArray:r.selectSeaSize,setSeaSize:function(e){a(j(e))},numberOfShips:r.numberOfShips,numberOfShipsArray:s,setNumberOfShips:function(e){a(h(e))}})}var R=r(14);function W(){var e=Object(a.useState)(!1),n=Object(R.a)(e,2),r=n[0],s=n[1],c="\n    text-gray-400\n    cursor-pointer\n    ";return Object(t.jsxs)("div",{children:[Object(t.jsx)("span",{className:r?c:"underline ".concat(c),onClick:function(){s(!r)},children:"Rulles the game"}),Object(t.jsxs)("div",{className:"text-left max-w-md",hidden:!r,children:[Object(t.jsx)("p",{children:"You have several solo ships."}),Object(t.jsx)("p",{children:"They are distributed randomly across the playing field."}),Object(t.jsx)("p",{children:"The first move is made by the player who got the random choice."}),Object(t.jsx)("p",{children:"Each player makes one move, regardless of hitting the target."}),Object(t.jsx)("p",{children:"The winner is the player who knocks out all the ships from the enemy field."})]})]})}function q(e){var n=e.play;return Object(t.jsx)("div",{className:"\r p-2 \r h-screen\r flex \r flex-col \r items-center \r justify-center\r text-center text-white",children:n?Object(t.jsx)(L,{}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(Y,{}),Object(t.jsx)(H,{}),Object(t.jsx)("br",{}),Object(t.jsx)(W,{})]})})}function D(){var e=Object(i.c)(v);return Object(t.jsx)(q,{play:e.play})}function K(){return Object(t.jsx)("div",{className:"\n        top-0 \n        back \n        fixed\n        h-screen \n        w-screen\n        bg-blue-900\n        "})}r(26);var Q=function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(D,{}),Object(t.jsx)(K,{})]})},U=Object(u.a)({reducer:{board:S}});l.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(i.a,{store:U,children:Object(t.jsx)(Q,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3ba2b122.chunk.js.map