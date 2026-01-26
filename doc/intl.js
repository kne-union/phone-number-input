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
