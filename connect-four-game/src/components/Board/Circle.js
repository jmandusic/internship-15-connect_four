const Circle = ({ cell }) => {
  if (cell.player?.color === "red") {
    return <div className="circle__player circle__player--red"></div>;
  }

  if (cell.player?.color === "yellow") {
    return <div className="circle__player circle__player--yellow"></div>;
  }

  return <div className="circle--white"></div>
};

export default Circle;
