import React from "react";

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ""
        };
    }

    static getDerivedStateFromProps(props, state) {
        const { id, note } = props;

        if (id) {
            return { note };
        }

        return null;
    }

    onChange = (e) => {
        this.setState({ note: e.target.value });
    };

    onSave = (e) => {
        e.preventDefault();
        const { onSave, id } = this.props;
        const { note } = this.state;
        onSave(id, note);
        this.setState({ note: "" });
    };

    onCancel = (e) => {
        e.preventDefault();
        const { hideForm } = this.props;
        this.setState({ note: "" });
        hideForm();
    };

    render() {
        const { show, id } = this.props;
        const { note } = this.state;
        return (
            <>
                <div className={`overlay ${!show && "hidden"}`} />
                <div className={`form ${!show && "hidden"}`}>
                    <form>
                        <h4>{id ? "sửa comment" : "thêm comment"}</h4>
                        <div>
                            <input type="text" onChange={this.onChange} class="form-control" placeholder="cảm nghĩ của bạn" />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <button className="btn btn-warning" onClick={this.onSave}>Save</button>
                            <button className="btn btn-primary" onClick={this.onCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
