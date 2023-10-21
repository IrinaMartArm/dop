type PropsType = {
    name: string
    collback: ()=> void
}

export const Button = (props: PropsType) => {
    const handler = () => {
        props.collback()
    }
    return (  
        <button onClick={handler}>{props.name}</button>
    );
}
