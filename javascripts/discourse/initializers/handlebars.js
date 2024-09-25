import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: 'header-initializer',

  initialize() {
    withPluginApi("0.8.14", (api) => {
      api.onAppEvent('mount:composer', () => {
        Handlebars.registerHelper('getLocale', function(options) {
          return I18n.currentLocale();
        });
        Handlebars.registerHelper('getBaseDomain', function(options) {
          return new Handlebars.SafeString(I18n.currentLocale() === 'ru' ? 'manulization.ru' : 'manulization.com');
        });
      });
    });
  }
};

