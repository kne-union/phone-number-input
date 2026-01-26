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
