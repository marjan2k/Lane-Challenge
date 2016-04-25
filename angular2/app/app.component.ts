import {Component, ElementRef} from 'angular2/core'
import {NgStyle, NgClass} from 'angular2/common';

@Component({
    selector: 'my-app',
    templateUrl: 'app/myapp.html',
    directives: [NgStyle, NgClass]
})
export class AppComponent {
    constructor(private element: ElementRef) {}
    opacity = 1;
    rotate = 0;
    translate = 0;
    scale = 1;
    transform = 'rotate('+this.rotate+'deg) translateX('+this.translate+'px) scale('+this.scale+')';

    changeListner(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e:any) {
            var src = e.target.result;
            image.src = src;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    addRotate(){
        if (this.rotate == 0)
            this.rotate = 45;
        else
            this.rotate = 0;
        this.transform = 'rotate('+this.rotate+'deg) translateX('+this.translate+'px) scale('+this.scale+')';
    }
    
    addTranslate(){
        if (this.translate == 0)
            this.translate = -40;
        else
            this.translate = 0;
        this.transform = 'rotate('+this.rotate+'deg) translateX('+this.translate+'px) scale('+this.scale+')';
    }
    
    addScale(){
        if (this.scale==1)
            this.scale=0.5;
        else
            this.scale=1;
        this.transform = 'rotate('+this.rotate+'deg) translateX('+this.translate+'px) scale('+this.scale+')';
    };

    addOpacity=function(){
        if (this.opacity==1)
            this.opacity=0.5;
        else
            this.opacity=1;
        this.transform = 'rotate('+this.rotate+'deg) translateX('+this.translate+'px) scale('+this.scale+')';
    };

    Reset=function(){
        this.rotate=0;
        this.translate=0;
        this.scale=1;
        this.opacity=1;
        this.transform = 'rotate('+this.rotate+'deg) translateX('+this.translate+'px) scale('+this.scale+')';
    };
}