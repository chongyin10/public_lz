import React from "react";
import * as THREE from 'three';
import '@/page/components/system/powerGroup/index.scss';

export interface PowerGroupProps {

}

export interface PowerGroupState {

}
let scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;
class PowerGroup extends React.Component<PowerGroupProps, PowerGroupState> {
    render() {
        return (
            <div id='thressId'>

            </div>
        );
    }
}

export default PowerGroup;