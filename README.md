# Geneva Emotion Wheel on the web

The [Geneva Emotion Wheel](https://www.unige.ch/cisa/gew) (GEW) is a theoretically derived and empirically tested instrument to measure emotional reactions to objects, events, and situations.

## Svelte and custom elements

This implementation of the GEW was implemented using svelte but is exported as a
custom web componenent that should be usable almost anywhere.

### Why Custom Elements?
While custom elements make it possible to reuse components across different frameworks, the larger benefit is reduced coupling. By separating your component library from a specific framework, you lower the cost and risk of future framework upgrades or migrations, even when the components are initially built for a single application.


