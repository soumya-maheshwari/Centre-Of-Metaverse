export interface WorkCard {
    title: string;
    desc: string;
    img: {
        is3D: boolean;
        src: string;
    };
    thumb: string;
}