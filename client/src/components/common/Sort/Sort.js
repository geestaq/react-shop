import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
//import './Sort.scss';

class Sort extends React.Component {
  constructor(props) {
    super(props);
/*
    this.state = {
      presentPage: props.initialPage || 1
    };
*/
  }

  onChange = (event) => {
    const { onSortChange } = this.props;
    const newSort = parseInt(event.target.value);
//DEBUG
console.log({
  newSort: newSort
});
    onSortChange(newSort);
  }

  render() {
    const { presentSorting } = this.props;
//DEBUG
console.log({
  presentSorting: presentSorting
});
    return (
      <div className="sorting clearfix">
        <Form inline>
          <FormGroup>
            <Label for="sort">Sortuj: </Label>
            <Input type="select" name="sort" id="sort"
              onChange={(event) => this.onChange(event)}
              value={presentSorting}>
              <option value="0">A-Z</option>
              <option value="1">Z-A</option>
              <option value="2">od najtańszego</option>
              <option value="3">od najdroższego</option>
            </Input>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

Sort.propTypes = {
  presentSorting: PropTypes.number,
  onSortChange: PropTypes.func.isRequired,
};

export default Sort;
