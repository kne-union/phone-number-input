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
