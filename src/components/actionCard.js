export default function actionCard(prop) {
  return (
    <>
      <div className="flex flex-auto justify-between">
        <div className={prop.clName}>{prop.icon}</div>
        <div className="flex flex-col flex-6 pl-6">
          <div className="text-slate-400">
            <span className="text-sm">{prop.name}</span>
          </div>
          <div>
            <span className="text-xl font-bold">{prop.value}</span>
          </div>
        </div>
      </div>
    </>
  );
}
