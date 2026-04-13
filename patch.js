bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "getHomeRowPriority(Ljava/lang/String;)I",
    function(args) {
        if (args[0] === "continueWatching") return 0;
        return 2147483647;
    }
);
