import {linkProjector} from "./linkProjector.js";
import {brProjector} from "./brProjector.js";

export {playground}

const playground = (controller, rootElement) => {
    const link = linkProjector('Just a test', 'https://www.google.com', 'aclass')
    const link2 = linkProjector('Just a test 2', 'https://www.sbb.ch', '')
    const br = brProjector()

    rootElement.appendChild(link)
    rootElement.appendChild(br)
    rootElement.appendChild(link2)
}