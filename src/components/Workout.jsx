import ReactMarkdown from "react-markdown"


export default function Workout (props) {
    return (
        <section>
            <h1>FlexGPT Recommends:</h1>
            <ReactMarkdown>
                 {props.workout}
            </ReactMarkdown>
        </section>
    )
}