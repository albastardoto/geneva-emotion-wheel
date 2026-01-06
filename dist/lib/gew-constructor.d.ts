declare class GenevaEmotionWheel extends HTMLElement {
    constructor();
    selectEmotion(index: number, value: number): void;
}
export interface EmotionSelectValueEvent {
    index: number;
    value: number;
}
export declare class EmotionSelectValueEvent extends Event {
    target: GenevaEmotionWheel;
    constructor(index: number, value: number);
}
export {};
