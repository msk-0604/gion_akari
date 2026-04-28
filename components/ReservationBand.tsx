const RESERVE_URL = "https://www.tablecheck.com/ja/iroakari-gion";

type ReservationBandProps = {
  text: string;
};

export function ReservationBand({ text }: ReservationBandProps) {
  return (
    <section className="reservation-band animate-fade">
      <div className="container reservation-band-inner">
        <p>{text}</p>
        <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="cta cta-primary">
          予約する
        </a>
      </div>
    </section>
  );
}
