Page({
    data: {

    },
    onLoad: function (options) {
        this.init()
    },
    /*
    * 初始化
    */
    init: function () {
        var context = wx.createContext();
        context.setStrokeStyle("#FFFFFF");
        context.setLineWidth(4);
        context.moveTo(40, 180);
        context.lineTo(150, 150);
        context.lineTo(250, 90);
        context.lineTo(350, 70);
        context.lineTo(450, 120);
        context.lineTo(550, 95);
        context.stroke();
        context.beginPath();
        context.setFontSize(16);
        context.setFillStyle("#FFFFFF");
        context.moveTo(40 + 5, 180)
        context.fillText('20', 40 - 8, 180 - 15)
        context.arc(40, 180, 4, 0, 2 * Math.PI, false);
        context.moveTo(150 + 5, 150)
        context.fillText('25', 150 - 8, 150 - 15)
        context.arc(150, 150, 4, 0, 2 * Math.PI, false);
        context.moveTo(250 + 5, 90)
        context.fillText('28', 250 - 8, 90 - 15)
        context.arc(250, 90, 4, 0, 2 * Math.PI, false);
        context.moveTo(350 + 5, 70)
        context.fillText('30', 350 - 8, 70 - 15)
        context.arc(350, 70, 4, 0, 2 * Math.PI, false);
        context.moveTo(450 + 5, 120)
        context.fillText('27', 450 - 8, 120 - 15)
        context.arc(450, 120, 4, 0, 2 * Math.PI, false);
        context.moveTo(550 + 5, 95)
        context.fillText('29', 550 - 8, 95 - 15)
        context.arc(550, 95, 4, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
        context.stroke();
        wx.drawCanvas({
            canvasId: 'myCanvas',
            actions: context.getActions()
        });
    }
})