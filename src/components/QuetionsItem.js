import FaqItem from "../screens/Quetions";
function QuestionsItem(props){
    return(
        <div className="faq-list">
        <ul>
        <li data-aos="fade-up" data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">{props.question} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                <p>
                  {props.description}
                </p>
              </div>
            </li>
        </ul>
      </div>
    );
}
export default QuestionsItem;