bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "getTitleColor()J",
    function(args) { return -65536; } // 0xFFFF0000 = Red
);

bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "isDescriptionVisible()Z",
    function(args) { return false; }
);
