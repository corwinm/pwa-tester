import React from "react";
import styles from "components/FloatingMessage.module.scss";

export default function FloatingMessage({ title, message = "", actionText, deleteClick, actionClick }) {
  return (<div className={styles.floatingContainer + " notch-inset"}>
    <article className={"message is-primary " + styles.withShadow}>
      <div className="message-header">
        <p>{title}</p>
        <button className="delete is-medium" aria-label="delete" onClick={deleteClick} />
      </div>
      <div className="message-body">
        {message}
        <p>
          <button className="button is-primary is-fullwidth is-outlined" onClick={actionClick}>
            {actionText}
          </button>
        </p>
      </div>
    </article>
  </div>);
}
