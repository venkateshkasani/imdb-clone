
const DirectorCard = ({data}:{data:any}) => {
  const truncatedBio = data.Bio.length > 20 ? data.Bio.slice(0,20) + '...' : data.Bio;
  return (
    <div className="bg-black w-fit min-w-[22vw] min-h-[50vh] flex flex-col items-center">
        <img src={data.poster} className="h-[32vh] w-[18vw] rounded-3xl" />
        <div className="flex flex-col gap-2 items-center">
            <span className="text-semibold text-slate-200 font-semibold text-xl">{data.name}</span>
            <span className="text-slate-200">Born: <span className="text-primary font-semibold">{data.DOB}</span></span>
            <span className="text-slate-200">Bio: <span className="text-primary font-semibold">{truncatedBio}</span></span>
        </div>
    </div>
  )
}

export default DirectorCard