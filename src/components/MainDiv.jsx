function Main({backgroundImageUrl}){
    return (
        <>
            <main className="w-full h-full bg-bgColor absolute -z-1">
                <div className="w-full h-2/6" style={{backgroundImage :`url(${backgroundImageUrl})`}}></div>
            </main>
        </>
    )
}

export default Main