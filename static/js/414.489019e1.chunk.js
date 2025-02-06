(self.webpackChunk_kne_components_phone_number_input=self.webpackChunk_kne_components_phone_number_input||[]).push([[414],{25764:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=25764,e.exports=n},69666:(e,n,o)=>{"use strict";o.d(n,{A:()=>a});var t=o(13050),r=o(78494);o(72241);const a={name:"phone-number-input",summary:'<h1>phone-number-input</h1>\n<h3>\u63cf\u8ff0</h3>\n<p>\u652f\u6301\u4e0d\u540c\u56fd\u5bb6\u7684\u624b\u673a\u53f7\u8f93\u5165\u53ca\u9a8c\u8bc1\u683c\u5f0f\u6b63\u786e\u6027</p>\n<h3>\u5b89\u88c5</h3>\n<pre><code class="language-shell">npm i --save @kne/phone-number-input\n</code></pre>',description:"\u652f\u6301\u4e0d\u540c\u56fd\u5bb6\u7684\u624b\u673a\u53f7\u8f93\u5165\u53ca\u9a8c\u8bc1\u683c\u5f0f\u6b63\u786e\u6027",packageName:"@kne/phone-number-input",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"phone_number_input_64b2b",style:"",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const {createWithRemoteLoader} = remoteLoader;\nconst {default: PhoneNumberInput, PHONE_NUMBER_INPUT} = _PhoneNumberInput;\n\nconst BaseExample = createWithRemoteLoader({\n    modules: [\'components-core:Global@PureGlobal\', \'components-core:FormInfo\']\n})(({remoteModules}) => {\n    const [PureGlobal, FormInfo] = remoteModules;\n    const {Form} = FormInfo;\n    return <PureGlobal preset={{\n        formInfo: () => {\n            return {\n                rules: {PHONE_NUMBER_INPUT}\n            };\n        }\n    }}>\n        <Form data={{\n            \'phone-string\':\'+86 18728277282\'\n        }}>\n            <FormInfo column={1} list={[\n                <PhoneNumberInput name="phone" label="\u624b\u673a\u53f7"/>,\n                <PhoneNumberInput name="phone-string" label="\u624b\u673a\u53f7(string)" format="string"/>\n            ]}/>\n        </Form>\n    </PureGlobal>;\n});\n\nrender(<BaseExample/>);\n\n',scope:[{name:"remoteLoader",packageName:"@kne/remote-loader",component:t},{name:"_PhoneNumberInput",packageName:"@kne/current-lib_phone-number-input",importStatement:'import * as _PhoneNumberInput from "@kne/phone-number-input"',component:r}]},{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const {createWithRemoteLoader} = remoteLoader;\nconst {CountrySelect} = _PhoneNumberInput;\n\nconst BaseExample = createWithRemoteLoader({\n    modules: ['components-core:Global@PureGlobal']\n})(({remoteModules}) => {\n    const [PureGlobal] = remoteModules;\n    return <PureGlobal preset={{\n        /*locale: 'en-US'*/\n    }}>\n        <CountrySelect onChange={(value)=>{\n            console.log(value);\n        }}/>\n    </PureGlobal>;\n});\n\nrender(<BaseExample/>);\n\n",scope:[{name:"remoteLoader",packageName:"@kne/remote-loader",component:t},{name:"_PhoneNumberInput",packageName:"@kne/current-lib_phone-number-input",importStatement:'import * as _PhoneNumberInput from "@kne/phone-number-input"',component:r}]},{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const {createWithRemoteLoader} = remoteLoader;\nconst {default: PhoneNumberInput} = _PhoneNumberInput;\n\nconst PhoneNumberInputField = PhoneNumberInput.Field;\nconst BaseExample = createWithRemoteLoader({\n    modules: ['components-core:Global@PureGlobal', 'components-core:InfoPage@CentralContent']\n})(({remoteModules}) => {\n    const [PureGlobal, CentralContent] = remoteModules;\n    return <PureGlobal preset={{/*locale: 'en-US'*/}}>\n        <CentralContent dataSource={{\n            'example1': <PhoneNumberInputField onChange={(value) => {\n                console.log(value);\n            }}/>,\n            'example2': <PhoneNumberInputField format=\"string\" onChange={(value) => {\n                console.log(value);\n            }}/>,\n            'example3': <PhoneNumberInputField format=\"string\" value=\"+86 13422782273\"/>\n        }} col={1} columns={[{\n            name: 'example1',\n            title: 'format\u4e3anormal'\n        }, {\n            name: 'example2',\n            title: 'format\u4e3astring'\n        }, {\n            name: 'example3',\n            title: '\u53d7\u63a7\u72b6\u6001'\n        }]}/>\n    </PureGlobal>;\n});\n\nrender(<BaseExample/>);\n\n",scope:[{name:"remoteLoader",packageName:"@kne/remote-loader",component:t},{name:"_PhoneNumberInput",packageName:"@kne/current-lib_phone-number-input",importStatement:'import * as _PhoneNumberInput from "@kne/phone-number-input"',component:r}]}]}}},11448:(e,n,o)=>{"use strict";var t=o(89379),r=o(94922),a=o.n(r),m=o(87558),l=o(55199),u=o(89946),p=o.n(u),s=o(13050),c=o(1488),d=o.n(c),i=o(89261);window.PUBLIC_URL="/phone-number-input";const h={url:"https://uc.fatalent.cn",tpl:"{{url}}/packages/@kne-components/{{remote}}/{{version}}/build"},b=(0,t.A)((0,t.A)({},h),{},{remote:"components-core",defaultVersion:"0.3.0"});(0,s.preset)({remotes:{default:b,"components-core":b,"components-iconfont":(0,t.A)((0,t.A)({},h),{},{remote:"components-iconfont",defaultVersion:"0.1.8"}),"phone-number-input":(0,t.A)((0,t.A)({},h),{},{remote:"phone-number-input",defaultVersion:"0.1.0"})}});const P=(()=>{const e=p().create({validateStatus:function(){return!0}});return n=>n.hasOwnProperty("loader")&&"function"===typeof n.loader?Promise.resolve(n.loader(d()(n,["loader"]))).then((e=>({data:{code:0,data:e}}))).catch((e=>(l.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:e.message}}))):e(n)})();(0,m.preset)({ajax:P,loading:(0,i.jsx)(l.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,i.jsx)(l.Empty,{}),transformResponse:e=>{const{data:n}=e;return e.data={code:0===n.code?200:n.code,msg:n.msg,results:n.data},e}});var f=o(65457),g=o(53986),N=o(94679),k=o(14152),_=o.n(k),I=(o(91296),o(46446));const x=["preset","themeToken"],v=_().ExampleRoutes,y=e=>{let{preset:n,themeToken:o}=e,r=(0,g.A)(e,x);return(0,i.jsx)(N.HashRouter,{children:(0,i.jsx)(v,(0,t.A)((0,t.A)({},r),{},{paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:n,themeToken:o,readme:I.default,pageProps:{menu:null}}))})};f.createRoot(document.getElementById("root")).render((0,i.jsx)(a().StrictMode,{children:(0,i.jsx)(y,{preset:{ajax:P},themeToken:{colorPrimary:"#4F185A"}})}))},72241:()=>{}}]);
//# sourceMappingURL=414.489019e1.chunk.js.map