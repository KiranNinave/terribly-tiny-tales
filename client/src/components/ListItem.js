import React from "react";
import { Card } from "react-bootstrap";

const ListItem = props => {
  const { data } = props;
  return (
    <Card className="custom-card" body>
      <div className="list-item">
        <h3>
          <b>word:</b> {data.word}
        </h3>
        <h3>
          <b>count:</b> {data.count}
        </h3>
      </div>
    </Card>
  );
};

export default ListItem;
