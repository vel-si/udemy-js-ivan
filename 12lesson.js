class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeDiv() {
        let element = document.createElement('div');
        document.body.appendChild(element);
        let params = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}px;`;
        element.style.cssText = params;
    }
}

let newDiv = new Options(100, 200, "green", 16, "center");

newDiv.makeDiv();