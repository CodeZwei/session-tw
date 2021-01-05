# Session Assets

Asset packs are distributed separately from `session-core`.

To load an asset pack, unzip the bundle and put all asset media files into `assets/pack/*`. The assets there will be picked up by the Session player.

### Asset Packs

Asset Packs are `.zip` bundles of images and video media for the game.

The internal file structure must be the following:

```
manifest.tw
videos/
  greet.webm
  stroke.webm
  tits.webm
  sexv.webm
  sext.webm
  sexo.webm
  cum-facial.webm
images/
  preview.png
```

#### Manifest

The manifest file must be a twine file specifying a single script passage. This passes will register the asset pack configuration for the game to use.

```javascript
registerAssetPack(
  new AssetPack({
    id: "witch-girl",
    name: "Sata",
    images: {
      // ...
    },
    videos: {
      greet: "",
      // ...
    },
  })
);
```

The images and videos must specify which media to use when the game requires a specific action.
