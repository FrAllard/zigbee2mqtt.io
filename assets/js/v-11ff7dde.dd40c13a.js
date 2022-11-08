"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52684],{53686:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-11ff7dde",path:"/devices/CSM-300ZB_V2.html",title:"ShinaSystem CSM-300ZB_V2 control via MQTT",lang:"en-US",frontmatter:{title:"ShinaSystem CSM-300ZB_V2 control via MQTT",description:"Integrate your ShinaSystem CSM-300ZB_V2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-31T11:26:27.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Status (enum)",slug:"status-enum",children:[]},{level:3,title:"People (numeric)",slug:"people-numeric",children:[]},{level:3,title:"Rf_pairing_on (enum)",slug:"rf-pairing-on-enum",children:[]},{level:3,title:"Counting_freeze (binary)",slug:"counting-freeze-binary",children:[]},{level:3,title:"Tof_init (enum)",slug:"tof-init-enum",children:[]},{level:3,title:"Led_state (binary)",slug:"led-state-binary",children:[]},{level:3,title:"Rf_state (binary)",slug:"rf-state-binary",children:[]},{level:3,title:"Transaction (enum)",slug:"transaction-enum",children:[]},{level:3,title:"Fast_in (binary)",slug:"fast-in-binary",children:[]},{level:3,title:"Fast_out (binary)",slug:"fast-out-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/CSM-300ZB_V2.md",git:{updatedTime:1667921953e3}}},78430:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var o=a(66252);const i=(0,o.uE)('<h1 id="shinasystem-csm-300zb-v2" tabindex="-1"><a class="header-anchor" href="#shinasystem-csm-300zb-v2" aria-hidden="true">#</a> ShinaSystem CSM-300ZB_V2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>CSM-300ZB_V2</td></tr><tr><td>Vendor</td><td>ShinaSystem</td></tr><tr><td>Description</td><td>SiHAS multipurpose ToF sensor</td></tr><tr><td>Exposes</td><td>battery, voltage, status, people, rf_pairing_on, counting_freeze, tof_init, led_state, rf_state, transaction, fast_in, fast_out, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/CSM-300ZB_V2.jpg" alt="ShinaSystem CSM-300ZB_V2"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),d=(0,o.Uk)("This device supports OTA updates, for more information see "),s=(0,o.Uk)("OTA updates"),n=(0,o.Uk)("."),l=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum" aria-hidden="true">#</a> Status (enum)</h3><p>Currently status. Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>idle</code>, <code>in</code>, <code>out</code>.</p><h3 id="people-numeric" tabindex="-1"><a class="header-anchor" href="#people-numeric" aria-hidden="true">#</a> People (numeric)</h3><p>People count. Value can be found in the published state on the <code>people</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;people&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;people&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="rf-pairing-on-enum" tabindex="-1"><a class="header-anchor" href="#rf-pairing-on-enum" aria-hidden="true">#</a> Rf_pairing_on (enum)</h3><p>Run RF pairing mode. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_pairing_on&quot;: NEW_VALUE}</code>. The possible values are: <code>run</code>.</p><h3 id="counting-freeze-binary" tabindex="-1"><a class="header-anchor" href="#counting-freeze-binary" aria-hidden="true">#</a> Counting_freeze (binary)</h3><p>Counting Freeze ON/OFF, not reporting people value when is ON. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;counting_freeze&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> counting_freeze is ON, if <code>OFF</code> OFF.</p><h3 id="tof-init-enum" tabindex="-1"><a class="header-anchor" href="#tof-init-enum" aria-hidden="true">#</a> Tof_init (enum)</h3><p>ToF sensor initial. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tof_init&quot;: NEW_VALUE}</code>. The possible values are: <code>initial</code>.</p><h3 id="led-state-binary" tabindex="-1"><a class="header-anchor" href="#led-state-binary" aria-hidden="true">#</a> Led_state (binary)</h3><p>Indicate LED enable/disable, default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_state&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> led_state is ON, if <code>disable</code> OFF.</p><h3 id="rf-state-binary" tabindex="-1"><a class="header-anchor" href="#rf-state-binary" aria-hidden="true">#</a> Rf_state (binary)</h3><p>RF function enable/disable, default : disable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_state&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> rf_state is ON, if <code>disable</code> OFF.</p><h3 id="transaction-enum" tabindex="-1"><a class="header-anchor" href="#transaction-enum" aria-hidden="true">#</a> Transaction (enum)</h3><p>Transaction interval, default : 400ms. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transaction&quot;: NEW_VALUE}</code>. The possible values are: <code>0ms</code>, <code>200ms</code>, <code>400ms</code>, <code>600ms</code>, <code>800ms</code>, <code>1,000ms</code>.</p><h3 id="fast-in-binary" tabindex="-1"><a class="header-anchor" href="#fast-in-binary" aria-hidden="true">#</a> Fast_in (binary)</h3><p>Fast process enable/disable when people 0 to 1. default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fast_in&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> fast_in is ON, if <code>disable</code> OFF.</p><h3 id="fast-out-binary" tabindex="-1"><a class="header-anchor" href="#fast-out-binary" aria-hidden="true">#</a> Fast_out (binary)</h3><p>Fast process enable/disable when people 1 to 0. default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fast_out&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> fast_out is ON, if <code>disable</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',27),r={},c=(0,a(83744).Z)(r,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[d,(0,o.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[s])),_:1}),n]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);