import { registerRawHelper } from "discourse-common/lib/helpers";

export default {
  name: 'handlebars-helpers-initializer',

  initialize() {
    // Register helpers using the modern API
    registerRawHelper("getLocale", () => {
      return I18n.currentLocale();
    });
    
    registerRawHelper("getBaseDomain", () => {
      return I18n.currentLocale() === 'ru' ? 'manulization.ru' : 'manulization.com';
    });
  }
};

