(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{559:function(t,e,o){"use strict";var r=o(9),d=o(177),n=o(73),c=o(32),l=o(50),m=o(178),f=o(123),v=o(96),_=o(44),h=v("splice"),x=_("splice",{ACCESSORS:!0,0:0,1:2}),w=Math.max,k=Math.min;r({target:"Array",proto:!0,forced:!h||!x},{splice:function(t,e){var o,r,v,_,h,x,y=l(this),z=c(y.length),C=d(t,z),P=arguments.length;if(0===P?o=r=0:1===P?(o=0,r=z-C):(o=P-2,r=k(w(n(e),0),z-C)),z+o-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(v=m(y,r),_=0;_<r;_++)(h=C+_)in y&&f(v,_,y[h]);if(v.length=r,o<r){for(_=C;_<z-r;_++)x=_+o,(h=_+r)in y?y[x]=y[h]:delete y[x];for(_=z;_>z-r+o;_--)delete y[_-1]}else if(o>r)for(_=z-r;_>C;_--)x=_+o-1,(h=_+r-1)in y?y[x]=y[h]:delete y[x];for(_=0;_<o;_++)y[_+C]=arguments[_+2];return y.length=z-r+o,v}})},566:function(t,e,o){"use strict";o.r(e);o(60),o(559),o(31),o(61),o(20);var r=o(5),d={data:function(){return{merchantId:this.$route.params.merchantId,isPopupShow:!1,pageStatus:"등록",form:{user_id:"",user_id_confirm:!1,floors:[{floor_id:"",name:"",order:""}],kiosks:[{id:"",mac_address:"",x:"",y:"",addr:"",floor:"",floor_id:"",key:"",agent_name:""}]}}},created:function(){this.getMerchantData(),this.merchantId&&(this.form.kiosks=[],this.form.floors=[])},methods:{getMerchantData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.merchantId){e.next=2;break}return e.abrupt("return");case 2:return t.pageStatus="수정",e.next=5,t.$axios.get("/users/".concat(t.merchantId));case 5:o=e.sent,data=o.data,r=data.user,t.form.name=r.name,t.form.user_id=r.user_id,t.form.area_x=r.area_x,t.form.area_y=r.area_y,t.form.city_code=r.city_code,t.form.kakao_zoom_level=r.kakao_zoom_level,t.form.map_client_id=r.map_client_id,t.form.map_client_secret=r.map_client_secret,t.form.email=r.email,t.form.tel_1=r.tel_1,t.form.tel_2=r.tel_2,t.form.tel_3=r.tel_3,t.form.poi_level_h=r.poi_level_h,t.form.poi_level_m=r.poi_level_m,t.form.poi_level_l=r.poi_level_l,t.form.default_zoom=r.default_zoom,t.form.max_zoom=r.max_zoom,t.form.min_zoom=r.min_zoom,0===r.floors.length?t.form.floors.push({floor_id:"",name:"",order:""}):r.floors.forEach((function(e,o){t.form.floors.push({floor_id:"",name:"",order:""}),t.form.floors[o].floor_id=e.floor_id,t.form.floors[o].name=e.name,t.form.floors[o].order=e.order})),0===r.kiosks.length?t.form.kiosks.push({id:"",mac_address:"",x:"",y:"",addr:"",floor:"",floor_id:"",key:"",agent_name:""}):r.kiosks.forEach((function(e,o){t.form.kiosks.push({id:"",mac_address:"",x:"",y:"",addr:"",floor:"",floor_id:"",key:"",agent_name:""}),t.form.kiosks[o].id=e.id,t.form.kiosks[o].mac_address=e.mac_address,t.form.kiosks[o].x=e.x,t.form.kiosks[o].y=e.y,t.form.kiosks[o].addr=e.addr,t.form.kiosks[o].floor=e.floor,t.form.kiosks[o].floor_id=e.floor_id,t.form.kiosks[o].key=e.key,t.form.kiosks[o].agent_name=e.agent_name}));case 28:case"end":return e.stop()}}),e)})))()},idConfirm:function(){var t=this;this.$axios.get("/users/check/user_id",{params:{user_id:this.form.user_id}}).then((function(e){t.form.user_id_confirm=e.data.success}))},removeKiosk:function(t){this.form.kiosks.splice(t,1)},addKiosk:function(){this.form.kiosks.push({id:"",mac_address:"",x:"",y:"",addr:"",floor:"",floor_id:"",key:"",agent_name:""})},removeFloor:function(t){this.form.floors.splice(t,1)},addFloor:function(){this.form.floors.push({floor_id:"",name:"",order:""})},goBack:function(){this.$router.go(-1)},initIdConfirm:function(){this.form.user_id="",this.form.user_id_confirm=!1},register:function(){var t=this;this.$axios.post("/users",this.form).then((function(e){t.isPopupShow=!0}))},edit:function(){var t=this,e=this.makeFormData(this.form);e.append("_method","PUT"),this.$axios.post("users/".concat(this.merchantId),e).then((function(e){t.isPopupShow=!0})).catch()},goToList:function(){this.$router.push("/master/merchants")}}},n=(o(656),o(10)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"input-form-row two-col"},[r("div",{staticClass:"input-basic with-btn"},[r("label",{attrs:{for:"merchant-id"}},[t._v("아이디 *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user_id,expression:"form.user_id"}],class:{error:t.errors.user_id},attrs:{id:"merchant-id",readonly:t.form.user_id_confirm,disabled:t.merchantId,type:"text",placeholder:"아이디를 입력하세요."},domProps:{value:t.form.user_id},on:{input:function(e){e.target.composing||t.$set(t.form,"user_id",e.target.value)}}}),t._v(" "),t.form.user_id_confirm?r("button",{staticClass:"btn-delete-id",attrs:{type:"button"},on:{click:t.initIdConfirm}},[r("img",{attrs:{src:o(323),alt:"삭제 버튼"}})]):t._e(),t._v(" "),t.merchantId?t._e():r("button",{staticClass:"btn-basic small point",staticStyle:{width:"70px"},attrs:{type:"button"},on:{click:t.idConfirm}},[t._v("\n        중복확인\n      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user_id_confirm,expression:"form.user_id_confirm"}],attrs:{type:"hidden"},domProps:{value:t.form.user_id_confirm},on:{input:function(e){e.target.composing||t.$set(t.form,"user_id_confirm",e.target.value)}}}),t._v(" "),t.form.user_id_confirm?r("div",{staticClass:"usable-id"},[t._v("\n        사용 가능한 아이디 입니다.\n      ")]):t._e(),t._v(" "),t.errors.user_id?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.user_id[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-basic"},[r("label",{attrs:{for:"merchant-name"}},[t._v("상인회 명 *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],class:{error:t.errors.name},attrs:{id:"merchant-name",type:"text",placeholder:"상인회명을 입력하세요."},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.errors.name?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.name[0])+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-form-row two-col"},[r("div",{staticClass:"input-basic"},[r("label",{attrs:{for:"merchant-pw"}},[t._v("비밀번호 *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],class:{error:t.errors.password},attrs:{id:"merchant-pw",type:"text",placeholder:t.merchantId?"비밀번호 변경 시에만 입력하세요.":"비밀번호를 입력하세요"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),t.errors.password?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.password[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-basic"},[r("label",{attrs:{for:"merchant-pw-check"}},[t._v("비밀번호 확인 *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirm,expression:"form.password_confirm"}],class:{error:t.errors.password_confirm},attrs:{id:"merchant-pw-check",type:"text",placeholder:t.merchantId?"비밀번호 변경 시에만 입력하세요.":"비밀번호를 한번 더 입력하세요"},domProps:{value:t.form.password_confirm},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirm",e.target.value)}}}),t._v(" "),t.errors.password_confirm?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.password_confirm[0])+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-form-row two-col"},[r("div",{staticClass:"input-basic"},[r("label",[t._v("담당 연락처 *")]),t._v(" "),r("div",{staticClass:"input-phone"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel_1,expression:"form.tel_1"}],class:{error:t.errors.tel_1},attrs:{maxlength:"4",type:"text"},domProps:{value:t.form.tel_1},on:{input:function(e){e.target.composing||t.$set(t.form,"tel_1",e.target.value)}}}),t._v(" "),r("span",{staticClass:"dash"},[t._v("-")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel_2,expression:"form.tel_2"}],class:{error:t.errors.tel_2},attrs:{maxlength:"4",type:"text"},domProps:{value:t.form.tel_2},on:{input:function(e){e.target.composing||t.$set(t.form,"tel_2",e.target.value)}}}),t._v(" "),r("span",{staticClass:"dash"},[t._v("-")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel_3,expression:"form.tel_3"}],class:{error:t.errors.tel_3},attrs:{maxlength:"4",type:"text"},domProps:{value:t.form.tel_3},on:{input:function(e){e.target.composing||t.$set(t.form,"tel_3",e.target.value)}}})]),t._v(" "),t.errors.tel_1||t.errors.tel_2||t.errors.tel_3?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.tel_1?t.errors.tel_1[0]:t.errors.tel_2?t.errors.tel_2[0]:t.errors.tel_3[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-basic"},[r("label",[t._v("담당 이메일 *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],class:{error:t.errors.email},attrs:{type:"text",placeholder:"이메일 주소를 입력하세요."},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.errors.email?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.email[0])+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-form-row two-col"},[r("div",{staticClass:"input-basic"},[r("label",{attrs:{for:"map-client-id"}},[t._v("Map Client ID")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.map_client_id,expression:"form.map_client_id"}],class:{error:t.errors.map_client_id},attrs:{id:"map-client-id",type:"text",placeholder:"Map Client ID를 입력하세요."},domProps:{value:t.form.map_client_id},on:{input:function(e){e.target.composing||t.$set(t.form,"map_client_id",e.target.value)}}}),t._v(" "),t.errors.map_client_id?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.map_client_id[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-basic"},[r("label",{attrs:{for:"map-client-secret"}},[t._v("Map Client Secret")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.map_client_secret,expression:"form.map_client_secret"}],class:{error:t.errors.map_client_secret},attrs:{id:"map-client-secret",type:"text",placeholder:"Map Client Secret을 입력하세요."},domProps:{value:t.form.map_client_secret},on:{input:function(e){e.target.composing||t.$set(t.form,"map_client_secret",e.target.value)}}}),t._v(" "),t.errors.map_client_secret?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.map_client_secret[0])+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-form-row two-col"},[r("div",{staticClass:"input-basic"},[r("label",[t._v("Zoom 레벨 설정")]),t._v(" "),r("div",{staticClass:"three-inputs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.default_zoom,expression:"form.default_zoom"}],class:{error:t.errors.default_zoom},attrs:{type:"text",placeholder:"기본 줌"},domProps:{value:t.form.default_zoom},on:{input:function(e){e.target.composing||t.$set(t.form,"default_zoom",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.max_zoom,expression:"form.max_zoom"}],class:{error:t.errors.max_zoom},attrs:{type:"text",placeholder:"최대 줌"},domProps:{value:t.form.max_zoom},on:{input:function(e){e.target.composing||t.$set(t.form,"max_zoom",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.min_zoom,expression:"form.min_zoom"}],class:{error:t.errors.min_zoom},attrs:{type:"text",placeholder:"최소 줌"},domProps:{value:t.form.min_zoom},on:{input:function(e){e.target.composing||t.$set(t.form,"min_zoom",e.target.value)}}})]),t._v(" "),t.errors.default_zoom||t.errors.max_zoom||t.errors.min_zoom?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.default_zoom[0]?t.errors.default_zoom[0]:t.errors.max_zoom[0]?t.errors.max_zoom[0]:t.errors.min_zoom[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-basic"},[r("label",[t._v("POI 레벨 설정")]),t._v(" "),r("div",{staticClass:"three-inputs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.poi_level_h,expression:"form.poi_level_h"}],class:{error:t.errors.poi_level_h},attrs:{type:"text",placeholder:"상"},domProps:{value:t.form.poi_level_h},on:{input:function(e){e.target.composing||t.$set(t.form,"poi_level_h",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.poi_level_m,expression:"form.poi_level_m"}],class:{error:t.errors.poi_level_m},attrs:{type:"text",placeholder:"중"},domProps:{value:t.form.poi_level_m},on:{input:function(e){e.target.composing||t.$set(t.form,"poi_level_m",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.poi_level_l,expression:"form.poi_level_l"}],class:{error:t.errors.poi_level_l},attrs:{type:"text",placeholder:"하"},domProps:{value:t.form.poi_level_l},on:{input:function(e){e.target.composing||t.$set(t.form,"poi_level_l",e.target.value)}}})]),t._v(" "),t.errors.poi_level_h||t.errors.poi_level_m||t.errors.poi_level_l?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.poi_level_h[0]?t.errors.poi_level_h[0]:t.errors.poi_level_m[0]?t.errors.poi_level_m[0]:t.errors.poi_level_l[0])+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-form-row two-col"},[r("div",{staticClass:"input-basic"},[r("label",[t._v("날씨 정보 X, Y 좌표")]),t._v(" "),r("div",{staticClass:"input-area-position"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.area_x,expression:"form.area_x"}],class:{error:t.errors.area_x},attrs:{type:"text",placeholder:"상인회 x 좌표"},domProps:{value:t.form.area_x},on:{input:function(e){e.target.composing||t.$set(t.form,"area_x",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.area_y,expression:"form.area_y"}],class:{error:t.errors.area_y},attrs:{type:"text",placeholder:"상인회 x 좌표"},domProps:{value:t.form.area_y},on:{input:function(e){e.target.composing||t.$set(t.form,"area_y",e.target.value)}}})]),t._v(" "),t.errors.area_x||t.errors.area_y?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.area_x[0]?t.errors.area_x[0]:t.errors.area_y[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-basic"},[r("label",[t._v("교통정보 설정")]),t._v(" "),r("div",{staticClass:"input-area-position"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city_code,expression:"form.city_code"}],class:{error:t.errors.city_code},attrs:{type:"text",placeholder:"도시코드"},domProps:{value:t.form.city_code},on:{input:function(e){e.target.composing||t.$set(t.form,"city_code",e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.kakao_zoom_level,expression:"form.kakao_zoom_level"}],class:{error:t.errors.kakao_zoom_level},attrs:{type:"text",placeholder:"줌 레벨"},domProps:{value:t.form.kakao_zoom_level},on:{input:function(e){e.target.composing||t.$set(t.form,"kakao_zoom_level",e.target.value)}}})]),t._v(" "),t.errors.city_code||t.errors.kakao_zoom_level?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.city_code[0]||t.errors.kakao_zoom_level[0])+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-form-row"},[r("div",{staticClass:"input-basic"},[r("label",[t._v("층 관리")]),t._v(" "),r("div",{staticClass:"input-kiosk"},t._l(t.form.floors,(function(e,i){return r("div",{key:i,staticClass:"row no-mb"},[r("span",{staticClass:"num"},[t._v(t._s(i+1))]),t._v(" "),r("div",{staticClass:"inputs-wrap",staticStyle:{width:"340px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.floor_id,expression:"floor['floor_id']"}],staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"층 ID"},domProps:{value:e.floor_id},on:{input:function(o){o.target.composing||t.$set(e,"floor_id",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"floor['name']"}],staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"층 이름"},domProps:{value:e.name},on:{input:function(o){o.target.composing||t.$set(e,"name",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order,expression:"floor['order']"}],staticStyle:{width:"100px"},attrs:{type:"text",placeholder:"정렬 순서"},domProps:{value:e.order},on:{input:function(o){o.target.composing||t.$set(e,"order",o.target.value)}}})]),t._v(" "),t.form.floors.length===i+1?r("button",{staticClass:"btn-control",attrs:{type:"button"},on:{click:t.addFloor}},[r("img",{attrs:{src:o(309),alt:"추가 버튼"}})]):r("button",{staticClass:"btn-control",attrs:{type:"button"},on:{click:function(e){return t.removeFloor(i)}}},[r("img",{attrs:{src:o(300),alt:"삭제 버튼"}})])])})),0),t._v(" "),t.errors.floors?r("div",{staticClass:"error-message"},[t._v("\n        "+t._s(t.errors.floors[0])+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-form-row"},[r("div",{staticClass:"input-basic"},[r("label",[t._v("키오스크 등록")]),t._v(" "),r("div",{staticClass:"input-kiosk"},[t._l(t.form.kiosks,(function(e,i){return r("div",{key:i,staticClass:"row"},[r("span",{staticClass:"num"},[t._v(t._s(i+1))]),t._v(" "),r("div",{staticClass:"inputs-wrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"kiosk['id']"}],attrs:{type:"hidden"},domProps:{value:e.id},on:{input:function(o){o.target.composing||t.$set(e,"id",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.mac_address,expression:"kiosk['mac_address']"}],attrs:{type:"text",placeholder:"mac address"},domProps:{value:e.mac_address},on:{input:function(o){o.target.composing||t.$set(e,"mac_address",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.x,expression:"kiosk['x']"}],staticStyle:{width:"80px"},attrs:{type:"text",placeholder:"x 좌표"},domProps:{value:e.x},on:{input:function(o){o.target.composing||t.$set(e,"x",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.y,expression:"kiosk['y']"}],staticStyle:{width:"80px"},attrs:{type:"text",placeholder:"y 좌표"},domProps:{value:e.y},on:{input:function(o){o.target.composing||t.$set(e,"y",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.addr,expression:"kiosk['addr']"}],attrs:{type:"text",placeholder:"address"},domProps:{value:e.addr},on:{input:function(o){o.target.composing||t.$set(e,"addr",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.floor,expression:"kiosk['floor']"}],staticClass:"floor",attrs:{type:"text",placeholder:"층 수"},domProps:{value:e.floor},on:{input:function(o){o.target.composing||t.$set(e,"floor",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.floor_id,expression:"kiosk['floor_id']"}],attrs:{type:"text",placeholder:"층 ID"},domProps:{value:e.floor_id},on:{input:function(o){o.target.composing||t.$set(e,"floor_id",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"kiosk['key']"}],attrs:{type:"text",placeholder:"key",readonly:""},domProps:{value:e.key},on:{input:function(o){o.target.composing||t.$set(e,"key",o.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.agent_name,expression:"kiosk['agent_name']"}],attrs:{type:"text",placeholder:"agent_name"},domProps:{value:e.agent_name},on:{input:function(o){o.target.composing||t.$set(e,"agent_name",o.target.value)}}})]),t._v(" "),t.form.kiosks.length===i+1?r("button",{staticClass:"btn-control",attrs:{type:"button"},on:{click:t.addKiosk}},[r("img",{attrs:{src:o(309),alt:"추가 버튼"}})]):r("button",{staticClass:"btn-control",attrs:{type:"button"},on:{click:function(e){return t.removeKiosk(i)}}},[r("img",{attrs:{src:o(300),alt:"삭제 버튼"}})])])})),t._v(" "),t.errors.kiosks?r("div",{staticClass:"error-message"},[t._v("\n          "+t._s(t.errors.kiosks[0])+"\n        ")]):t._e()],2)])]),t._v(" "),r("div",{staticClass:"bottom-btns"},[r("button",{staticClass:"btn-basic big outline",attrs:{type:"button"},on:{click:t.goBack}},[r("span",[t._v("취소")])]),t._v(" "),r("button",{staticClass:"btn-basic big point",attrs:{type:"submit"}},[t.merchantId?r("span",[t._v("수정")]):r("span",[t._v("등록")])])]),t._v(" "),t.isPopupShow?r("layer-popup",{staticClass:"confirm-popup",on:{hide:function(e){t.isPopupShow=!1}}},[r("p",{staticClass:"message",attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.pageStatus)+"이 완료되었습니다.")]),t._v(" "),r("div",{staticClass:"btns",attrs:{slot:"btns"},slot:"btns"},[r("button",{staticClass:"btn-basic medium point round",attrs:{type:"button"},on:{click:t.goToList}},[r("span",[t._v("확인")])])])]):t._e()],1)}),[],!1,null,"9cd0f5a2",null);e.default=component.exports;installComponents(component,{LayerPopup:o(120).default})},597:function(t,e,o){var content=o(657);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("90f3e2b6",content,!0,{sourceMap:!1})},656:function(t,e,o){"use strict";o(597)},657:function(t,e,o){var r=o(17),d=o(38),n=o(28),c=o(29),l=o(30);e=r(!1);var m=d(n),f=d(c),v=d(l);e.push([t.i,'a[data-v-9cd0f5a2],abbr[data-v-9cd0f5a2],acronym[data-v-9cd0f5a2],address[data-v-9cd0f5a2],applet[data-v-9cd0f5a2],article[data-v-9cd0f5a2],aside[data-v-9cd0f5a2],audio[data-v-9cd0f5a2],b[data-v-9cd0f5a2],big[data-v-9cd0f5a2],blockquote[data-v-9cd0f5a2],body[data-v-9cd0f5a2],canvas[data-v-9cd0f5a2],caption[data-v-9cd0f5a2],center[data-v-9cd0f5a2],cite[data-v-9cd0f5a2],code[data-v-9cd0f5a2],dd[data-v-9cd0f5a2],del[data-v-9cd0f5a2],details[data-v-9cd0f5a2],dfn[data-v-9cd0f5a2],div[data-v-9cd0f5a2],dl[data-v-9cd0f5a2],dt[data-v-9cd0f5a2],em[data-v-9cd0f5a2],embed[data-v-9cd0f5a2],fieldset[data-v-9cd0f5a2],figcaption[data-v-9cd0f5a2],figure[data-v-9cd0f5a2],footer[data-v-9cd0f5a2],form[data-v-9cd0f5a2],h1[data-v-9cd0f5a2],h2[data-v-9cd0f5a2],h3[data-v-9cd0f5a2],h4[data-v-9cd0f5a2],h5[data-v-9cd0f5a2],h6[data-v-9cd0f5a2],header[data-v-9cd0f5a2],hgroup[data-v-9cd0f5a2],html[data-v-9cd0f5a2],i[data-v-9cd0f5a2],iframe[data-v-9cd0f5a2],img[data-v-9cd0f5a2],ins[data-v-9cd0f5a2],kbd[data-v-9cd0f5a2],label[data-v-9cd0f5a2],legend[data-v-9cd0f5a2],li[data-v-9cd0f5a2],mark[data-v-9cd0f5a2],menu[data-v-9cd0f5a2],nav[data-v-9cd0f5a2],object[data-v-9cd0f5a2],ol[data-v-9cd0f5a2],output[data-v-9cd0f5a2],p[data-v-9cd0f5a2],pre[data-v-9cd0f5a2],q[data-v-9cd0f5a2],ruby[data-v-9cd0f5a2],s[data-v-9cd0f5a2],samp[data-v-9cd0f5a2],section[data-v-9cd0f5a2],small[data-v-9cd0f5a2],span[data-v-9cd0f5a2],strike[data-v-9cd0f5a2],strong[data-v-9cd0f5a2],sub[data-v-9cd0f5a2],summary[data-v-9cd0f5a2],sup[data-v-9cd0f5a2],table[data-v-9cd0f5a2],tbody[data-v-9cd0f5a2],td[data-v-9cd0f5a2],tfoot[data-v-9cd0f5a2],th[data-v-9cd0f5a2],thead[data-v-9cd0f5a2],time[data-v-9cd0f5a2],tr[data-v-9cd0f5a2],tt[data-v-9cd0f5a2],u[data-v-9cd0f5a2],ul[data-v-9cd0f5a2],var[data-v-9cd0f5a2],video[data-v-9cd0f5a2],xmp[data-v-9cd0f5a2]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[data-v-9cd0f5a2],aside[data-v-9cd0f5a2],details[data-v-9cd0f5a2],figcaption[data-v-9cd0f5a2],figure[data-v-9cd0f5a2],footer[data-v-9cd0f5a2],header[data-v-9cd0f5a2],hgroup[data-v-9cd0f5a2],menu[data-v-9cd0f5a2],nav[data-v-9cd0f5a2],section[data-v-9cd0f5a2]{display:block}ol[data-v-9cd0f5a2],ul[data-v-9cd0f5a2]{list-style:none}table[data-v-9cd0f5a2]{border-collapse:collapse;border-spacing:0}td[data-v-9cd0f5a2],th[data-v-9cd0f5a2]{vertical-align:middle;box-sizing:border-box}a[data-v-9cd0f5a2]:active,a[data-v-9cd0f5a2]:hover,a[data-v-9cd0f5a2]:link,a[data-v-9cd0f5a2]:visited{color:inherit;text-decoration:none;outline:none}b[data-v-9cd0f5a2],strong[data-v-9cd0f5a2]{font-weight:700}button[data-v-9cd0f5a2],input[data-v-9cd0f5a2],select[data-v-9cd0f5a2],textarea[data-v-9cd0f5a2]{margin:0;padding:0;font:inherit}button[data-v-9cd0f5a2]{border:0;background:none;outline:none;cursor:pointer}button[data-v-9cd0f5a2],button>span[data-v-9cd0f5a2]{vertical-align:baseline}button>span[data-v-9cd0f5a2]{position:relative}button[data-v-9cd0f5a2]::-moz-focus-inner,input[data-v-9cd0f5a2]::-moz-focus-inner{padding:0;border:0}button[disabled][data-v-9cd0f5a2],input[disabled][data-v-9cd0f5a2]{cursor:default}textarea[data-v-9cd0f5a2]{overflow:auto}input[data-v-9cd0f5a2],textarea[data-v-9cd0f5a2]{resize:none}legend[data-v-9cd0f5a2]{visibility:hidden;font-size:0}audio[data-v-9cd0f5a2]:not([controls]){display:none;height:0}svg[data-v-9cd0f5a2]:not(:root){overflow:hidden}input[type=password][data-v-9cd0f5a2]::-ms-clear,input[type=text][data-v-9cd0f5a2]::-ms-clear{display:none}input[type=button][data-v-9cd0f5a2],input[type=reset][data-v-9cd0f5a2],input[type=submit][data-v-9cd0f5a2]{border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}button[data-v-9cd0f5a2],input[type=email][data-v-9cd0f5a2],input[type=number][data-v-9cd0f5a2],input[type=password][data-v-9cd0f5a2],input[type=search][data-v-9cd0f5a2],input[type=search][data-v-9cd0f5a2]::-webkit-search-cancel-button,input[type=search][data-v-9cd0f5a2]::-webkit-search-decoration,input[type=tel][data-v-9cd0f5a2],input[type=text][data-v-9cd0f5a2],textarea[data-v-9cd0f5a2]{border-radius:0;appearance:none;-webkit-appearance:none;border:0;font-size:1.4rem;outline-width:0!important;-webkit-outline-width:0;-webkit-border-radius:0;box-sizing:border-box}select[data-v-9cd0f5a2]{border-radius:0;-webkit-border-radius:0}input[type=number][data-v-9cd0f5a2]::-webkit-inner-spin-button,input[type=number][data-v-9cd0f5a2]::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}input[type=email][data-v-9cd0f5a2],input[type=number][data-v-9cd0f5a2],input[type=password][data-v-9cd0f5a2],input[type=search][data-v-9cd0f5a2],input[type=tel][data-v-9cd0f5a2],input[type=text][data-v-9cd0f5a2]{border-bottom:1px solid #ddd}input[data-v-9cd0f5a2]:-webkit-autofill,input[data-v-9cd0f5a2]:-webkit-autofill:active,input[data-v-9cd0f5a2]:-webkit-autofill:focus,input[data-v-9cd0f5a2]:-webkit-autofill:hover{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}[data-v-9cd0f5a2]::-webkit-input-placeholder{color:#ddd}input[data-v-9cd0f5a2]:-ms-input-placeholder{color:#ddd}body[data-v-9cd0f5a2],html[data-v-9cd0f5a2]{min-width:320px;width:100%;height:100%;background-color:#f5f6fa;color:#676767;font-family:"Noto Sans KR",sans-serif;font-weight:400;-webkit-text-size-adjust:none}html[data-v-9cd0f5a2]{font-size:62.5%}body[data-v-9cd0f5a2]{position:relative;font-size:1.3rem;line-height:1.4}#page[data-v-9cd0f5a2]{display:flex;display:-webkit-flex;flex-direction:column;width:100%;min-height:100%;height:100vh;padding-top:56px;box-sizing:border-box}#content[data-v-9cd0f5a2]{flex:1 0 auto;-webkit-flex:1 0 auto;margin-bottom:80px}body.lyrOpen #page[data-v-9cd0f5a2]{position:fixed;right:0;bottom:0;left:0;overflow:hidden}#dim_bg[data-v-9cd0f5a2]{position:fixed;top:0;left:0;z-index:100;width:100%;height:100%;background:rgba(45,45,45,.9)}img[data-v-9cd0f5a2]{vertical-align:top}.ta-l[data-v-9cd0f5a2]{text-align:left!important}.ta-c[data-v-9cd0f5a2]{text-align:center!important}.ta-r[data-v-9cd0f5a2]{text-align:right!important}.va-t[data-v-9cd0f5a2]{vertical-align:top!important}.va-m[data-v-9cd0f5a2]{vertical-align:middle!important}.va-b[data-v-9cd0f5a2]{vertical-align:bottom!important}.va-bl[data-v-9cd0f5a2]{vertical-align:baseline!important}.block-vm[data-v-9cd0f5a2]{height:100%}.block-vm[data-v-9cd0f5a2]:before{content:"";width:.01%;height:100%}.block-vm-inner[data-v-9cd0f5a2],.block-vm[data-v-9cd0f5a2]:before{display:inline-block;vertical-align:middle}.trans-xy[data-v-9cd0f5a2]{top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translateX(-50%,-50%)}.trans-x[data-v-9cd0f5a2]{left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%)}.trans-y[data-v-9cd0f5a2]{top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.hide[data-v-9cd0f5a2]{display:none!important}.fl-l[data-v-9cd0f5a2]{float:left}.fl-r[data-v-9cd0f5a2]{float:right}.clear[data-v-9cd0f5a2]:after{display:block;clear:both;content:""}.ellipsis[data-v-9cd0f5a2]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.v-hidden[data-v-9cd0f5a2]{visibility:hidden;overflow:hidden;position:absolute;left:-1000%;top:auto;width:1px;height:1px}caption.v-hidden[data-v-9cd0f5a2]{position:relative}.transition-normal[data-v-9cd0f5a2]{transition:all .3s;-webkit-transition:all .3s}.transition-slow[data-v-9cd0f5a2]{transition:all 1s;-webkit-transition:all 1s}a.skip[data-v-9cd0f5a2]{display:block;position:absolute;top:-1px;z-index:999;width:0;height:0;overflow:hidden;text-align:center}a.skip[data-v-9cd0f5a2]:active,a.skip[data-v-9cd0f5a2]:focus{z-index:999;width:100%;height:auto;padding:5px;background:#fff}.no-margin[data-v-9cd0f5a2]{margin:0!important}.no-padding[data-v-9cd0f5a2]{padding:0!important}.mt-5[data-v-9cd0f5a2]{margin-top:5px!important}.mt-10[data-v-9cd0f5a2]{margin-top:10px!important}.mt-20[data-v-9cd0f5a2]{margin-top:20px!important}.mt-30[data-v-9cd0f5a2]{margin-top:30px!important}.mt-40[data-v-9cd0f5a2]{margin-top:40px!important}.mt-50[data-v-9cd0f5a2]{margin-top:50px!important}.mt-60[data-v-9cd0f5a2]{margin-top:60px!important}.mt-70[data-v-9cd0f5a2]{margin-top:70px!important}.mt-80[data-v-9cd0f5a2]{margin-top:80px!important}.mt-90[data-v-9cd0f5a2]{margin-top:90px!important}.mt-100[data-v-9cd0f5a2]{margin-top:100px!important}.mb-5[data-v-9cd0f5a2]{margin-bottom:5px!important}.mb-10[data-v-9cd0f5a2]{margin-bottom:10px!important}.mb-20[data-v-9cd0f5a2]{margin-bottom:20px!important}.mb-30[data-v-9cd0f5a2]{margin-bottom:30px!important}.mb-40[data-v-9cd0f5a2]{margin-bottom:40px!important}.mb-50[data-v-9cd0f5a2]{margin-bottom:50px!important}.mb-60[data-v-9cd0f5a2]{margin-bottom:60px!important}.mb-70[data-v-9cd0f5a2]{margin-bottom:70px!important}.mb-80[data-v-9cd0f5a2]{margin-bottom:80px!important}.mb-90[data-v-9cd0f5a2]{margin-bottom:90px!important}.mb-100[data-v-9cd0f5a2]{margin-bottom:100px!important}.ml-5[data-v-9cd0f5a2]{margin-left:5px!important}.ml-10[data-v-9cd0f5a2]{margin-left:10px!important}.ml-20[data-v-9cd0f5a2]{margin-left:20px!important}.ml-30[data-v-9cd0f5a2]{margin-left:30px!important}.ml-40[data-v-9cd0f5a2]{margin-left:40px!important}.ml-50[data-v-9cd0f5a2]{margin-left:50px!important}.ml-60[data-v-9cd0f5a2]{margin-left:60px!important}.ml-70[data-v-9cd0f5a2]{margin-left:70px!important}.ml-80[data-v-9cd0f5a2]{margin-left:80px!important}.ml-90[data-v-9cd0f5a2]{margin-left:90px!important}.ml-100[data-v-9cd0f5a2]{margin-left:100px!important}.mr-5[data-v-9cd0f5a2]{margin-right:5px!important}.mr-10[data-v-9cd0f5a2]{margin-right:10px!important}.mr-20[data-v-9cd0f5a2]{margin-right:20px!important}.mr-30[data-v-9cd0f5a2]{margin-right:30px!important}.mr-40[data-v-9cd0f5a2]{margin-right:40px!important}.mr-50[data-v-9cd0f5a2]{margin-right:50px!important}.mr-60[data-v-9cd0f5a2]{margin-right:60px!important}.mr-70[data-v-9cd0f5a2]{margin-right:70px!important}.mr-80[data-v-9cd0f5a2]{margin-right:80px!important}.mr-90[data-v-9cd0f5a2]{margin-right:90px!important}.mr-100[data-v-9cd0f5a2]{margin-right:100px!important}.fz-10[data-v-9cd0f5a2]{font-size:1rem}.fz-11[data-v-9cd0f5a2]{font-size:1.1rem}.fz-12[data-v-9cd0f5a2]{font-size:1.2rem}.fz-13[data-v-9cd0f5a2]{font-size:1.3rem}.fz-14[data-v-9cd0f5a2]{font-size:1.4rem}.fz-15[data-v-9cd0f5a2]{font-size:1.5rem}.fz-16[data-v-9cd0f5a2]{font-size:1.6rem}.fz-17[data-v-9cd0f5a2]{font-size:1.7rem}.fz-18[data-v-9cd0f5a2]{font-size:1.8rem}.fz-20[data-v-9cd0f5a2]{font-size:2rem}.fz-22[data-v-9cd0f5a2]{font-size:2.2rem}.fz-24[data-v-9cd0f5a2]{font-size:2.4rem}.fw-400[data-v-9cd0f5a2]{font-weight:400}.fw-700[data-v-9cd0f5a2]{font-weight:700}.fc-gray[data-v-9cd0f5a2]{color:#858585}.fc-lightgray[data-v-9cd0f5a2]{color:#aaa}.fc-blue[data-v-9cd0f5a2]{color:#009dd1}.w20-per[data-v-9cd0f5a2]{width:20%}.w25-per[data-v-9cd0f5a2]{width:25%}.w33-per[data-v-9cd0f5a2]{width:33.33%}.w50-per[data-v-9cd0f5a2]{width:50%}.w66-per[data-v-9cd0f5a2]{width:66.66%}.w75-per[data-v-9cd0f5a2]{width:75%}.w100-per[data-v-9cd0f5a2]{width:100%!important}.flex[data-v-9cd0f5a2]{display:flex}.flex-justify-between[data-v-9cd0f5a2]{justify-content:space-between}.checkbox-wrap[data-v-9cd0f5a2],.input-basic .checkbox-wrap[data-v-9cd0f5a2]{position:relative}.checkbox-wrap input[data-v-9cd0f5a2],.input-basic .checkbox-wrap input[data-v-9cd0f5a2]{width:0;height:0}.checkbox-wrap input:checked+label[data-v-9cd0f5a2]{background-position-y:-16px}.checkbox-wrap input:disabled+label[data-v-9cd0f5a2]{background-position-y:-32px}.checkbox-wrap label[data-v-9cd0f5a2],.input-basic .checkbox-wrap label[data-v-9cd0f5a2]{height:16px;position:absolute;top:0;left:0;padding-left:24px;background:url('+m+') no-repeat 0 0;background-size:16px 48px}.inner-wrap[data-v-9cd0f5a2]{padding:0 30px}.btn-basic[data-v-9cd0f5a2]{display:inline-block;text-align:center;border-radius:10px}.btn-basic.small[data-v-9cd0f5a2]{height:28px;line-height:28px}.btn-basic.medium[data-v-9cd0f5a2]{height:34px;line-height:34px}.btn-basic.big[data-v-9cd0f5a2]{height:42px;line-height:42px}.btn-basic.point[data-v-9cd0f5a2]{background-color:#3abfef;color:#fff}.btn-basic.point-red[data-v-9cd0f5a2]{background-color:#f579a4;color:#fff}.btn-basic.outline[data-v-9cd0f5a2]{border:1px solid #919191;color:#676767}.btn-basic.round[data-v-9cd0f5a2]{border-radius:25px}.page-top[data-v-9cd0f5a2]{display:flex;height:33px;justify-content:space-between;align-items:flex-end;margin-bottom:22px}.page-top .title[data-v-9cd0f5a2]{font-size:2.4rem;font-weight:500}.date-picker-wrap .mx-datepicker[data-v-9cd0f5a2]{width:140px}.date-picker-wrap .mx-input[data-v-9cd0f5a2]{width:140px;height:42px;border-radius:10px;box-sizing:border-box;border:1px solid #ccc;padding-left:15px;color:#676767}.date-picker-wrap .mx-icon-calendar[data-v-9cd0f5a2]{display:none}.date-picker-wrap .mx-input-wrapper[data-v-9cd0f5a2]:after{display:block;content:"";width:19px;height:21px;background:url('+f+") no-repeat 50%;background-size:cover;position:absolute;top:10px;right:10px}.date-picker-wrap .divider[data-v-9cd0f5a2]{margin:0 5px}.input-form[data-v-9cd0f5a2]{width:750px}.input-form .form-title[data-v-9cd0f5a2]{text-align:right;border-bottom:1px solid #919191;margin-bottom:40px}.input-form .form-title .title[data-v-9cd0f5a2]{font-size:1.5rem;margin-bottom:15px;font-weight:700}.input-form-row[data-v-9cd0f5a2]{margin-bottom:30px}.input-form-row.two-col[data-v-9cd0f5a2]{display:flex;justify-content:space-between}.input-form-row.two-col .input-basic[data-v-9cd0f5a2]{width:360px}.input-form .three-inputs[data-v-9cd0f5a2]{display:flex;justify-content:space-between}.input-form .three-inputs input[type=text][data-v-9cd0f5a2]{width:106px}.input-form .bottom-btns[data-v-9cd0f5a2]{text-align:center;margin:100px 0}.input-form .bottom-btns button[data-v-9cd0f5a2]{width:200px;margin:0 5px}.input-basic[data-v-9cd0f5a2]{position:relative}.input-basic label[data-v-9cd0f5a2]{display:block;font-size:1.2rem;font-weight:500;margin-bottom:10px}.input-basic input[type=text][data-v-9cd0f5a2]{display:inline-block;width:100%;height:42px;border-radius:10px;border:1px solid #ccc;box-sizing:border-box;padding-left:15px}.input-basic input[type=text].error[data-v-9cd0f5a2]{border-color:#f579a4}.input-basic textarea[data-v-9cd0f5a2]{display:inline-block;width:100%;height:150px;border-radius:10px;border:1px solid #ccc;box-sizing:border-box;padding:15px}.input-basic textarea.error[data-v-9cd0f5a2]{border-color:#f579a4}.input-basic .error-message[data-v-9cd0f5a2]{color:#f579a4}.input-basic .error-message[data-v-9cd0f5a2],.input-basic .usable-id[data-v-9cd0f5a2]{position:absolute;left:0;bottom:-20px;font-size:1.2rem}.input-basic .usable-id[data-v-9cd0f5a2]{color:#3abfef}.input-basic .business-hours[data-v-9cd0f5a2]{display:flex;justify-content:space-between;align-items:center}.input-basic .business-hours input[data-v-9cd0f5a2]{width:164px}.input-basic.with-btn[data-v-9cd0f5a2]{position:relative}.input-basic.with-btn .btn-basic.small[data-v-9cd0f5a2]{position:absolute;bottom:7px;right:7px}.input-phone[data-v-9cd0f5a2]{display:flex;justify-content:space-between;align-items:center;width:360px}.input-phone .dash[data-v-9cd0f5a2]{display:inline-block;margin:0 8px}.input-phone input[data-v-9cd0f5a2]{width:100px}.btn-radio[data-v-9cd0f5a2]{display:inline-block;height:42px;margin-right:20px}.btn-radio input[type=radio][data-v-9cd0f5a2]{width:0;height:0}.btn-radio input[type=radio]+label[data-v-9cd0f5a2]{height:16px;padding-left:24px;background-image:url("+v+");background-repeat:no-repeat;background-size:16px auto;background-position:0 0;cursor:pointer;margin-top:-4px}.btn-radio input[type=radio]:checked+label[data-v-9cd0f5a2]{color:#3abfef;font-weight:700;background-position-y:-16px}.input-address-wrap .postcode[data-v-9cd0f5a2]{display:flex;justify-content:space-between;width:360px;margin-bottom:10px}.input-address-wrap .postcode input[data-v-9cd0f5a2]{flex-grow:1}.input-address-wrap .postcode button[data-v-9cd0f5a2]{width:80px;flex-shrink:0;margin-left:15px}.input-address-wrap .basic-address[data-v-9cd0f5a2]{margin-bottom:10px}.input-address-wrap .detail-address[data-v-9cd0f5a2]{display:flex;justify-content:space-between;margin-bottom:10px}.input-address-wrap .detail-address input[data-v-9cd0f5a2]:first-child{flex-grow:1}.input-address-wrap .detail-address input[data-v-9cd0f5a2]:nth-child(2){width:260px;flex-shrink:0;margin-left:15px}.mx-input-wrapper .mx-icon-clear[data-v-9cd0f5a2]{display:none!important}.swiper-pagination-bullet-active[data-v-9cd0f5a2]{background-color:#333!important}.half-section[data-v-9cd0f5a2]{display:flex;justify-content:space-between}.half-section-con[data-v-9cd0f5a2]:first-child{width:49%}.half-section-con[data-v-9cd0f5a2]:nth-child(2){width:48%}.input-kiosk .row[data-v-9cd0f5a2]{display:flex;align-items:top;margin-bottom:15px}.input-kiosk .row.no-mb[data-v-9cd0f5a2]{margin-bottom:0}.input-kiosk .row .inputs-wrap[data-v-9cd0f5a2]{width:610px}.input-kiosk .row .num[data-v-9cd0f5a2]{font-size:1.3rem;font-weight:500;margin-top:12px;margin-right:10px}.input-kiosk .row input[data-v-9cd0f5a2]{margin-right:10px;margin-bottom:12px;width:200px}.input-kiosk .row .floor[data-v-9cd0f5a2]{width:120px}.input-kiosk .btn-control[data-v-9cd0f5a2]{height:18px;margin-top:12px;margin-left:8px}.input-kiosk .btn-control img[data-v-9cd0f5a2]{width:18px}.input-area-position[data-v-9cd0f5a2]{display:flex;justify-content:space-between}.input-area-position input[data-v-9cd0f5a2]{width:175px!important}.btn-delete-id[data-v-9cd0f5a2]{position:absolute;bottom:8px;right:88px}.btn-delete-id img[data-v-9cd0f5a2]{width:12px;height:12px}",""]),t.exports=e}}]);