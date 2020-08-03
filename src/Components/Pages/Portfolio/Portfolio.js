import React from "react";
import PortfolioItem from "./Parts/PortfolioItem/PortfolioItem";
import "./Portfolio.css";
import Header from "../../Reusable/Header/Header";
import { useSelector } from "react-redux";
import translate from "../../Functions/translate";

const Portfolio = () => {
  const lang = useSelector(state => state.lang.lang);  
  const projects = [
    {
      name: "Hirest.ge",
      img: require("../../../statics/portfolio/hirest.png"),
      desc: 
      translate(`
        ჰირესტი ონლაინ დასაქმების პლატფორმაა, სადაც დამსაქმებელს შეუძლია განათავსოს ვაკანსიები
        ონლაინ გასაუბრებით, ან მის გარეშე, ინტეგრირებული შეტყობინებებით პირდაპირ რეჟიმში
        პირდაპირ ჰირესტში.

        |

        Hirest is an online job seeking website, where employer can upload
        vacancies with integrated online interview, or without it, with
        integrated live notification system
        
        |

        Hirest - это веб-сайт для поиска работы в Интернете, где
        работодатель может загружать вакансии с помощью
        встроенного онлайн-интервью или без него с помощью 
        встроенной системы оповещения в режиме реального времени.
      `
      ,lang)
        ,
      link: "https://hirest.ge",
    },
    {
      name: "Portal",
      img: require("../../../statics/portfolio/portal.png"),
      desc: 
      translate(
      `
        პორტალი ონლაინ: ტექსტური, ვიდეო და ხმოვანი ჩათის პლატფორმაა სადაც მომხმარებლებს შეუძლიათ
        შემთხვევითი პრინციპით შეხვდნენ მათი ჩათის პარტნიორს.

        |

        Portal is online: text,video and voice chat platform where users can
        match randomly with their chat partner

        |

        Портал онлайн: платформа для текстового, видео и голосового
        чата, где пользователи могут случайным образом совпадать со
        своим партнером по чату.
      `
      ,lang),
          
      link: "https://portalchat.herokuapp.com",
    },
    {
      name: "PinkTravel",
      img: require("../../../statics/portfolio/pinktravel.png"),
      desc: translate(
      `
        ტურისტული კომპანია ფინქ თრეველი.

        |

        Tourism company PinkTravel

        |

        Туристическая компания Pink Travel.
      `,lang),
      link: "https://pinktravel.herokuapp.com",
    },
    {
      name: "Pastey",
      img: require("../../../statics/portfolio/nologo.png"),
      desc: translate(
      `
        ფეისთი, ეს Pastebin.com-ის კლონირებული ვერსიაა MERN ტექნოლოგიით.

        |

        Pastey is pastebin.com's clone built with MERN technology

        |

        Pastey - это клон pastebin.com, созданный по технологии MERN
      `,lang),
      link: "https://github.com/its-me-ilia/pastey",
    },
  ];
  return (
    <div name="portfolio" className="portfolio-container pfolio-sector">
      <Header name={translate("პროექტები | Projects | проектов",lang)} />
      <div className="projects-grid-wrapper">
        <div className="projects">
          {projects.map((val, i) => {
            return (
              <PortfolioItem
                key={projects.name}
                img={val.img}
                link={val.link}
                name={val.name}
                desc={val.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
