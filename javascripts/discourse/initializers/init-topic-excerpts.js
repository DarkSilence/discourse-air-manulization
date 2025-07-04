import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.0.0", (api) => {
  api.modifyClass("component:topic-list-item", {
    pluginId: "discourse-manulization",
    expandPinned: true,
  });
});
