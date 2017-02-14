namespace IoC {
    export interface IContainer {
        register<TInterface, TImplementation>(interfaceName: string, type: { new(): TImplementation; }, lifestyle: LifeStyle): void;
        resolve<TInterface>(interfaceName: string): TInterface;
    }
}