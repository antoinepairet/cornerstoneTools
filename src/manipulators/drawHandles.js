var cornerstoneTools = (function ($, cornerstone, cornerstoneTools) {

    "use strict";

    if(cornerstoneTools === undefined) {
        cornerstoneTools = {};
    }

    var handleRadius = 6;

    function drawHandles(context, renderData, handles, color, fill)
    {
        context.strokeStyle = color;
        var radius = handleRadius / renderData.viewport.scale;
        for(var property in handles) {
            var handle = handles[property];
            if(handle.active || handle.highlight) {
                context.beginPath();
                if(handle.active)
                {
                    context.lineWidth = 2 / renderData.viewport.scale;
                }
                else
                {
                    context.lineWidth = 0.5 / renderData.viewport.scale;
                }
                context.arc(handle.x, handle.y, radius, 0, 2 * Math.PI);

                if (fill) {
                    context.fillStyle = fill;
                    context.fill();
                }

                context.stroke();
            }
        }
    }


    // module/private exports
    cornerstoneTools.drawHandles = drawHandles;

    return cornerstoneTools;
}($, cornerstone, cornerstoneTools));
