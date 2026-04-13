// Pure OTA: Disable logout action (no APK install needed)
// Button visible rahega but click hone pe kuch nahi hoga
bridge.override(
    "in.stage.presentation.settings.viewModels.SettingsViewModel",
    "logout()V",
    function(args) {
        bridge.log("logout blocked via OTA patch");
        // Nothing happens — user stays logged in
        return null;
    }
);
