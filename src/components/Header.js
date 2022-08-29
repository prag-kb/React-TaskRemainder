import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? "red" : "green"} text={showAdd ? "close" : "Add"} onClick={onAdd}/>
        {" "}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Remainder",
}

Header.propTypes = {
title: PropTypes.string
}

export default Header;
