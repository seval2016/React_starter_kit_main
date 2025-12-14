import { StarFilled, UserOutlined } from "@ant-design/icons";
import "./course.css";

function Course({ course }) {
  const { id, title, desc, price, rating, students, image } = course;

  return (
    <div className="course-card dark">
      {/* Image */}
      <div className="course-image">
        <img src={image} alt="SQL Kursu" />
      </div>

      {/* Content */}
      <div className="course-body">
        <h3 className="course-title">{title}</h3>

        <p className="course-desc">
         {desc}
        </p>

        {/* Info */}
        <div className="course-info">
          <span className="price">{price} TL</span>

          <span className="rating">
            <StarFilled />
           {rating}
          </span>

          <span className="students">
            <UserOutlined />
            {students}
          </span>
        </div>

        {/* Actions */}
        <div className="course-actions">
          <button className="btn primary">SATIN AL</button>
          <button className="btn outline">DETAY</button>
        </div>
      </div>
    </div>
  );
}

export default Course;
