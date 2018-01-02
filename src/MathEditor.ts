interface MEMouseEvent extends MouseEvent{
    readonly data: string;
}

export default class MathEditor {
    containerId: string;

    constructor(containerId: string) {
        this.containerId = containerId;
    }

    run(){
        const root = document.getElementById(this.containerId);

        const mathEditorContainer = document.createElement("div");
        mathEditorContainer.className = "border border-secondary rounded";
        // make the math editor container's height equals with root's height
        mathEditorContainer.style.height = root.style.height;

        const textarea = document.createElement("textarea");
        textarea.className = "mathEditorInput"
        textarea.style.opacity = "0";
        textarea.style.height = "20px";
        textarea.style.width = "10px";
        textarea.style.top = "0px";
        textarea.style.left = "0px";

        textarea.addEventListener("focus", function(e){
            mathEditorContainer.className = "border border-primary rounded";
        });

        textarea.addEventListener("blur", function(e){
            mathEditorContainer.className = "border border-secondary rounded";
        });

        textarea.addEventListener("input", function(e: MEMouseEvent){
            // chrome support data property
            if (e.data) {
                var inputValue = e.data;
                textLayer.innerHTML += inputValue;
                setTimeout(function(){
                    textarea.value = "";
                }, 0);
            } else {
                var inputValue = textarea.value;
                textLayer.innerHTML += inputValue;
                textarea.value = "";
            }
        });

        mathEditorContainer.appendChild(textarea);

        mathEditorContainer.addEventListener("mousedown", function(e){
            // make the textarea.focus() work.
            e.preventDefault();

            textarea.focus();
        });


        const textLayer = document.createElement("div");
        textLayer.style.height = mathEditorContainer.clientHeight + "px";
        
        mathEditorContainer.appendChild(textLayer);
        root.appendChild(mathEditorContainer);
    }
}