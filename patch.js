bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "getTitleColor()J",
    function(args) { return -16776961; } // 0xFF0000FF = Blue
);

bridge.override(
    "in.stage.presentation.preview.SharedContentPreviewViewModel",
    "isDescriptionVisible()Z",
    function(args) { return false; }
);
