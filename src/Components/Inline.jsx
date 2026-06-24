// export default function   Inline() {
//     return(
//         <h1 style={{color: "green" , fontSize:"70px"}}>
//             inline styling
//         </h1>
//     )}

//The 2nd way of doing inline styling is to create a variable and then use it in the style attribute. This is useful when you have multiple styles to apply or when you want to reuse the same styles in different components.
    // const header  = {color: "green" , fontSize:"70px"}
    // export default function   Inline() {
    // return(
    //     <h1 style={header}>
    //         inline styling
    //     </h1>
    // )}\
    import styles from "./Inlinecomponent.module.css"
     const header  = {color: "green" , fontSize:"70px"}
    export default function   Inline() {
    return(
        <h1 className={styles.header}>
            inline styling
        </h1>
    )}