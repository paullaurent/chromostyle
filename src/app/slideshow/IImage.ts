export interface IImage {
    url: string | null;
    href?: string;
    clickAction?: Function;
    caption?: string;
    title?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
}

function createImage(config:IImage):{url:string; caption:string}{

    let image={url:config.url,caption:config.caption}
    return image;
}