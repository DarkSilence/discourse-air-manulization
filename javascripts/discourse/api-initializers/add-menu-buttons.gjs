import DButton from "discourse/components/d-button";
import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0", (api) => {
  api.headerIcons.add("some-unique-name", <template>
    <li><a href="{{ theme-i18n 'js.menu.buttons.map.href' }}" title="{{theme-i18n 'js.menu.buttons.map.title'}}" class="page-header__menu-button"><md-ripple></md-ripple>{{theme-i18n 'js.menu.buttons.map.text'}}</a></li>
  </template>, { before: "chat" });
});