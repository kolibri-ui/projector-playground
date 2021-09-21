import {linkProjector} from "./base-elements/linkProjector.js";
import {brProjector} from "./base-elements/brProjector.js";

export {playground}

const playground = (controller, rootElement) => {
    const link = linkProjector('This is a TestLink which goes to Google', 'https://www.google.com', 'aclass')
    const link2 = linkProjector('This is a TestLink which goes to FHNW', 'https://www.fhnw.ch', '')
    const br = brProjector()

    rootElement.appendChild(link)
    rootElement.appendChild(br)
    rootElement.appendChild(link2)
}