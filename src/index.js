import React, { useMemo, forwardRef } from 'react';
import Fetch from '@kne/react-fetch';
import { Select, Input, Flex } from 'antd';
import parsePhoneNumberLib, { AsYouType } from 'libphonenumber-js';
import { hooks } from '@kne/react-form-antd';
import useSimulationBlur from '@kne/use-simulation-blur';
import useControlValue from '@kne/use-control-value';
import Icon from '@kne/react-icon';
import { useContext } from '@kne/global-context';
import get from 'lodash/get';
import { createWithIntlProvider, useIntl, createIntl, FormattedMessage } from '@kne/react-intl';
import zhCn from './locale/zh-CN';
import transform from './transform';
import style from './style.module.scss';

const { useDecorator } = hooks;

export const parsePhoneNumber = phoneNumber => {
  const { country, countryCallingCode, nationalNumber } = phoneNumber ? parsePhoneNumberLib(phoneNumber) : null;

  if (!nationalNumber || !phoneNumber) {
    return null;
  }
  return { country, countryCallingCode, nationalNumber };
};

export const PHONE_NUMBER_INPUT = async (value, { field }) => {
  const countries = await import('./country_flag/countries.json').then(module => module.default);
  const intl = createIntl({ namespace: 'phone-number-input' });
  const { input, countyCodeMap } = transform(countries);
  value = typeof value === 'string' ? input(value) : value;
  if ((field.rule || '').split(' ').indexOf('REQ') > -1 && !get(value, 'value')) {
    return { result: false, errMsg: label => <FormattedMessage id="notAllowedEmpty" values={{ label }} /> };
  }
  if (!get(value, 'value')) {
    return { result: true };
  }
  const result = await import('libphonenumber-js/max').then(({ isValidPhoneNumber }) => {
    return isValidPhoneNumber(get(value, 'value', ''), {
      defaultCountry: (get(value, 'code') && countyCodeMap.get(get(value, 'code'))) || 'CN',
      extract: true
    });
  });
  return {
    result,
    errMsg: label => <FormattedMessage id="incorrectFormat" values={{ label }} />
  };
};

export const withFetchCountries = WrappedComponent =>
  forwardRef(({ showFlag = true, ...props }, ref) => {
    return (
      <Fetch
        cache="phone-number-input/countries.json"
        data={{ showFlag }}
        loader={async ({ data }) => {
          data.showFlag && (await import('./country_flag/countries.js'));
          return await import('./country_flag/countries.json').then(module => module.default);
        }}
        render={({ data }) => {
          return <WrappedComponent {...props} showFlag={showFlag} countries={data} ref={ref} />;
        }}
      />
    );
  });

export const CountrySelect = createWithIntlProvider(
  'zh-CN',
  zhCn,
  'phone-number-input'
)(
  withFetchCountries(({ countries, showFlag, ...props }) => {
    const context = useContext();
    const { formatMessage } = useIntl();
    const locale = context?.locale || 'zh-CN';
    return (
      <Select
        placeholder={formatMessage({ id: 'placeholderCountry' })}
        popupMatchSelectWidth={300}
        {...props}
        className={style['country-select']}
        optionLabelProp="formatLabel"
        showSearch
        filterOption={(input, option) => {
          input = String(input).toLowerCase();
          return String(option.code).indexOf(input) > -1 || option.cnName.toLowerCase().indexOf(input) > -1 || option.enName.toLowerCase().indexOf(input) > -1 || option.ab.toLowerCase().indexOf(input) > -1;
        }}
        options={countries.map(({ country_name_cn, country_name_en, country_code, ab }) => {
          const name = locale === 'zh-CN' ? country_name_cn : country_name_en;
          return {
            value: country_code,
            code: country_code,
            ab,
            name,
            cnName: country_name_cn,
            enName: country_name_en,
            formatLabel: (
              <Flex gap={8} align="center">
                {showFlag && (
                  <Flex flex={0}>
                    <Icon colorful type={`icon-color-flag-${ab}`} />
                  </Flex>
                )}
                <span>(+{country_code})</span>
              </Flex>
            ),
            label: (
              <Flex gap={8} align="center">
                {showFlag && <Icon colorful type={`icon-color-flag-${ab}`} />}
                <span>{name}</span>
                <span>(+{country_code})</span>
              </Flex>
            )
          };
        })}
      />
    );
  })
);

const parsePhone = value => {
  const code = get(value, 'ab'),
    origin = get(value, 'value', '');
  if (!code) {
    return value;
  }
  const askType = new AsYouType(code);
  const target = askType.input(origin);
  return Object.assign({}, value, { value: (askType.isValid() ? target : origin) || '' });
};

const PhoneNumberInputField = createWithIntlProvider(
  'zh-CN',
  zhCn,
  'phone-number-input'
)(
  withFetchCountries(props => {
    //format: normal string
    const { className, onBlur, name, format, countries, defaultCountryCode = 86, showFlag, ...others } = props;

    const [baseValue, onChangeBase] = useControlValue(props);
    const ref = useSimulationBlur(onBlur || (() => {}));
    const { formatMessage } = useIntl();
    const [value, onChange] = useMemo(() => {
      const { input, output, countyCodeMap } = transform(countries, defaultCountryCode);
      if (format === 'string') {
        return [parsePhone(input(baseValue)), value => onChangeBase(output(value))];
      }
      return [parsePhone(Object.assign({}, baseValue, { ab: countyCodeMap.get(baseValue?.code) })), onChangeBase];
    }, [baseValue, format, countries, onChangeBase, defaultCountryCode]);

    return (
      <div className={className} ref={ref}>
        <Input
          {...others}
          placeholder={others.placeholder || formatMessage({ id: 'placeholderInput' }, { label: '' })}
          addonBefore={
            <CountrySelect
              disabled={others.disabled}
              readOnly={others.readOnly}
              value={get(value, 'code') || defaultCountryCode}
              onChange={code => {
                onChange &&
                  onChange(
                    Object.assign(
                      {},
                      value,
                      parsePhone({
                        code,
                        value: get(value, 'value', '')
                      })
                    )
                  );
                onBlur && onBlur();
              }}
            />
          }
          value={get(value, 'value', '')}
          onChange={e => {
            onChange &&
              onChange(
                Object.assign({}, value, {
                  value: e.target.value,
                  code: get(value, 'code') || defaultCountryCode
                })
              );
          }}
          onBlur={onBlur}
        />
      </div>
    );
  })
);

const PhoneNumberInput = createWithIntlProvider(
  'zh-CN',
  zhCn,
  'phone-number-input'
)(({ rule, ...props }) => {
  const { formatMessage } = useIntl();
  const render = useDecorator(
    Object.assign(
      {
        placeholder: formatMessage({ id: 'placeholderInput' }, { label: props.label }),
        rule: (rule => {
          const rules = (rule || '').split(' ');
          const reqIndex = rules.indexOf('REQ');
          if (reqIndex > -1) {
            rules.splice(reqIndex + 1, 0, 'PHONE_NUMBER_INPUT');
          } else {
            rules.unshift('PHONE_NUMBER_INPUT');
          }
          return rules.join(' ');
        })(rule)
      },
      props
    )
  );
  return render(PhoneNumberInputField);
});

PhoneNumberInput.Field = PhoneNumberInputField;

export default PhoneNumberInput;
