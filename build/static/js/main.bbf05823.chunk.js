(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a(350)},216:function(e,t,a){},348:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),i=a.n(l),c=(a(216),a(16)),o=a(17),s=a(19),m=a(18),u=a(20),h=a(12),d=a(44),p=a.n(d),g=a(65),E=a(68),f=a(60),b=a.n(f),v=a(29),j=a.n(v),O=a(39),y=a.n(O),w=a(41),x=a.n(w),k=a(23),T=a.n(k),C=a(40),S=a.n(C),W=a(30),N=a.n(W),R=a(351),L=a(66),M=(a(98),a(99)),F=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handle_Search=function(e){var t=a.state.teams.filter(function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())});a.setState({filteredTeams:t}),console.log(t)};var n=a.props.topx?a.props.topx:null;return a.state={teams:null,filteredTeams:null,topx:n},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=Object(g.a)(p.a.mark(function e(){var t,a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",mode:"cors"},e.next=3,M("https://2hjnelw9s4.execute-api.us-east-1.amazonaws.com/Prod/fglstats",t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),this.state.topx?(r=Math.min(n.length,this.state.topx),this.setState({teams:n,filteredTeams:n,topx:r})):this.setState({teams:n,filteredTeams:n,topx:n.length});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h5",component:"h3",className:e.control}," Leaderboard"),r.a.createElement(b.a,{id:"search",type:"text",label:"Search",onChange:this.handle_Search,className:e.textField}),r.a.createElement(y.a,{className:e.table},r.a.createElement(S.a,null,r.a.createElement(N.a,null,r.a.createElement(T.a,null,"Team"),r.a.createElement(T.a,{align:"right"},"YTD Earnings"))),r.a.createElement(x.a,null,this.state.filteredTeams?this.state.filteredTeams.slice(0,this.state.topx-1).map(function(e){return r.a.createElement(N.a,{key:e.id},r.a.createElement(T.a,{align:"left"},r.a.createElement(R.a,{to:"/TeamReport/"+e.id},e.name)),r.a.createElement(T.a,{align:"right"},e.YTDearnings))}):r.a.createElement(L.a,{fullPage:!0,loading:!0}))))}}]),t}(n.Component),G=Object(h.withStyles)(function(e){return{root:Object(E.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,width:"100%",overflowX:"auto"}),textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},control:{padding:2*e.spacing.unit},table:{minWidth:700}}})(F),I=a(28),A=a.n(I),P=a(42),z=a.n(P),B={title:{text:"My chart"},series:[{data:[1,2,3],type:"column"}]},D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{highcharts:A.a,options:B})}}]),t}(r.a.Component),J=a(21),X=a.n(J),Y=a(24),_=a.n(Y),H=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement(X.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.root,spacing:16},r.a.createElement(X.a,{item:!0,sm:!0},r.a.createElement(_.a,{className:e.paper,elevation:1},r.a.createElement(D,null)))),r.a.createElement(X.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.root,spacing:16},r.a.createElement(X.a,{item:!0},r.a.createElement(_.a,{className:e.paper,elevation:1},r.a.createElement("h2",null,"Top 10 Teams"),r.a.createElement(G,{topx:"10"})))))}}]),t}(n.Component),$=Object(h.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,margin:"auto",maxWidth:1e3}}})(H),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",null,"Leaderboard"),r.a.createElement(X.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.root,spacing:16},r.a.createElement(X.a,{item:!0,lg:!0},r.a.createElement(_.a,{className:e.root,elevation:1},r.a.createElement(G,null)))))}}]),t}(n.Component),K=Object(h.withStyles)(function(e){return{root:{flexGrow:1},header:{textAlign:"center",alignSelf:"center"}}})(q);a(135)(A.a),a(136)(A.a);var Q={chart:{type:"solidgauge"},title:{text:"Current Rank",y:50},pane:{center:["50%","70%"],size:"80%",startAngle:-90,endAngle:90,background:{backgroundColor:"#EEE",innerRadius:"60%",outerRadius:"100%",shape:"arc"}},tooltip:{enabled:!1},yAxis:{stops:[[.1,"green"],[.5,"yellow"],[.9,"red"]],lineWidth:0,minorTickInterval:null,tickPixelInterval:0,tickWidth:0,labels:{y:16},min:1,max:85},plotOptions:{solidgauge:{dataLabels:{y:5,borderWidth:0,useHTML:!0}}},credits:{enabled:!1},series:[{data:[5],dataLabels:{format:'<div style="text-align:center"><span style="font-size:25px;color:black">Rank: {y}</span><br/><span style="font-size:12px;color:silver"></span></div>'}}]};var U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={currentRank:a.props.rank,numOfPlayers:a.props.players},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return Q.series[0].data=this.state.currentRank,Q.yAxis.max=this.state.numOfPlayers,console.log(Q),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{highcharts:A.a,options:Q}))}}]),t}(r.a.Component);a(135)(A.a),a(136)(A.a);var V={chart:{type:"line"},title:{text:"Weekly Rank"},tooltip:{enabled:!1},yAxis:{reversed:!0,min:1,max:85,label:"Rank"},xAxis:{min:1,max:15,label:"Week"},series:[{data:[1,5,15,62,62,55],name:"Weekly Rank"}],credits:{enabled:!1}},Z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{highcharts:A.a,options:V}))}}]),t}(r.a.Component),ee=(a(99),[{id:1,week:1,tournament:"Waste Management",golfer:"Tiger Woods",earnings:"155,254"},{id:2,week:2,tournament:"Waste Management",golfer:"Tiger Woods",earnings:"155,254"},{id:3,week:3,tournament:"Waste Management",golfer:"Tiger Woods",earnings:"155,254"}]),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={weeks:ee},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h5",component:"h3",className:e.control}," Weekly Picks"),r.a.createElement(y.a,{className:e.table},r.a.createElement(S.a,null,r.a.createElement(N.a,null,r.a.createElement(T.a,{align:"left"},"Week"),r.a.createElement(T.a,{align:"left"},"Tournament"),r.a.createElement(T.a,{align:"left"},"Golfer"),r.a.createElement(T.a,{align:"center"},"Earnings"))),r.a.createElement(x.a,null,this.state.weeks?this.state.weeks.map(function(e){return r.a.createElement(N.a,{key:e.id},r.a.createElement(T.a,{align:"left"},e.week),r.a.createElement(T.a,{align:"left"},e.tournament),r.a.createElement(T.a,{align:"left"},e.golfer),r.a.createElement(T.a,{align:"center"},e.earnings))}):r.a.createElement(N.a,null))))}}]),t}(n.Component),ae=Object(h.withStyles)(function(e){return{root:Object(E.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,width:"100%",overflowX:"auto"}),textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},control:{padding:2*e.spacing.unit},table:{minWidth:700}}})(te),ne=a(49),re=a.n(ne),le=a(138),ie=a(48),ce=a.n(ie),oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleTeamChange=function(e){console.log(e.target);var t=a.state.teams.find(function(t){return t.id===e.target.value});a.setState({team:t})},a.state={teams:null,teamid:a.props.teamid||null,team:null,loading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=Object(g.a)(p.a.mark(function e(){var t,a,n,r,l;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",mode:"cors"},e.next=3,fetch("https://2hjnelw9s4.execute-api.us-east-1.amazonaws.com/Prod/fglstats",t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),this.state.teamid?(r=this.state.teamid,l=n.find(function(e){return e.id.toString()===r}),this.setState({teams:n,team:l,loading:!1})):this.setState({teams:n,loading:!1});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("h1",null,"Team Report"),this.state.team?r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.root,spacing:16},r.a.createElement(X.a,{item:!0,lg:!0},r.a.createElement("h2",null,this.state.team.name)),r.a.createElement(X.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.root,spacing:16},r.a.createElement(X.a,{item:!0,xs:3},r.a.createElement(_.a,{className:e.root,elevation:1},r.a.createElement(U,{rank:[this.state.team.id],players:this.state.teams.length}))),r.a.createElement(X.a,{item:!0,xs:6},r.a.createElement(_.a,{className:e.root,elevation:1},r.a.createElement(Z,null))),r.a.createElement(X.a,{item:!0,xs:6},r.a.createElement(_.a,{className:e.root,elevation:1},r.a.createElement(ae,null)))))):r.a.createElement(X.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.root,spacing:16},r.a.createElement(X.a,{item:!0,xs:3},r.a.createElement(_.a,{className:e.root,elevation:1},r.a.createElement(ce.a,{htmlFor:"team-select"},"Select a Team"),r.a.createElement(re.a,{value:"Select",onChange:this.handleTeamChange,id:"team-select"},this.state.teams?this.state.teams.map(function(e){return r.a.createElement(le.a,{value:e.id,key:e.id},e.name)}):r.a.createElement(r.a.Fragment,null)),r.a.createElement(L.a,{fullPage:!0,loading:this.state.loading})))))}}]),t}(n.Component),se=Object(h.withStyles)(function(e){return{root:{flexGrow:1}}})(oe),me=a(61),ue=a.n(me),he=a(62),de=a.n(he),pe=a(63),ge=a.n(pe),Ee=a(139),fe=a.n(Ee),be=a(32),ve=a.n(be),je=a(64),Oe=a.n(je),ye=a(43),we=a.n(ye),xe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!0,anchorEl:null},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.anchorEl,a=Boolean(t);return r.a.createElement("div",{className:e.root},r.a.createElement(ue.a,{position:"static"},r.a.createElement(de.a,null,r.a.createElement(ge.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:this.handleMenu},r.a.createElement(fe.a,null)),r.a.createElement(Oe.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleClose},r.a.createElement(we.a,{component:R.a,to:"/",underline:"none"},r.a.createElement(ve.a,{onClick:this.handleClose},"Dashboard")),r.a.createElement(we.a,{component:R.a,to:"/leaderboard",underline:"none"}," ",r.a.createElement(ve.a,{onClick:this.handleClose},"Leaderboard")),r.a.createElement(we.a,{component:R.a,to:"/TeamReport",underline:"none"}," ",r.a.createElement(ve.a,{onClick:this.handleClose},"Team Report")),r.a.createElement(ve.a,{onClick:this.handleClose},"Money List")),r.a.createElement(j.a,{variant:"h6",color:"inherit",className:e.grow},this.props.title))))}}]),t}(r.a.Component),ke=Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(xe),Te=(a(348),a(352)),Ce=a(353),Se=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Te.a,null,r.a.createElement("div",null,r.a.createElement(ke,{title:"FGL Stats"}),r.a.createElement(Ce.a,{exact:!0,path:"/",render:function(){return r.a.createElement($,null)}}),r.a.createElement(Ce.a,{exact:!0,path:"/Leaderboard",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(Ce.a,{exact:!0,path:"/TeamReport",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(Ce.a,{path:"/TeamReport/:teamid",component:We}))))}}]),t}(n.Component),We=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(se,{teamid:t.params.teamid}))},Ne=Object(h.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,margin:"auto",maxWidth:1e3}}})(Se);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[211,1,2]]]);
//# sourceMappingURL=main.bbf05823.chunk.js.map