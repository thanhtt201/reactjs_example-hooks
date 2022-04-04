import { memo, useCallback, useMemo } from "react"

const UserCallbackHooks = ({ price, handleInputPrice }) => {
    console.log('re-render UseCallback Hooks')

    return (
        <div>
            <input type="text" value={price} placeholder="price" onChange={handleInputPrice} />
        </div>
    )
}

export default memo(UserCallbackHooks)