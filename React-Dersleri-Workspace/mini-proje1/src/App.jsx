import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Course from "./components/cards/Course";
import courses from "./data/coursesData";

function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main-content">
        <div className="container course-grid">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
