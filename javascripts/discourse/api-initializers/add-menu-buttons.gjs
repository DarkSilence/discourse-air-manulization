import DButton from "discourse/components/d-button";
import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0", (api) => {
  api.headerIcons.add("some-unique-name", <template>
    <li><a href="{{ i18n (themePrefix 'js.menu.buttons.map.href') }}" title="{{i18n (themePrefix 'js.menu.buttons.map.title')}}" class="page-header__menu-button"><md-ripple></md-ripple>{{i18n (themePrefix 'js.menu.buttons.map.text')}}</a></li>
  </template>);
});