import Link from "next/link";

export function HeaderTop() {
  return (
    <div>
      <div>
        <label htmlFor="city" className="visuallyhidden">
          Выбрать город:
        </label>
        <select id="city" name="city">
          <option>Новый Уренгой</option>
          <option>Москва</option>
          <option>Санкт-Петербург</option>
        </select>
      </div>
      <nav>
        <Link href={"about"}>О нас</Link>
        <Link href={"dostavka"}>Доставка и оплата</Link>
        <Link href={"faq"}>Вопросы и ответы</Link>
        <Link href={"feedback"}>Отзывы</Link>
        <Link href={"articles"}>Статьи</Link>
        <Link href={"contacts"}>Контакты</Link>
        <button>Ещё</button>
      </nav>
      <div>
        <a href="tel:+7(3452)59-49-45">+7 (3452) 59-49-45</a>
        <button>Заказать звонок</button>
      </div>
    </div>
  );
}
