// Configure Settings Dialog
Setting.addHeader("Content Settings", "Settings controlling what content is made available in the game.");
// Setting up a basic toggle control for the settings property 'mature'
Setting.addToggle("mature", {
  label : "Content for mature audiences?",
  default: true,
});

function assetPackChangeHandler() {
  State.setVar('$girlName', settings['Asset Pack']);
  State.setVar('$assetPack', settings['Asset Pack']);
}

// Setting up a basic list control for the settings property 'difficulty'
Setting.addList("Asset Pack", {
	label    : "Choose an Asset Pack to load.",
	list     : ["Katarina", "witch-girl"],
  default  : "witch-girl",
	onInit   : assetPackChangeHandler,
	onChange : assetPackChangeHandler
});
