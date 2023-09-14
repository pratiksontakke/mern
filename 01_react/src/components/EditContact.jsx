import React from "react";
import { withRouter } from "react-router-dom";

class EditContact extends React.Component {
    constructor(props) {
        super(props);
    
        // Access the location information using useNavigate
        const navigate = useNavigate();
        const { id, name, email } = navigate().state.contact;
        console.log(id, name, email);
        this.state = {
          id,
          name,
          email
        };
      }
    

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.updateContactHandler(this.state);
        this.setState({ name: "", email: "" });
    }

    render() {
        return (
            <div className="ui main">
                <br />
                <h2>Update Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditContact);
