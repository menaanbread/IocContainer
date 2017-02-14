var IoC;
(function (IoC) {
    var DependencyContainer = (function () {
        function DependencyContainer() {
            this.interfaces = new Array();
            this.implementations = new Array();
        }
        DependencyContainer.prototype.add = function (interfaceName, resolution) {
            this.interfaces.push(interfaceName);
            this.implementations.push(resolution);
        };
        DependencyContainer.prototype.resolve = function (interfaceName) {
            var dependencyIndex = this.interfaces.indexOf(interfaceName);
            return this.implementations[dependencyIndex]();
        };
        return DependencyContainer;
    }());
    IoC.DependencyContainer = DependencyContainer;
})(IoC || (IoC = {}));
//# sourceMappingURL=DependencyContainer.js.map