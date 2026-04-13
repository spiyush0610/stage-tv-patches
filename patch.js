bridge.override(
    "in.stage.presentation.dynamicHome.viewModels.DynamicHomeViewModel",
    "getHomeScreenLabel()Ljava/lang/String;",
    function(args) {
        bridge.log("OTA PATCH APPLIED — getHomeScreenLabel intercepted!");
        return "PATCHED LABEL!";
    }
);
