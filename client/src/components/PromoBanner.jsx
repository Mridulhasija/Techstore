import { useToast } from "../hooks/useToast";
import { useCountdown } from "../hooks/useCountdown";

function PromoBanner() {
  const showToast = useToast();
  const { hrs, mins, secs } = useCountdown(8, 34, 12);

  return (
    <div className="promo-banner">
      <div className="promo-text">
        <h2>Flash Sale — Up to 40% Off</h2>
        <p>Limited time deals on top-rated electronics. Ends tonight.</p>
      </div>

      <div className="countdown">
        <div className="count-block">
          <div className="count-num">{hrs}</div>
          <div className="count-label">Hours</div>
        </div>
        <div className="count-block">
          <div className="count-num">{mins}</div>
          <div className="count-label">Mins</div>
        </div>
        <div className="count-block">
          <div className="count-num">{secs}</div>
          <div className="count-label">Secs</div>
        </div>
      </div>

      <button className="btn-primary" onClick={() => showToast("Taking you to flash deals!")}>
        Shop Flash Sale →
      </button>
    </div>
  );
}

export default PromoBanner;
