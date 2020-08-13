import React from "react";
import { Steps, Step } from './Steps';
import { message } from "antd";

export interface PowerGroupProps {

}

export interface PowerGroupState {

}

function Father({ children }: any) {
    let children1 = React.Children.toArray(children);
    var arr = new Array(6)
    arr[0] = "10"
    arr[1] = "5"
    arr[2] = "40"
    arr[3] = "25"
    arr[4] = "1000"
    arr[5] = "1"
    console.log(arr.sort(sortNumber))
    return (
        <div>
            {children1.sort().join(' ')}
        </div>
    )
}

function sortNumber(a: any, b: any) {
    return a - b
}

function test() {
    let a = 0;
    const fun = function (params: number) {
        console.log(params);
        console.log(++a)
    }
}

function Person(this: any, a: any, b: any) {
    this.a = a;
    this.b = b;
    this.setA = function () {
        console.log(this.a)
    }
}

function Female(this: any) {
    Person.apply(this, arguments)
}


class PowerGroup extends React.Component<PowerGroupProps, PowerGroupState> {

    constructor(props: PowerGroupProps) {
        super(props)
    }
    render() {

        // var aa: any = new test();
        // aa.name = 'name'
        // var bb:any = Object.apply(aa,[1]);
        // let bb: any = Object.create(aa)
        // if (bb instanceof test) {
        //     console.log(true)
        // } else {
        //     console.log(false)
        // }
        // console.log(bb)
        // let aa = [1, 2, 3];
        // let bb = [4, 5, 6];
        // let total = [].concat.apply(aa, bb);
        // console.log(total)
        // var dot = new Female('dot', 2);
        // dot.setA();
        let maxH = 2 * 1 * 60 * 1000; // 定义2小时， 或者new Date().getHours()
        let ljd = 10 * 60 * 1000; // 定义最后 10分钟，
        let time = setInterval(() => {
            if (maxH == ljd) {
                message.info('最后时间还有10分钟')
                clearInterval(time)
            }
            maxH = maxH - 1000; // 每次减去1秒
            console.log(maxH)
        }, 1000)

        return (
            // <Father>
            //     {'ccc'}
            //     {'aaa'}
            //     {'bbb'}
            // </Father>
            <div>
                <Steps currentStep={2}>
                    <Step />
                    <Step />
                    <Step />
                </Steps>
            </div>
        );
    }
}

export default PowerGroup;