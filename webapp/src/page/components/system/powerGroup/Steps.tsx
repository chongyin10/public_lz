import React from "react";
import '@/page/components/system/powerGroup/steps.scss';

function Steps({ currentStep, children }: any) {
    return (
        <div>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    index: index,
                    currentStep: currentStep
                });
            })}
        </div>
    );
}

function Step({ index, currentStep }: any) {
    return <div className={`indicator${currentStep >= index + 1 ? ' active' : ''}`} />;
}

export { Steps, Step };