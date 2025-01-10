import { View } from 'react-native'
import React from 'react'
import Svg, { Ellipse, G, Line, Rect } from 'react-native-svg'
import * as Animatable from 'react-native-animatable';

import { colors } from '@/app/common';

const LineComponent = (props: any) => <Line {...props} />;
const RectComponent = (props: any) => <Rect {...props} />;
const EllipseComponent = (props: any) => <Ellipse {...props} />;

const AnimatableLine = Animatable.createAnimatableComponent(LineComponent);
const AnimatableRect = Animatable.createAnimatableComponent(RectComponent);
const AnimatableEllipse = Animatable.createAnimatableComponent(EllipseComponent);

type StickManProps = {
    wrongWordCount: number
}

const StickMan: React.FC<StickManProps> = ({ wrongWordCount }) => {
    const ref = React.useRef(null);
    const Rope = <AnimatableLine ref={ref} animation='fadeIn' x1="200" y1="0" x2="200" y2="140" stroke="brown" strokeWidth="5" />
    const Head = <AnimatableEllipse ref={ref} animation='fadeIn' cx="200" cy="150" rx="40" ry="25" fill={colors.shapeColor} />
    const Nack = <AnimatableRect ref={ref} animation='fadeIn' width="10" height="50" x="195" y="150" fill={colors.shapeColor} />
    const Hands = <AnimatableLine ref={ref} animation='fadeIn' x1="260" y1="200" x2="140" y2="200" stroke={colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
    const Body = <AnimatableRect ref={ref} animation={'fadeIn'} width="10" height="50" x="195" y="200" fill={colors.shapeColor} />
    const Lags = <G>
        <AnimatableLine ref={ref} animation={'fadeIn'} x1="200" y1="250" x2="150" y2="300" stroke={colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
        <AnimatableLine ref={ref} animation={'fadeIn'} x1="200" y1="250" x2="250" y2="300" stroke={colors.shapeColor} stroke-Linecap="round" strokeWidth="10" />
    </G>
    return (
        <View>
            <Svg viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" className="svg-content" width="140" height="200">
                <Rect fill={colors.FrameColor} width="250" height="10" x="5" y="15" />
                <Rect fill={colors.FrameColor} width="10" height="350" x="20" y="0" />
                <Rect fill={colors.FrameColor} width="250" height="40" x="0" y="350" />
                {wrongWordCount > 0 ? Rope : null}
                {wrongWordCount > 1 ? Head : null}
                {wrongWordCount > 2 ? Nack : null}
                {wrongWordCount > 3 ? Hands : null}
                {wrongWordCount > 4 ? Body : null}
                {wrongWordCount > 5 ? Lags : null}
            </Svg>
        </View>
    )
}

export default StickMan

