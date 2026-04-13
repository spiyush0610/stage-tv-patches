bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "getHomeRowPriority(Ljava/lang/String;)I",
    function(args) {
        var widgetType = "" + args[0];
        if (widgetType === "top20") return -1;        // hide
        if (widgetType === "continueWatching") return 0; // top
        return 1;
    }
);
