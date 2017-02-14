var IoC;
(function (IoC) {
    var IocContainer = (function () {
        function IocContainer() {
            this.dependencyContainer = new IoC.DependencyContainer();
        }
        IocContainer.prototype.register = function (interfaceName, type, lifestyle) {
            switch (lifestyle) {
                case IoC.LifeStyle.Singleton:
                    var dependency_1 = new type();
                    this.dependencyContainer.add(interfaceName, function () { return dependency_1; });
                    break;
                case IoC.LifeStyle.Transient:
                    this.dependencyContainer.add(interfaceName, function () { return new type(); });
                    break;
            }
        };
        IocContainer.prototype.resolve = function (interfaceName) {
            return this.dependencyContainer.resolve(interfaceName);
        };
        return IocContainer;
    }());
    IoC.IocContainer = IocContainer;
})(IoC || (IoC = {}));
//# sourceMappingURL=IocContainer.js.map