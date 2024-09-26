import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: 'header-initializer',

  initialize() {
    withPluginApi("0.8.14", (api) => {
      api.decorateWidget('header-buttons:after', helper => {
      console.log("1");
        return helper.h('li.custom-login-button-li', [
            helper.h('a.custom-login-button', { href: 'ENTER URL HERE', target: '_blank'}, 'Button')
        ]);
      });
      api.onPageChange(() => {
        // const locale = I18n.currentLocale(); // Get the user's locale
        //
        // // Define URLs based on the locale
        // if (locale === 'ru') {
        //   Discourse.SiteSettings.hrefMenuLocale = '';
        //   Discourse.SiteSettings.hrefMenuVideo = 'https://manulization.ru/manul-videos/';
        //   Discourse.SiteSettings.hrefMenuPhoto = 'https://manulization.ru/manul-photos/';
        //   Discourse.SiteSettings.hrefMenuZoos = 'https://manulization.ru/zoos';
        //   Discourse.SiteSettings.hrefMenuMap = 'https://manulization.ru/map';
        // } else {
        //   Discourse.SiteSettings.hrefMenuLocale = '';
        //   Discourse.SiteSettings.hrefMenuVideo = 'https://manulization.com/manul-videos/';
        //   Discourse.SiteSettings.hrefMenuPhoto = 'https://manulization.com/manul-photos/';
        //   Discourse.SiteSettings.hrefMenuZoos = 'https://manulization.com/zoos';
        //   Discourse.SiteSettings.hrefMenuMap = 'https://manulization.com/map';
        // }
      });
    });
  }
};