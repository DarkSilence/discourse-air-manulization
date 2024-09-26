import DButton from "discourse/components/d-button";
import { apiInitializer } from "discourse/lib/api";
import i18n from "discourse-common/helpers/i18n";

export default apiInitializer("1.0", (api) => {
  api.headerIcons.add(
    "some-unique-name",
    <template>
      <li><a href="" title="" class="page-header__menu-button"><md-ripple></md-ripple>{{i18n (themePrefix "js.menu.buttons.community.text")}}</a></li>
    </template>,
    { before: "chat" }
  );
});