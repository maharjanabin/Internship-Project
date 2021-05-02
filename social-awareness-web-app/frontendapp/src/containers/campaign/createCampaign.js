import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const FormItem = Form.Item;


class CustomForm extends React.Component {
  
  handleFormSubmit = async (event, requestType, articleID) => {
    event.preventDefault();

    const postObj = {
      title: event.target.elements.title.value,
      content: event.target.elements.content.value
    }

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`,
    };
    
    if (requestType === "post") {
      await axios.post("http://127.0.0.1:8000/campaign/create", postObj)
        .then(res => {
          if (res.status === 201) {
            this.props.history.push(`/`);
          }
        })
    }
  };

  render() {
    return (
        <div className='container mt-5'>
            <h1>Create Campaign</h1>
            <p>Create your own new Campaigns</p>
            <br/>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control mt-1" id="title"/>
                </div><br/>
                <div className="col-md-12">
                    <label for="category" className="form-label mt-3 mr-3">State</label>
                    <select id="category" className="form-select"  >
                    <option selected>Social</option>
                    <option>Domestic Voilence</option>
                    <option>Racial Discrimination</option>t
                    <option>Bullying</option>
                    <option>ANTI BEGGARY</option>
                    <option>ANTI RAPE</option>
                    <option>ANTI ABORTION</option>
                    <option>ANTI GAMBLING</option>
                    <option>CLIMATE CHANGE</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label for="excerpt" className="form-label mt-3">Excerpt</label>
                    <input type="text" className="form-control" id="excerpt"/>
                </div>
                <div className="col-4">
                    <label for="Month" className="form-label mt-3">Month</label>
                    <input type="month" className="form-control" id="Month" placeholder="Jan"/>
                </div>
                <div className="col-4">
                    <label for="Day" className="form-label mt-3">Day</label>
                    <input type="day" className="form-control" id="Day" placeholder="1"/>
                </div>
                <div className="col-md-12">
                    <label for="event_date" className="form-label mt-3">Event Date</label>
                    <input type="date" className="form-control" id="event_date"/>
                </div>
                
                <div className="col-md-12">
                    <label for="event_location" className="form-label">Event Location</label>
                    <input type="text" className="form-control" id="event_location"/>
                </div>
                <div className="col-lg">
                    <label for="content" className="form-label input-lg mt-3">Content</label>
                    <textarea type="textarea" cols="4" className="form-control" id="content"/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary mt-3">Create Campaign</button>
                </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(CustomForm);