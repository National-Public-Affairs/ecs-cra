import styles from './Popup.module.css';

export default function VideoPopup() {
  return (
    <div className={styles.embedWrapper}>
      <iframe
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/T5mKPD5wxJg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
    </div>
  );
}
