import { apiInitializer } from "discourse/lib/api";
import i18n from "discourse-common/helpers/i18n";

export default apiInitializer("1.0.0", (api) => {
  api.headerIcons.add(
    "contacts",
    <template>
      <li class="d-header-community-element">
        <a href={{i18n (themePrefix "js.menu.buttons.contacts.href")}} 
           title={{i18n (themePrefix "js.menu.buttons.contacts.title")}} 
           class="d-header-menu-button">
          <md-ripple></md-ripple>
          {{i18n (themePrefix "js.menu.buttons.contacts.text")}}
        </a>
      </li>
    </template>,
    { before: "chat" }
  );

  api.headerIcons.add(
    "community",
    <template>
      <li class="d-header-community-element">
        <a href={{i18n (themePrefix "js.menu.buttons.community.href")}} 
           title={{i18n (themePrefix "js.menu.buttons.community.title")}} 
           class="d-header-menu-button --active">
          <md-ripple></md-ripple>
          {{i18n (themePrefix "js.menu.buttons.community.text")}}
        </a>
      </li>
    </template>,
    { before: "chat" }
  );

  if (!api.getCurrentUser()) {
    api.headerIcons.add(
      "user-menu-placeholder",
      <template>
        <li class="d-header-community-element">
          <a href="/login" 
             title={{i18n (themePrefix "js.menu.buttons.profile.title")}} 
             class="d-header-menu-button">
            <md-ripple></md-ripple>
            <md-icon>person</md-icon>
          </a>
        </li>
      </template>,
      { before: "search" }
    );
    api.headerIcons.reposition("community", { before: "user-menu-placeholder" });
  } else {
    api.headerIcons.reposition("user-menu", { after: "chat" });
  }
});