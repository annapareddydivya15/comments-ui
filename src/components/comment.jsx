import React, {Component} from 'react';

class Comment extends Component {
    state = { commentDate: [] } 

    componentDidMount() {
        const created = this.props.value.created;
        this.convertToDate(created);
    }

    convertToDate(created) {
        const nthNumber = (number) => {
            if (number > 3 && number < 21) return "th";
            switch (number % 10) {
              case 1:
                return "st";
              case 2:
                return "nd";
              case 3:
                return "rd";
              default:
                return "th";
            }
        };

        // const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        const commentDate = new Date(created);

        // const monthOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric",hour: 'numeric', hour12: true, minute: 'numeric' };

        const month = commentDate.toLocaleString('en-US', {month: "long"});
        let day = commentDate.getDate();
        let timeOptions = { hour: 'numeric', hour12: true, minute: 'numeric' };
        const time = commentDate.toLocaleString('en-US', timeOptions);

        let timeStamp = [ commentDate.toLocaleString('en-US', {weekday: "long"}), month, day + nthNumber(day), ', '.concat(commentDate.getFullYear()) , 'at', time]
        
        this.setState({commentDate: timeStamp.join(' ')});
    }

    render() { 
        return (
            <div className="card border-dark bg-light mt-1">
                <div className="card-body">
                    <p className="card-text">{ this.props.value.message }</p>
                    <p className="card-text">
                        <small className="text-body-secondary">{ this.props.value.name }</small>
                        <small className="text-body-secondary"> on </small>
                        <small className="text-body-secondary">{ this.state.commentDate }</small>
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Comment;