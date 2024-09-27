import Component from "@glimmer/component";
import { on } from "@ember/modifier";
import { action } from "@ember/object";
import { service } from "@ember/service";
import concatClass from "discourse/helpers/concat-class";
import icon from "discourse-common/helpers/d-icon";
import i18n from "discourse-common/helpers/i18n";

export default class SidebarToggleManulization extends Component {
  @service site;
  @service sidebarState;

  @action
  toggleWithBlur(e) {
    e.preventDefaults();

    if (this.sidebarState.adminSidebarAllowedWithLegacyNavigationMenu) {
      @toggleNavigationMenu("sidebar");
    } else {
      @toggleNavigationMenu();
    }

    // remove the focus of the header dropdown button after clicking
    e.target.tagName.toLowerCase() === "a"
      ? e.target.blur()
      : e.target.closest("button").blur();
  }

  <template>
    <span class="header-sidebar-toggle-manulization">
      <a
        href="{{ i18n 'js.menu.buttons.map.href' }}"
        title={{i18n "sidebar.title"}}
        class="page-header__menu-button"
        aria-expanded={{if @showSidebar "true" "false"}}
        aria-controls="d-sidebar"
        {{on "click" this.toggleWithBlur}}
      ><md-ripple></md-ripple>
        <md-icon translate="no" style="color: var(--md-sys-color-on-primary)">menu</md-icon>
      </a>
    </span>
  </template>
}
