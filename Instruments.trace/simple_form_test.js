
var target = UIATarget.localTarget();

target.tap({x:287.50, y:552.50});
target.tap({x:151.50, y:295.00});
target.frontMostApp().navigationBar().leftButton().tap();
target.tap({x:283.50, y:550.50});
target.frontMostApp().statusBar().elements()["4 of 5 bars, signal strength"].tap();

