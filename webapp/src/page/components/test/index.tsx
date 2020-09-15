import React from "react";
import * as THREE from 'three';

export interface TestProps {

}

export interface TestState {

}
class Test extends React.Component<TestProps, TestState> {
    scene: any
    camera: any
    renderer: any
    mount: any
    cube: any
    line: any

    componentDidMount() {
        this.init()
    }

    init = () => { //使用this是因为我们需要使用this.mount来渲染数据
        const scene = new THREE.Scene() //创建场景
        const camera = new THREE.PerspectiveCamera(75, this.mount.clientWidth / this.mount.clientHeight, 0.1, 1000);
        //创建相机  这些参数在官网中都有指出  第一个参数 75 -> 视野角度（单位：度）  第二个参数是长宽比 第三个是近截面 第四个是远截面
        
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        //创建渲染器。讲道理我还没有看这个参数是什么意思。 但是官网中有一个测试浏览器是否可以使用WebGL的方法，需要用到的可看一下
        // var controls = new THREE.OrbitControls( camera, renderer.domElement );
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        //这三个赋值是为了方便我们把创建立方体或者其他元素的方法拆分出去，不让代码显得太长
        renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
        //将渲染器的长宽 设置为我们要显示的容器长宽
        this.mount.appendChild(renderer.domElement);
        //将整个场景推入我们要显示的元素中
        camera.position.z = 5;
        // 我们生成的元素默认和相机的位置是重复的，我们需要将相机移开，这样我们才可以看到渲染的内容
        this.creatCube()
        this.createLine()
        this.animate()
    }

    creatCube = () => {
        const geometry = new THREE.BoxGeometry(1, 2, 1, 4);//绘制一个立方体，擦书相当于定点位置 （three自带的对象）
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        //定义材质 我们这里用简单的颜色 ， 其他的属性可以写入对象，就可以更改材质
        const cube = new THREE.Mesh(geometry, material);
        //我们用到网格将 定义的材质用到定义的立方题上生成cube
        this.cube = cube //同样 为了方便我们在写方法的时候用到cube做此操作
        this.scene.add(cube);//将我们生成的cube放到场景中 
    }

    animate = () => {
        requestAnimationFrame(this.animate); //像计时器一样重复的渲染
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01; // 立方体进行 的操作
        this.renderer.render(this.scene, this.camera);
    }

    createLine = () => {
        const material = new THREE.LineBasicMaterial({ color: 0x0f00ff }) //定义线的材质
        const geometry = new THREE.Geometry()
        geometry.vertices.push(new THREE.Vector3(-2, 0, 0))
        geometry.vertices.push(new THREE.Vector3(0, 2, 0)); //相当于是从 将前两个坐标连成一条线
        // geometry.vertices.push(new THREE.Vector3( 2, 0, 0) );
        const line = new THREE.Line(geometry, material)
        this.line = line
        line.position.x = -1
        line.position.y = 2
        this.scene.add(line)
    }

    componentWillUnmount() {
        this.mount.removeChild(this.renderer.domElement)
    }

    render() {
        return (
            <div
                id="canvas"
                style={{ width: '600px', height: '600px', background: '#888' }}
                ref={(mount) => { this.mount = mount }}
            />
        );
    }
}

export default Test;