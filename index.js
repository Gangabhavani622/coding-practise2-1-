const Button = (props) => {
  //  Write your code here.
  const { className, children } = props;
  return <button className={className}>{children}</button>;
};

const element = (
  //  Write your code here.
  <div className="background-container">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like" children="Like" />
        <Button className="comment" children="Comment" />
        <Button className="share" children="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
