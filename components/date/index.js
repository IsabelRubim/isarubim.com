import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from "./style.module.scss";

export default function Date({ dateString }) {
  const time = dateString?.slice(0, -1);
  const date = parseISO(time);
  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, "LLL dd, yyyy", { locale: ptBR })}
    </time>
  );
}
