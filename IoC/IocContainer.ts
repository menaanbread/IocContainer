namespace IoC {
    export class IocContainer implements IContainer {
        private dependencyContainer: DependencyContainer;

        constructor() {
            this.dependencyContainer = new DependencyContainer();
        }

        public register<TInterface, TImplementation>(interfaceName: string, type: { new(): TImplementation; }, lifestyle: LifeStyle): void {
            switch (lifestyle) {
                case LifeStyle.Singleton:
                    let dependency: TImplementation = new type();
                    this.dependencyContainer.add(interfaceName, () => dependency);
                    break;
                case LifeStyle.Transient:
                    this.dependencyContainer.add(interfaceName, () => new type());
                    break;
            }
        }

        public resolve<TInterface>(interfaceName: string): TInterface {
            return this.dependencyContainer.resolve<TInterface>(interfaceName);
        }
    }
}
