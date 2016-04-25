System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(element) {
                    this.element = element;
                    this.opacity = 1;
                    this.rotate = 0;
                    this.translate = 0;
                    this.scale = 1;
                    this.transform = 'rotate(' + this.rotate + 'deg) translateX(' + this.translate + 'px) scale(' + this.scale + ')';
                    this.addOpacity = function () {
                        if (this.opacity == 1)
                            this.opacity = 0.5;
                        else
                            this.opacity = 1;
                        this.transform = 'rotate(' + this.rotate + 'deg) translateX(' + this.translate + 'px) scale(' + this.scale + ')';
                    };
                    this.Reset = function () {
                        this.rotate = 0;
                        this.translate = 0;
                        this.scale = 1;
                        this.opacity = 1;
                        this.transform = 'rotate(' + this.rotate + 'deg) translateX(' + this.translate + 'px) scale(' + this.scale + ')';
                    };
                }
                AppComponent.prototype.changeListner = function (event) {
                    var reader = new FileReader();
                    var image = this.element.nativeElement.querySelector('.image');
                    reader.onload = function (e) {
                        var src = e.target.result;
                        image.src = src;
                    };
                    reader.readAsDataURL(event.target.files[0]);
                };
                AppComponent.prototype.addRotate = function () {
                    if (this.rotate == 0)
                        this.rotate = 45;
                    else
                        this.rotate = 0;
                    this.transform = 'rotate(' + this.rotate + 'deg) translateX(' + this.translate + 'px) scale(' + this.scale + ')';
                };
                AppComponent.prototype.addTranslate = function () {
                    if (this.translate == 0)
                        this.translate = -40;
                    else
                        this.translate = 0;
                    this.transform = 'rotate(' + this.rotate + 'deg) translateX(' + this.translate + 'px) scale(' + this.scale + ')';
                };
                AppComponent.prototype.addScale = function () {
                    if (this.scale == 1)
                        this.scale = 0.5;
                    else
                        this.scale = 1;
                    this.transform = 'rotate(' + this.rotate + 'deg) translateX(' + this.translate + 'px) scale(' + this.scale + ')';
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/myapp.html',
                        directives: [common_1.NgStyle, common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map