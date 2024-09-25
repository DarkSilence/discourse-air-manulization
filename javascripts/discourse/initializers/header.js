export default {
  name: 'header-initializer',
  initialize() {
    api.onPageChange(() => {
      const locale = I18n.currentLocale(); // Get the user's locale

      // Define URLs based on the locale
      if (locale === 'ru') {
        Discourse.SiteSettings.hrefMenuLocale = '';
        Discourse.SiteSettings.hrefMenuVideo = 'https://manulization.ru/manul-videos/';
        Discourse.SiteSettings.hrefMenuPhoto = 'https://manulization.ru/manul-photos/';
        Discourse.SiteSettings.hrefMenuZoos = 'https://manulization.ru/zoos';
        Discourse.SiteSettings.hrefMenuMap = 'https://manulization.ru/map';
      } else {
        Discourse.SiteSettings.hrefMenuLocale = '';
        Discourse.SiteSettings.hrefMenuVideo = 'https://manulization.com/manul-videos/';
        Discourse.SiteSettings.hrefMenuPhoto = 'https://manulization.com/manul-photos/';
        Discourse.SiteSettings.hrefMenuZoos = 'https://manulization.com/zoos';
        Discourse.SiteSettings.hrefMenuMap = 'https://manulization.com/map';
      }
    });
  }
};