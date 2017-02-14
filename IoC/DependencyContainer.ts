namespace IoC {
    export class DependencyContainer {
        private interfaces: Array<string>;
        private implementations: Array<() => Object>;

        constructor() {
            this.interfaces = new Array<string>();
            this.implementations = new Array<() => Object>();
        }

        public add<TInterface>(interfaceName: string, resolution: () => TInterface): void {
            this.interfaces.push(interfaceName);
            this.implementations.push(resolution);
        }

        public resolve<TInterface>(interfaceName: string): TInterface {
            let dependencyIndex: number = this.interfaces.indexOf(interfaceName);
            return <TInterface>this.implementations[dependencyIndex]();
        }
    }
}