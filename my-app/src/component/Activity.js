import React from "react";
import {
  Form,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  FormGroup
  
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from '@material-ui/core/Button';
import './Activity.css'

export default class extends React.Component {
  render() {
    return (
      <div className="ml-5">
        <Card>
          
          <Form>
            <Input placeholder="Enter activity title here" />
          </Form>
          <CardBody>
            <CardTitle><h5>Details</h5></CardTitle>
            <FormGroup>
              <label>Start Time:</label>
              <Input type="time"/>
            </FormGroup>
            <FormGroup>
              <label>End Time:</label>
              <Input type="time"/>
            </FormGroup>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
          <Button color="primary" variant="contained"><FontAwesomeIcon icon={faPlus} className="mr-3"/>Add Activity</Button>
        </Card>
      </div>
    );
  }
}
