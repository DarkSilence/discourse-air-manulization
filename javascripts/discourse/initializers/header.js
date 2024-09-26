import { withPluginApi } from "discourse/lib/plugin-api";
import { iconNode } from "discourse-common/lib/icon-library";

export default {
  name: 'header-initializer',

  initialize() {
    withPluginApi("0.8.14", (api) => {
        console.log(0);
      api.headerIcons.add("some-unique-name", <template>
    <li><DButton class="icon btn-flat" @href="/u" @icon="address-book" /></li>
  </template>);

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