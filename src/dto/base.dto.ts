export class BaseDto {
    constructor(props: {
        [key: string]: any;
    }) {
        Object.keys(props).forEach(key => {
            (this as any)[key] = props[key];
        })
    }
}