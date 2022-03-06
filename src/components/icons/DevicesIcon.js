import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

export default function DevicesIcon(props) {
    const {width, height, fill} = props;

    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width :18.308}
        height={height ? height :26}
        viewBox="0 0 18.308 26"
        {...props}
      >
        <Defs>
          <ClipPath id="prefix__a">
            <Path fill="none" d="M0 0h18.308v26H0z" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#prefix__a)">
          <Path
            data-name="Path 39"
            d="M7.948 11.627v9.124l-2.441.488.6 2.975 1.221.954h.778l1.663.229.778-.305 1.663-.572.587-1.564v-1.259l-.954-.343-1.449-.267v-1.3l.114-2.937-.343-3.28.381-1.526-.038-.42z"
            fill={fill ? fill : "#3cb769"}
          />
          <G data-name="Group 211">
            <Path
              data-name="Path 36"
              d="M3.66 7.325a.61.61 0 10.61.61.612.612 0 00-.61-.61zm0 0"
            />
            <Path
              data-name="Path 37"
              d="M5.003 5.959a4.873 4.873 0 014.15-2.3.61.61 0 100-1.221 6.05 6.05 0 00-5.176 2.88.607.607 0 00.2.839.6.6 0 00.832-.2zm0 0"
            />
            <Path
              data-name="Path 38"
              d="M4.881 22.948a3.051 3.051 0 003.051 3.051h2.441a3.051 3.051 0 003.051-3.051v-2.212a7.159 7.159 0 012.182-5.1A9.145 9.145 0 008.992.001 9.262 9.262 0 00.006 8.816a9.064 9.064 0 002.609 6.736 7.45 7.45 0 012.266 5.2zm7.324 0a1.836 1.836 0 01-1.831 1.831H7.932a1.836 1.836 0 01-1.831-1.831v-.976h6.1zm-3.662-2.2v-8.541h1.22v8.544zm-5.062-6.054a7.834 7.834 0 01-2.255-5.836 8.025 8.025 0 017.789-7.637 7.925 7.925 0 015.729 13.549 8.374 8.374 0 00-2.54 5.973v.015h-1.223v-8.551h.61a1.831 1.831 0 10-1.828-1.831 1.8 1.8 0 00.107.61H8.443a1.8 1.8 0 00.107-.61 1.831 1.831 0 10-1.831 1.831h.61v8.544H6.101v-.008a8.679 8.679 0 00-2.62-6.049zm7.5-4.318a.61.61 0 11.61.61.612.612 0 01-.61-.61zm-3.662 0a.61.61 0 11-.61-.61.612.612 0 01.61.61zm0 0"
            />
          </G>
        </G>
      </Svg>
    )
}
