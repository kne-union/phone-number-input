<!--START_SECTION:DOC_MD-->

# phone-number-input

### 描述

支持不同国家的手机号输入及验证格式正确性

### 安装

```shell
npm i --save @kne/phone-number-input
```

### 概述

支持不同国家的手机号输入及验证格式正确性。

#### 主要功能
- 解析手机号码，提取国家代码、国家区号和手机号。
- 验证手机号码格式是否正确。
- 转换手机号码格式以适应不同国家的输入需求。

### 示例

#### 示例代码

- 基本用法
- 展示手机号输入框的基本用法，支持普通格式和字符串格式输入，以及大中小三种大小切换。
- remoteLoader(@kne/remote-loader),_PhoneNumberInput(@kne/current-lib_phone-number-input)[import * as _PhoneNumberInput from "@kne/phone-number-input"],antd(antd),(@kne/current-lib_phone-number-input/dist/index.css)

```jsx
const {createWithRemoteLoader} = remoteLoader;
const {default: PhoneNumberInput, PHONE_NUMBER_INPUT} = _PhoneNumberInput;
const {Radio, Flex} = antd;

const BaseExample = createWithRemoteLoader({
    modules: ['components-core:Global@PureGlobal', 'components-core:FormInfo']
})(({remoteModules}) => {
    const [PureGlobal, FormInfo] = remoteModules;
    const {Form} = FormInfo;
    const [size, setSize] = React.useState('middle');

    return <PureGlobal preset={{
        formInfo: () => {
            return {
                rules: {PHONE_NUMBER_INPUT}
            };
        }
    }}>
        <Flex gap={16} vertical style={{marginBottom: 16}}>
            <div>组件大小：</div>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)} optionType="button" buttonStyle="solid">
                <Radio.Button value="small">小号</Radio.Button>
                <Radio.Button value="middle">中号</Radio.Button>
                <Radio.Button value="large">大号</Radio.Button>
            </Radio.Group>
        </Flex>
        <Form size={size} data={{
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

- 国家选择
- 展示国家选择组件的用法，支持选择国家并输出结果。
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

- 表单字段
- 展示手机号输入框的表单字段用法，支持不同格式和受控状态。
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

- 初始化无区号写回默认区号
- 表单以 17010101010 等无区号号码初始化时，界面显示默认中国 (+86)，提交值应同步带上 +86。
- remoteLoader(@kne/remote-loader),_PhoneNumberInput(@kne/current-lib_phone-number-input)[import * as _PhoneNumberInput from "@kne/phone-number-input"],antd(antd),(@kne/current-lib_phone-number-input/dist/index.css)

```jsx
const { createWithRemoteLoader } = remoteLoader;
const { default: PhoneNumberInput, PHONE_NUMBER_INPUT } = _PhoneNumberInput;
const { Flex, Typography } = antd;

const InitDefaultCodeExample = createWithRemoteLoader({
  modules: ['components-core:Global@PureGlobal', 'components-core:FormInfo']
})(({ remoteModules }) => {
  const [PureGlobal, FormInfo] = remoteModules;
  const { Form, SubmitButton } = FormInfo;
  const [lastSubmit, setLastSubmit] = React.useState(null);

  return (
    <PureGlobal
      preset={{
        formInfo: () => ({
          rules: { PHONE_NUMBER_INPUT }
        })
      }}
    >
      <Flex gap={16} vertical>
        <Typography.Paragraph>
          表单以无区号国内号初始化（如 <Typography.Text code>17010101010</Typography.Text>
          ）。界面默认区号为中国 (+86)，提交结果应带上 <Typography.Text code>+86</Typography.Text>。
        </Typography.Paragraph>
        <Form
          data={{
            'phone-string': '17010101010',
            phone: { value: '17010101010' }
          }}
          onSubmit={data => {
            console.log('submit', data);
            setLastSubmit(data);
          }}
        >
          <FormInfo
            column={1}
            list={[
              <PhoneNumberInput name="phone-string" label="手机号(string 初始化无区号)" format="string" rule="REQ" />,
              <PhoneNumberInput name="phone" label="手机号(object 初始化无 code)" rule="REQ" />
            ]}
          />
          <SubmitButton>提交查看结果</SubmitButton>
        </Form>
        {lastSubmit && (
          <Typography.Paragraph>
            <Typography.Text strong>最近一次提交：</Typography.Text>
            <pre style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 4 }}>
              {JSON.stringify(lastSubmit, null, 2)}
            </pre>
          </Typography.Paragraph>
        )}
      </Flex>
    </PureGlobal>
  );
});

render(<InitDefaultCodeExample />);

```

- 国际化
- 展示手机号输入框的国际化功能，支持中文和英文两种语言切换。
- remoteLoader(@kne/remote-loader),_PhoneNumberInput(@kne/current-lib_phone-number-input)[import * as _PhoneNumberInput from "@kne/phone-number-input"],(@kne/current-lib_phone-number-input/dist/index.css)

```jsx
const { createWithRemoteLoader } = remoteLoader;
const { default: PhoneNumberInput, PHONE_NUMBER_INPUT } = _PhoneNumberInput;

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Global@PureGlobal', 'components-core:FormInfo']
})(({ remoteModules }) => {
  const [PureGlobal, FormInfo] = remoteModules;
  const { Form } = FormInfo;
  return (
    <>
      <PureGlobal
        preset={{
          locale: 'en-US',
          formInfo: () => {
            return {
              rules: { PHONE_NUMBER_INPUT }
            };
          }
        }}>
        <Form
          data={{
            'phone-string': '+86 18728277282'
          }}>
          <FormInfo column={1} list={[<PhoneNumberInput name="phone" label="Phone" />]} />
        </Form>
      </PureGlobal>
      <PureGlobal
        preset={{
          locale: 'zh-CN',
          formInfo: () => {
            return {
              rules: { PHONE_NUMBER_INPUT }
            };
          }
        }}>
        <Form
          data={{
            'phone-string': '+86 18728277282'
          }}>
          <FormInfo column={1} list={[<PhoneNumberInput name="phone" label="电话" />]} />
        </Form>
      </PureGlobal>
    </>
  );
});

render(<BaseExample />);

```

### API

#### `parsePhoneNumber(phoneNumber)`

| 参数 | 类型 | 描述 |
|------|------|------|
| `phoneNumber` | `string` | 需要解析的手机号码字符串 |

**返回值**: 包含以下字段的对象：
- `country`: 国家代码
- `countryCallingCode`: 国家区号
- `nationalNumber`: 手机号

#### `PHONE_NUMBER_INPUT(value, { field })`

| 参数 | 类型 | 描述 |
|------|------|------|
| `value` | `string` 或 `object` | 手机号码字符串或对象 |
| `field` | `object` | 包含验证规则的对象 |

**返回值**: 包含以下字段的对象：
- `result`: 验证结果（`true` 或 `false`）
- `errMsg`: 错误信息

#### `transform(countries, defaultCountryCode = 86)`

| 参数 | 类型 | 描述 |
|------|------|------|
| `countries` | `array` | 国家代码映射表 |
| `defaultCountryCode` | `number` | 默认国家区号（默认为86） |

**返回值**: 包含以下字段的对象：
- `input`: 输入转换函数
- `output`: 输出转换函数
- `countyCodeMap`: 国家代码映射表

<!--END_SECTION:DOC_MD-->
