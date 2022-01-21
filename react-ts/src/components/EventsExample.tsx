import React, {useRef, useState} from 'react'

const EventsExample: React.FC = () => {
    const [text, setText] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const ClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input type={'text'} value={text} onChange={ChangeHandler} placeholder={'управляемый'}/>
            <input type={'text'} value={text} onChange={ChangeHandler} placeholder={'не управляемый'} ref={inputRef}/>
            <button onClick={ClickHandler}>BTN</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: '#f00'}} />
            <div onDrop={dropHandler} onDragLeave={dragLeaveHandler} onDragOver={dragOverHandler}
                 style={{width: 200, height: 200, background: isDrag ? '#0f0' : '#f00', marginTop: 15}} />
        </div>
    )
}

export default EventsExample