import React from "react";
import { UnspecifiedAssetDocument } from "../Asset/asset";
import AssetChoice from "./AssetChoice";

export default function AssetSelection(props: {
  chooseAsset: (asset, index) => void;
  showNewScreen();
  showPrintScreen();
  assets: UnspecifiedAssetDocument[];
}) {
  return (
    <div className="horizontal">
      <div className="asset-selection">
        <div className="asset-selection-controls">
          {props.assets.map((asset, index) => {
            return (
              <AssetChoice
                asset={asset}
                key={asset.name + index}
                handleClick={() => props.chooseAsset(asset, index)}
              ></AssetChoice>
            );
          })}
        </div>
      </div>
      <div className="sidebar">
        <button onClick={props.showNewScreen}>ADD NEW ASSET</button>
        <button onClick={props.showPrintScreen}>PRINT</button>
        {/* <button>FONTS</button> */}
        {/* <button>EXPORT</button> */}
      </div>
    </div>
  );
}
