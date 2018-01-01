export default class MathEditor {
    containerId: string;

    constructor(containerId: string) {
        this.containerId = containerId;
    }

    run(){
        const root = document.getElementById(this.containerId);
        root.innerHTML = "TODO";
    }
}