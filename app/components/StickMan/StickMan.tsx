import { View } from 'react-native'
import React, { forwardRef } from 'react'
import Svg, { Ellipse, G, Line, Rect } from 'react-native-svg'
import * as Animatable from 'react-native-animatable';
import colors from '@/app/common/colors';


const AnimatableLine = Animatable.createAnimatableComponent(forwardRef((props, ref) => <Line ref={ref} {...props} />));
const AnimatableRect = Animatable.createAnimatableComponent(forwardRef((props, ref) => <Rect ref={ref} {...props} />));
const AnimatableEllipse = Animatable.createAnimatableComponent(forwardRef((props, ref) => <Ellipse ref={ref} {...props} />));

type StickManProps = {
    wrongWordCount: number
}

const StickMan: React.FC<StickManProps> = ({ wrongWordCount }) => {

    const ropeRef = React.useRef(null);
    const headRef = React.useRef(null);
    const neckRef = React.useRef(null);
    const handsRef = React.useRef(null);
    const bodyRef = React.useRef(null);
    const legsRef = React.useRef(null);

    return (
        <View>
            <Svg viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" width="140" height="200" style={{ borderRadius: 5, margin: 10 }}>
                <Rect fill={colors.shapeColor} width="250" height="10" x="5" y="15" />
                <Rect fill={colors.shapeColor} width="10" height="350" x="20" y="0" />
                <Rect fill={colors.shapeColor} width="250" height="40" x="0" y="350" />

                {wrongWordCount > 0 && (
                    <AnimatableLine ref={ropeRef} animation='fadeIn' x1="200" y1="0" x2="200" y2="140" stroke="brown" strokeWidth="5" />
                )}
                {wrongWordCount > 1 && (
                    <AnimatableEllipse ref={headRef} animation='fadeIn' cx="200" cy="150" rx="40" ry="25" fill={colors.shapeColor} />
                )}
                {wrongWordCount > 2 && (
                    <AnimatableRect ref={neckRef} animation='fadeIn' width="10" height="50" x="195" y="150" fill={colors.shapeColor} />
                )}
                {wrongWordCount > 3 && (
                    <AnimatableLine ref={handsRef} animation='fadeIn' x1="260" y1="200" x2="140" y2="200" stroke={colors.shapeColor} strokeLinecap="round" strokeWidth="10" />
                )}
                {wrongWordCount > 4 && (
                    <AnimatableRect ref={bodyRef} animation='fadeIn' width="10" height="50" x="195" y="200" fill={colors.shapeColor} />
                )}
                {wrongWordCount > 5 && (
                    <G ref={legsRef}>
                        <AnimatableLine animation='fadeIn' x1="200" y1="250" x2="150" y2="300" stroke={colors.shapeColor} strokeLinecap="round" strokeWidth="10" />
                        <AnimatableLine animation='fadeIn' x1="200" y1="250" x2="250" y2="300" stroke={colors.shapeColor} strokeLinecap="round" strokeWidth="10" />
                    </G>
                )}
            </Svg>
        </View>
    )
}

export default StickMan;
