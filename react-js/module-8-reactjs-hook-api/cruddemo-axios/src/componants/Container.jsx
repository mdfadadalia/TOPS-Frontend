export const Container = ({children}) => {
    return<>
        <div className="container py-5">
            <div className="row">
                {children}
            </div>
        </div>
    </>
}