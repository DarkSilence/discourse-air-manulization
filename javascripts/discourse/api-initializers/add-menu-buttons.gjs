import DButton from "discourse/components/d-button";
import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0", (api) => {
  api.headerIcons.add("some-unique-name", <template>
    <li><DButton class="icon btn-flat" @href="/u" @icon="address-book" /></li>
  </template>);
});