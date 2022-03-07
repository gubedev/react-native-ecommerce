import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

export default function WomenIcon(props) {
    const {width, height, fill} = props;
    return (
        <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width? width :29.927}
      height={height ? height :24}
      viewBox="0 0 29.927 24"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h29.927v24H0z" />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path data-name="Rectangle 86" d="M0 0h29.927v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Icon_Womens Shoe" clipPath="url(#prefix__a)">
        <Path
          data-name="Path 43"
          d="M.951 9.585L2.305 12l.439 2.707v5.524l.4 2.89 1.829.256s.22-2.254.22-2.371v-3.662l.476-2.3.293-2.085.841-.951-2.707-1.646-2.451-1.171-1.206-.447z"
          fill={fill ? fill :"#3cb769"}
        />
        <G data-name="Group 217">
          <G data-name="Group 216">
            <G data-name="Group 214" clipPath="url(#prefix__b)">
              <Path
                data-name="Path 44"
                d="M25.814 21.593a.585.585 0 10-.585-.585.587.587 0 00.585.585zm0 0"
              />
            </G>
            <G data-name="Group 215" clipPath="url(#prefix__b)">
              <Path
                data-name="Path 45"
                d="M.08 8.729a6.423 6.423 0 00.681 1.859 11.517 11.517 0 011.522 5.532v7.229a.587.587 0 00.585.585h2.343a.587.587 0 00.585-.585v-6.534a8.939 8.939 0 01.878-3.834l.05-.093a23.386 23.386 0 016.439 8.539 4.133 4.133 0 003.761 2.5h4.787a35.93 35.93 0 005.48-.278c.673-.117 2.715-.468 2.715-2.063a5.563 5.563 0 00-1.9-3.337 8.685 8.685 0 00-4.632-2.4.586.586 0 00-.476.146 4.42 4.42 0 01-2.707.907 4.1 4.1 0 01-3.454-1.859.408.408 0 00-.037-.059l-3.907-5.576A45.029 45.029 0 004.211.22a.574.574 0 00-.732 0 9.693 9.693 0 00-2.268 2.59 8.524 8.524 0 00-1.134 5.9v.015zm4.544 8.085v5.949h-1.17V16.12c0-.176-.007-.366-.015-.563a13.57 13.57 0 00-1.837-5.9 23.057 23.057 0 014.2 2.517 9.545 9.545 0 00-1.178 4.646zm-2.4-13.411a8.414 8.414 0 011.632-1.969 43.913 43.913 0 017.983 8.654l3.885 5.546a5.281 5.281 0 004.471 2.451 5.85 5.85 0 003.263-1.017 7.634 7.634 0 013.739 2.034 4.627 4.627 0 011.551 2.5c0 .5-.944.768-1.741.907a34.187 34.187 0 01-5.283.263h-4.785a2.964 2.964 0 01-2.693-1.793A24.579 24.579 0 001.185 8.188a7.357 7.357 0 011.039-4.785zm0 0"
              />
            </G>
          </G>
          <Path
            data-name="Path 46"
            d="M16.917 21.593h6.556a.585.585 0 100-1.171h-6.556a.585.585 0 100 1.171zm0 0"
          />
        </G>
      </G>
    </Svg>
    )
}