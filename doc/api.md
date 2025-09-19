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