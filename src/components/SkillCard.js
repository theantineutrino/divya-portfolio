export default function SkillCard(props) {
  return (
    <div className="border-[1px] rounded-xl p-5 bg-black text-gray-200 hover:text-black hover:bg-white">
      <div className="md:text-7xl">{props.title}</div>
    </div>
  );
}
