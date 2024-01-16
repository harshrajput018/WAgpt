const useCases = [
    {
        title:'Writing Content',
        content:'Create compelling campaign content swiftly with AI-driven suggestions',
        link:''
    },
    {
        title:'Digital Ad copy',
        content:'Craft engaging ad copy with AI to boost your digital campaigns',
        link:''
    },
    {
        title:'Doc Analyser',
        content:'Create compelling campaign content swiftly with AI-driven suggestions',
        link:''
    },
    {
        title:'Social media content',
        content:'Generate vibrant posts and captions for social media platforms using AI',
        link:''
    },
    {
        title:'General Queries',
        content:'Get Quick, AI-powered answers for a variety of topics',
        link:''
    },
    {
        title:'Grammar Check',
        content:'Improve content writing with AI-based grammar corrections',
        link:''
    },
    {
        title:'eCommerce Copy',
        content:'Attract your customers with AI-crafted product narratives',
        link:''
    },
    {
        title:'Product Description',
        content:'AI helps to succinctly showcase product highlights',
        link:''
    },

]

let string = ``;

for(let i=0;i<useCases.length;i++)
{
    string += `<div class= useCaseCard><div class="useCaseCardHeading">
    ${useCases[i].title}
    </div>
    
    <div class="useCaseCardSubHead">
    ${useCases[i].content}
    </div>
    
    <a href="">Try this feature</a>
    </div>
    `
}



document.getElementsByClassName('allUseCases')[0].innerHTML=string