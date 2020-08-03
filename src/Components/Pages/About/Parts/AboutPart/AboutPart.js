import React from "react";
import programmer from "../../../../../statics/about/programmer.jpg";
import "./AboutPart.css";
import useFade from '../../../../Hooks/useFade';
import translate from "../../../../Functions/translate";
import { useSelector } from "react-redux";

const AboutPart = () => {
  const {returnVal: {className: abtTxtCname}, element: abtText} = useFade('about-txt-container', 'popfrom-left', 100);
  const {returnVal: {className: abtImgCname}, element: abtImg} = useFade('about-img-container', 'popfrom-right', 100);
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className="about-part-wrapper">
      <div className={abtTxtCname} ref={abtText}>
        <div className="about-txt-header">
          <h3>{translate("ჩემს შესახებ | About Me | Обо мне", lang)}</h3>
          <div className="abt-header-border"></div>
        </div>
        <div className="about-txt-content">
          <p>
            {translate(
            `
            Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.
            იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა.
            მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია.
            განსაკუთრებული პოპულარობა მას 1960-იან წლებში გამოსულმა Letraset-ის ცნობილმა ტრაფარეტებმა მოუტანა,
            უფრო მოგვიანებით კი — Aldus PageMaker-ის ტიპის საგამომცემლო პროგრამებმა,
            რომლებშიც Lorem Ipsum-ის სხვადასხვა ვერსიები იყო ჩაშენებული.

            |

            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            
            |
            
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
            используя Lorem Ipsum для распечатки образцов.
            Lorem Ipsum не только успешно пережил без заметных изменений пять веков,
            но и перешагнул в электронный дизайн.
            Его популяризации в новое время послужили публикация листов
            Letraset с образцами Lorem Ipsum в 60-х годах и,
            в более недавнее время, программы электронной вёрстки типа Aldus PageMaker,
            в шаблонах которых используется Lorem Ipsum.
            `,lang)}
          </p>
        </div>
      </div>
      <div ref={abtImg} className={abtImgCname}>
        <img src={programmer} alt="Programmer" />
      </div>
    </div>
  );
};

export default AboutPart;
