const transform = (countries, defaultCountryCode = 86) => {
  const countyCodeMap = new Map(countries.map(({ ab, country_code }) => [country_code, ab]));
  const input = value => {
    if (!value) {
      return {};
    }

    const matcher = value.match(/^\+(\d+)\s(.*)/);
    if (!(matcher && matcher.length >= 3)) {
      return { code: countyCodeMap.get(defaultCountryCode), value };
    }
    return { code: Number(matcher[1]), ab: countyCodeMap.get(Number(matcher[1])), value: matcher[2] };
  };

  const output = value => {
    if (!value?.code) {
      return `+${defaultCountryCode}`;
    }

    return `+${value.code} ${(value.value || '').replace(/\s+/g, '')}`;
  };

  return { input, output, countyCodeMap };
};

export default transform;
