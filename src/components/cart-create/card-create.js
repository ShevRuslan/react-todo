import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './card-create.css'

const styles = theme => ({
    card: {
        padding: '15px',
        marginTop: '30px',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%',
    },
    input: {
        margin: theme.spacing.unit,
        width: '100%',
        marginTop: '20px'
    },
    button: {
        width: '100%',
        marginTop: '30px',
        textAlign: 'center'
    },
    error: {
        color: '#b71c1c',
        width: '100%',
        textAlign: 'left',
        fontSize: '18px',
        marginTop: '15px'
    }
});

class CartCreate extends Component {
    error = null;

    state = {
        name: '',
        text: '',
        error: null,
    }
    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    onItemAdd = (e) => {
        e.preventDefault();
        const { name, text } = this.state;
        if (name.trim().lenght !== 0 && text.trim().length !== 0) {
            this.props.onAdd({
                name: name,
                text: text
            })
            this.setState({
                name: '',
                text: '',
                error: false
            })
            this.error = null;
        }
        else {
            this.setState({
                error: true
            })
            this.error = <Typography className={this.props.classes.error} variant="h6" >Поля пустые!</Typography>
        }
    }
    render () {
        const { classes } = this.props;
        const { name, text } = this.state;

        return (
            <div className="wrapper-form">
                <Card className={classes.card}>
                    <Typography variant="h4" >
                        Создать записку
                    </Typography>
                    <form
                        className={classes.form}
                        onSubmit={this.onItemAdd}
                    >
                        <Input
                            placeholder="Заголовок"
                            value={name}
                            className={classes.input}
                            onChange={this.onNameChange}
                            inputProps={{
                            'aria-label': 'Description',
                            }}
                        />
                        <Input
                            placeholder="Текст"
                            value={text}
                            className={classes.input}
                            onChange={this.onTextChange}
                            inputProps={{
                            'aria-label': 'Description',
                            }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            type="submit">
                            Создать записку
                        </Button>
                    </form>
                    {this.error}
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(CartCreate);