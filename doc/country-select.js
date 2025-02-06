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
