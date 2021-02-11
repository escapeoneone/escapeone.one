import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from "./Project.module.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

interface ProjectProps {
    name: string;
    github?: string;
    web?: string;
    description: string;
}

export default function FourOhFour(props: ProjectProps) {
    return <>
        <Card>
            <CardContent>
                <Typography color="textPrimary" gutterBottom>
                    {props.name}
                </Typography>

                <Typography variant="body2" component="p">
                    {props.description.split("\\n").join("  ")}
                </Typography>
            </CardContent>
            <CardActions className={styles["actions"]}>
                {props.github != undefined &&
                    <a href={"https://github.com/" + props.github}>
                        <GitHubIcon className={styles["icon"]} /> 
                    </a>
                }

                {props.web != undefined &&
                    <a href={props.web}>
                        <WebIcon className={styles["icon"]} /> 
                    </a>
                }

                
            </CardActions>
        </Card>
    </>
}
/*<Button size="small">Learn More</Button>*/