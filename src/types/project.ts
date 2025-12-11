export type ProjectType = {
    id: number,
    title: string,
    body: string,
    src: string,
    site?: string,
    code?: string,
    blockCode?: boolean,
    techs: string[]
}