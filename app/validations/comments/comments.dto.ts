export class CommentCreateDto{
    @length(3,500)
    body:string
}