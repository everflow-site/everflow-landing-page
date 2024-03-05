import "./LiquidityCard.css";

const LiquidityCard = ({ image, title, description }) => {
  return (
    <div className="container">
      <div className="liquidity-image">
        <img src={image} width={95} alt={title} />
      </div>
      <div className="liquidity-title">
        {title}
      </div>
      <div className="liquidity-description">
        {description}
      </div>
    </div>
  )
}

export default LiquidityCard;
