bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "getHomeRowPriority(Ljava/lang/String;)I",
    function(args) {
        var widgetType = args[0];
        if (widgetType === "continueWatching") return 0;
        return 2147483647; // Int.MAX_VALUE — keep everything else in server order
    }
);
