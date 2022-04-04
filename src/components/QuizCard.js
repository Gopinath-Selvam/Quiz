import { useEffect } from "react";

export default function QuizCard(props) {


    const validateAnswer = (event) => {
        if (parseInt(event.target.value) === props.question.ais) console.log("Correct Answer!");
        else console.log("Wrong Answer!");
    }

    return (
        <div className="carousel-item" id={props.question.id}>
            <div className='container'>
                <div className='col content'>
                    <div className='row'>Data Structures Quiz</div>
                    <div className='row'>{props.question.q}</div>
                    <div className='row options'>
                        <div className='col'>
                            <button type="button" value="0" onClick={(event) => validateAnswer(event)} className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                Stack
                            </button>
                        </div>
                        <div className='col'>
                            <button type="button" value="1" onClick={(event) => validateAnswer(event)} className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                Tree
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button type="button" value="2" onClick={(event) => validateAnswer(event)} className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                Hashmap
                            </button>
                        </div>
                        <div className='col'>
                            <button type="button" value="3" onClick={(event) => validateAnswer(event)} className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                Queue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}