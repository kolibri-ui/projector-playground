import {linkProjector} from "../base-elements/linkProjector.js";
import {brProjector} from "../base-elements/brProjector.js";
import {labelProjector} from "../base-elements/labelProjector.js";
import {inputProjector} from "../base-elements/inputProjector.js";

export {playground}

const playground = (controller, rootElement) => {
    const link = linkProjector('This is a TestLink which goes to Google', 'https://www.google.com', 'aclass')
    const link2 = linkProjector('This is a TestLink which goes to FHNW', 'https://www.fhnw.ch', '')
    const br = brProjector()

    const input = inputProjector('', 'input test', 'input-test')
    const label = labelProjector('Input Test Label', 'input-test')
    const br2 = brProjector()

    rootElement.appendChild(link)
    rootElement.appendChild(br)
    rootElement.appendChild(link2)
    rootElement.appendChild(br2)
    rootElement.appendChild(label)
    rootElement.appendChild(input)
}