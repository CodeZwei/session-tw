/** AssetPack struct represents a single content pack for a single session. */
class AssetPack {
  id = '';
  name = '';
  images = {};
  videos = {};

  constructor(manifest) {
    this.id = manifest.id
    this.name = manifest.name;
    this.images = manifest.images;
    this.videos = manifest.videos;
  }
}

/** Register a new Asset Pack on the 'setup' object. */
function registerAssetPack(pack) {
  setup.AssetPacks = setup.AssetPacks || {};
  setup.AssetPacks[pack.id] = pack;
}

/** Lists all registered AssetPacks */
function listAllAssetPacks() {
  return Object.keys(setup.AssetPacks || {});
}

function getCurrentAssetPack() {
  return setup.AssetPacks[State.getVar('$assetPack')];
}

setup.getCurrentAssetPack = getCurrentAssetPack;
setup.AssetPack = AssetPack;
