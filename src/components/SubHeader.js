import React from 'react';

class SubHeader extends React.Component {
  render() {
    return (
        <section id="subheader">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default SubHeader;
