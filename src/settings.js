// Configure Settings Dialog
Setting.addHeader("Content Settings", "Settings controlling what content is made available in the game.");

Setting.addToggle("muted", {
  label : "Mute all video and music",
  default: false,
});

// Setting up a basic list control for the settings property 'Asset Pack'
Setting.addList("Asset Pack", {
	label    : "Choose an Asset Pack to load.",
	list     : listAllAssetPacks(),
  default  : "witch-girl",
	onInit   : assetPackChangeHandler,
	onChange : assetPackChangeHandler
});
function assetPackChangeHandler() {
  State.setVar('$girlName', settings['Asset Pack']);
  State.setVar('$assetPack', settings['Asset Pack']);
}
