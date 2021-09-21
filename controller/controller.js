import {playground} from "../playground.js";
import {ObservableList} from "../model/observable.js";

export {Controller, PlaygroundView}

const Controller = service => {

    const Playground = () => {}

    const playgroundModel = ObservableList([])


    const addPlayground = () => {
        const newPlayground = Playground()
        playgroundModel.add(newPlayground)
        return newPlayground
    }


    return {
        onPlaygroundAdd: playgroundModel.onAdd,
        addPlayground: addPlayground,
    }
}

const PlaygroundView = (controller, rootElement) => {
    const render = () => playground(controller, rootElement)
    controller.onPlaygroundAdd(render)
}