"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62234],{58348:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-e7bc1360",path:"/devices/TS0043.html",title:"TuYa TS0043 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0043 control via MQTT",description:"Integrate your TuYa TS0043 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-08-11T22:17:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0043.md",git:{updatedTime:1667921953e3}}},7413:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});const i=(0,a(66252).uE)('<h1 id="tuya-ts0043" tabindex="-1"><a class="header-anchor" href="#tuya-ts0043" aria-hidden="true">#</a> TuYa TS0043</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0043</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Wireless switch with 3 buttons</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0043.jpg" alt="TuYa TS0043"></td></tr><tr><td>White-label</td><td>Smart9 S9TSZGB, Lonsonho TS0043, LoraTap SS600ZB</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pairing may differ per model (TS0043 also comes as white-label device such as the LoraTap SS600ZB).</p><h4 id="loratap-ss600zb" tabindex="-1"><a class="header-anchor" href="#loratap-ss600zb" aria-hidden="true">#</a> LoraTap SS600ZB:</h4><p>Open the shell of the remote (remove the screw at the back first). Press the pairing button on the PCB for 5-10 seconds until the yellow indicator light flashes, then release it. While pairing, keep the remote close to the coordinator.</p><h4 id="lonsonho-ts0043" tabindex="-1"><a class="header-anchor" href="#lonsonho-ts0043" aria-hidden="true">#</a> Lonsonho TS0043</h4><p>This device has no pairing button on the PCB. Hold the left touch button for 10 seconds to pairing mode.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_single</code>, <code>1_double</code>, <code>1_hold</code>, <code>2_single</code>, <code>2_double</code>, <code>2_hold</code>, <code>3_single</code>, <code>3_double</code>, <code>3_hold</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),o={},d=(0,a(83744).Z)(o,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);