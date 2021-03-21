const Circle = ({ cell }) => {
  if (!cell.player) {
    return <div></div>;
  }

  return (
    <>
      {cell.player.color === "red" ? (
        <div className="circle__player circle__player--red"></div>
      ) : (
        <div className="circle__player circle__player--yellow"></div>
      )}
    </>
  );
};

export default Circle;
