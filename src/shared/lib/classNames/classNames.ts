type Mods = Record<string, boolean | string>

export function  classNames(cls: string, mods: Mods = {}, additional: string[] =[]) {
    console.log(cls);
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');

}