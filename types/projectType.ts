export interface Project {
    category : string,
    country : string,
    created_at : string,
    creation_date : string,
    extra_description: string,
    short_description: string,
    id : string,
    images : [
        {
            id : string,
            is_main : number,
            url : string,
        }
    ],
    title: string, 
}