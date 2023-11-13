import "./Card.css";

const Card = ({ Title, SubTitle, Icon, ButtonText }) => {
  // If the card is clicked, render this:
  // return ();

    
  const colorTheme = {
    lemon: {
      title: "#166F39",
      primary: "#8CFFBA",
      secondary: "#CFFFE2",
      subtitle: "#000000",
      buttonColor: "#FCED84",
      buttonTextColor: "#000000",
    },
    rocket: {
      title: "#0B0C11",
      primary: "#A6CFE2",
      secondary: "#C2DCE9",
      subtitle: "#0B0C11",
      buttonColor: "#0B0C11",
      buttonTextColor: "#FFD600",
    },
    doggy: {
      title: "#502F7E",
      primary: "#EEB200",
      secondary: "#FFE086",
      subtitle: "#502F7E",
      buttonColor: "#FFFFFF",
      buttonTextColor: "#502F7E",
    }
  };
  // If the card isn't clicked, render this:
  return <div className="CardContainer">
    <div className="Title">
      <h1 className="TitleColor">{Title}</h1>  
      <p>{Icon}</p>
    </div>
    <div className="SubContent">
      <h2 className="SubTitleColor">{SubTitle}</h2>
      <button className="ButtonColor">{ButtonText}</button>
    </div>
    </div>;
};

export default Card;
