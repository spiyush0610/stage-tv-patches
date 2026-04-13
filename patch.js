// ============================================================
// FULL REFLECTION OTA PATCH EXAMPLE
// Koi bhi private field/method access karo bina naya hook daale
// ============================================================

bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "getTitleColor()J",
    function(args) {
        // 'this' = ViewModel instance (auto-injected, no setup needed)

        // 1️⃣ Private StateFlow read karo (normally inaccessible)
        var isVisibleFlow = bridge.get(this, "_isVisible");
        var isVisibleNow = bridge.invoke(isVisibleFlow, "getValue", []);
        bridge.log("preview visible now = " + isVisibleNow);

        // 2️⃣ Private StateFlow emit karo (change app state from JS!)
        // var playbackFlow = bridge.get(this, "_playbackPosition");
        // bridge.invoke(playbackFlow, "setValue", [java.lang.Long.valueOf(0)]);

        // 3️⃣ Private method invoke karo
        // bridge.invoke(this, "prepareForMainPlayer", []);

        // 4️⃣ Java class load karo, naya object banao
        var Color = bridge.cls("android.graphics.Color");
        var red = bridge.invoke(Color, "parseColor", ["#FF0000"]);
        bridge.log("red color long = " + red);

        // 5️⃣ Return value — method signature match honi chahiye
        return 0xFFFF0000; // Red (ARGB Long)
    }
);

bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "isDescriptionVisible()Z",
    function(args) {
        // Description hide karte waqt, poori preview bhi force-hide kar do
        // var flow = bridge.get(this, "_isVisible");
        // bridge.invoke(flow, "setValue", [java.lang.Boolean.FALSE]);
        return false;
    }
);
