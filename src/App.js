import "./styles.css";
import React from "react";
import List from "./component/List";
import AddForm from "./component/AddForm";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            id: "",
            note: "",
            data: []
        };
    }

    onEdit = (id) => {
        const { data } = this.state;
        const item = data.find((item) => item.id === id);

        if (item) {
            this.setState({ ...item, show: true });
        }
    };

    onDelete = (id) => {
        const { data } = this.state;
        const index = data.findIndex((item) => item.id === id);

        if (index > -1) {
            data.splice(index, 1);

            this.setState([...data]);
        }
    };

    hideForm = () => {
        this.setState({
            show: false,
            id: "",
            note: ""
        });
    };

    onAdd = () => {
        this.setState({
            show: true
        });
    };

    onSave = (id, note) => {
        const { data } = this.state;
        if (id) {
            const index = data.findIndex((item) => item.id === id);
            if (index > -1) {
                data[index] = note;
            }
        } else {
            data.push({
                id: new Date().getTime(),
                note: note
            });
        }

        this.setState({ data: [...data], show: false });
    };

    render() {
        const { show, id, note, data } = this.state;
        return (
            <div className="App">
                <div>
                    <input onClick={this.onAdd} class="form-control form-control-sm" type="text" placeholder="Bạn đang suy nghĩ gì...?" aria-label=".form-control-sm example" />
                </div>
                <List onEdit={this.onEdit} onDelete={this.onDelete} data={data} />
                <AddForm
                    show={show}
                    id={id}
                    note={note}
                    hideForm={this.hideForm}
                    onSave={this.onSave}
                />
            </div>
        );
    }
}
