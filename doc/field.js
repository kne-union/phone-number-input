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
