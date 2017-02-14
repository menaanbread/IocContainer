var IoC;
(function (IoC) {
    var LifeStyle;
    (function (LifeStyle) {
        LifeStyle[LifeStyle["Singleton"] = 0] = "Singleton";
        LifeStyle[LifeStyle["Transient"] = 1] = "Transient";
    })(LifeStyle = IoC.LifeStyle || (IoC.LifeStyle = {}));
})(IoC || (IoC = {}));
//# sourceMappingURL=LifeStyle.js.map