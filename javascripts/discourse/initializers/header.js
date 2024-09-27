import { withPluginApi } from "discourse/lib/plugin-api";
import { iconNode } from "discourse-common/lib/icon-library";

export default {
  name: 'header-initializer',

  initialize() {
    withPluginApi("0.8.14", (api) => {
      api.onPageChange(() => {
        const btnSidebarToggle = document.querySelector('.d-header .btn-sidebar-toggle');
        if (btnSidebarToggle) {
          btnSidebarToggle.className = "btn-sidebar-toggle "
          btnSidebarToggle.innerHTML = '<md-ripple></md-ripple><md-icon translate="no" style="color: var(--md-sys-color-on-primary)">menu</md-icon>';
        }

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