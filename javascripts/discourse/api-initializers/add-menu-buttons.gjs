import DButton from "discourse/components/d-button";
import { apiInitializer } from "discourse/lib/api";
import i18n from "discourse-common/helpers/i18n";

export default apiInitializer("1.0", (api) => {
  api.headerIcons.add(
    "community-link-menu",
    <template>
      <li><a href="{{i18n (themePrefix "js.menu.buttons.community.href")}}" title="{{i18n (themePrefix "js.menu.buttons.community.title")}}" class="d-header-menu-button"><md-ripple></md-ripple>{{i18n (themePrefix "js.menu.buttons.community.text")}}</a></li>
    </template>,
    { before: "chat" }
  );
});