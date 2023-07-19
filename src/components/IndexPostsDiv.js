import Image from "next/image";

function IndexPost(props) {
    return (
        <div style={{minWidth:330}} className="bg-helper2 h-40 w-[330px] rounded-lg"><Image className="shadow-md rounded-lg" height={300} width={330} src={props.src}/></div>
    );
}

function IndexPostsDiv() {
    return (
        <div className="overflow-x-scroll overflow-y-hidden pb-10 pr-5  gap-4 container mx-auto flex flex-row min-w-0 pl-4 ">
          <IndexPost src='/2.png'/>
          <IndexPost src='/1.png'/>
          <IndexPost src='/3.png'/>
          <IndexPost src='/4.png'/>
          <IndexPost src='/8.png'/>
        </div>
    );
}

export default IndexPostsDiv;