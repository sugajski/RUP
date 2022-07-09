import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import moment from 'moment';
import 'moment/min/locales.min';
import get from 'lodash/get';

import pl from './pl.json';

const polishLanguageCode = 'pl';

const supportedLanguages = [polishLanguageCode];

const locales = RNLocalize.getLocales();
const systemLanguageCode = get(locales, '0.languageCode', null);

const languageToSet = supportedLanguages.find(supportedLanguage => supportedLanguage === systemLanguageCode)
    ? systemLanguageCode
    : polishLanguageCode;

I18n.locale = languageToSet;
moment.locale(languageToSet);

I18n.fallbacks = true;
I18n.translations = { pl };

const Localization = I18n;

export default Localization;
