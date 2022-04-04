import { memo } from "react"

const MemoHOC = ({ name }) => {
    console.log('re-render Memo HOC')

    return (
        <>
            <p>Memo HOC: {name}</p>
        </>
    )
}

export default memo(MemoHOC)