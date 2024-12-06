import { useParams } from "react-router-dom";

const articles = [
  {
    id: 0,
    title: "Degas ความลับที่ทำให้กาแฟของคุณอร่อยขึ้น",
    content: "เนื้อหาเต็มของบทความ 1...",
  },
  {
    id: 1,
    title: "อีกหนึ่งเกร็ดความรู้ที่คุณต้องลอง",
    content: "เนื้อหาเต็มของบทความ 2...",
  },
  {
    id: 2,
    title: "อยากให้กาแฟหอมขึ้น? ลองวิธีนี้!",
    content: "เนื้อหาเต็มของบทความ 3...",
  },
];

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles[parseInt(id || "0")];

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
