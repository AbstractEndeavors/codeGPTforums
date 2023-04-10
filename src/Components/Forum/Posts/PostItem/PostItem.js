import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

export function PostItem(props){
    const {id, title, description,query, author} = props;

    return (
        <Card style={{marginTop: '1rem'}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {query}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        by {author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        by {id}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
