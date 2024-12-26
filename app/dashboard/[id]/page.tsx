
function page({ params }: { params: {id : string} }) {


    return (
        <div>
            s {params.id}
        </div>
    )
}

export default page
