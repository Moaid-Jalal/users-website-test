export interface Project {
    category : string,
    country : string,
    created_at : string,
    creation_date : string,
    description : string,
    id : string,
    images : [
        {
            id : string,
            is_main : number,
            url : string,
        }
    ],
    short_description: string, 
    title: string, 
}