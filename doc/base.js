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
