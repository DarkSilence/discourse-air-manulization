import DButton from "discourse/components/d-button";
import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0", (api) => {
  api.headerIcons.add("some-unique-name", <template>
    <li><a href="" title="" class="page-header__menu-button"><md-ripple></md-ripple>{{ "sss" }}</a></li>
  </template>);
});