// Extend the class so we can let it participate in HTML forms
class GenevaEmotionWheel extends HTMLElement {

	constructor() {
		super();
	}

	// Add the function here, not below in the component so that
	// it's always available, not just when the inner Svelte component
	// is mounted

	selectEmotion(index: number, value: number) {
		const event = new EmotionSelectValueEvent(index, value);
		this.dispatchEvent(event);

	}


};

export interface EmotionSelectValueEvent {
	index: number,
	value: number,
}

export class EmotionSelectValueEvent extends Event {
	// strongly type the event target
	declare target: GenevaEmotionWheel;

	// define the parameters of the event using the constructor
	constructor(index: number, value: number) {
		// pass the event name and any options to the base Event class
		super('emotion-selected', {
			bubbles: true,
			cancelable: true,
			composed: true
		});

		// initialize public property values
		this.index = index;
		this.value = value;
	}

}

