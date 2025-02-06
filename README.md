
# phone-number-input


### 描述

支持不同国家的手机号输入及验证格式正确性


### 安装

```shell
npm i --save @kne/phone-number-input
```

### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- remoteLoader(@kne/remote-loader),_PhoneNumberInput(@kne/current-lib_phone-number-input)[import * as _PhoneNumberInput from "@kne/phone-number-input"],(@kne/current-lib_phone-number-input/dist/index.css)

```jsx
const {createWithRemoteLoader} = remoteLoader;
const {default: PhoneNumberInput, PHONE_NUMBER_INPUT} = _PhoneNumberInput;

const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal', 'components-core:FormInfo']
})(({remoteModules}) => {
    const [PureGlobal, FormInfo] = remoteModules;
    const {Form} = FormInfo;
    return <PureGlobal preset={{
        formInfo: () => {
            return {
                rules: {PHONE_NUMBER_INPUT}
            };
        }
    }}>
        <Form data={{
            'phone-string':'+86 18728277282'
        }}>
            <FormInfo column={1} list={[
                <PhoneNumberInput name="phone" label="手机号"/>,
                <PhoneNumberInput name="phone-string" label="手机号(string)" format="string"/>
            ]}/>
        </Form>
    </PureGlobal>;
});

render(<BaseExample/>);

```

- 这里填写示例标题
- 这里填写示例说明
- remoteLoader(@kne/remote-loader),_PhoneNumberInput(@kne/current-lib_phone-number-input)[import * as _PhoneNumberInput from "@kne/phone-number-input"],(@kne/current-lib_phone-number-input/dist/index.css)

```jsx
const {createWithRemoteLoader} = remoteLoader;
const {CountrySelect} = _PhoneNumberInput;

const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal']
})(({remoteModules}) => {
    const [PureGlobal] = remoteModules;
    return <PureGlobal preset={{
        /*locale: 'en-US'*/
    }}>
        <CountrySelect onChange={(value)=>{
            console.log(value);
        }}/>
    </PureGlobal>;
});

render(<BaseExample/>);

```

- 这里填写示例标题
- 这里填写示例说明
- remoteLoader(@kne/remote-loader),_PhoneNumberInput(@kne/current-lib_phone-number-input)[import * as _PhoneNumberInput from "@kne/phone-number-input"],(@kne/current-lib_phone-number-input/dist/index.css)

```jsx
const {createWithRemoteLoader} = remoteLoader;
const {default: PhoneNumberInput} = _PhoneNumberInput;

const PhoneNumberInputField = PhoneNumberInput.Field;
const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal', 'components-core:InfoPage@CentralContent']
})(({remoteModules}) => {
    const [PureGlobal, CentralContent] = remoteModules;
    return <PureGlobal preset={{/*locale: 'en-US'*/}}>
        <CentralContent dataSource={{
            'example1': <PhoneNumberInputField onChange={(value) => {
                console.log(value);
            }}/>,
            'example2': <PhoneNumberInputField format="string" onChange={(value) => {
                console.log(value);
            }}/>,
            'example3': <PhoneNumberInputField format="string" value="+86 13422782273"/>
        }} col={1} columns={[{
            name: 'example1',
            title: 'format为normal'
        }, {
            name: 'example2',
            title: 'format为string'
        }, {
            name: 'example3',
            title: '受控状态'
        }]}/>
    </PureGlobal>;
});

render(<BaseExample/>);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
|-----|----|----|-----|
|     |    |    |     |

