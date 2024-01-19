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

const howItWorks = [
    {
        title:'Send a Message on WhatsApp',
        content:'This could be a question, command, or a request for information',
        link:''
    },
    {
        title:'Message processing using AI',
        content:`ChatGPT understand the context and intent behind the user's text`,
        link:''
    },
    {
        title:'ChatGPT Generates a Response',
        content:`The response can be tailored based on the user's previous interaction`,
        link:''
    },
    {
        title:'Response via WhatsApp',
        content:'The user can continue the conversation or make new queries as desired',
        link:''
    },
]

let string = ``;

let how = ``;

for(let i=0;i<useCases.length;i++)
{
    string += `<div class= useCaseCard><div class="useCaseCardHeading">
    ${useCases[i].title}
    </div>
    
    <div class="useCaseCardContent">
    ${useCases[i].content}
    </div>
    
    <a href="">Try this feature</a>
    </div>
    `
}
document.getElementsByClassName('allUseCases')[0].innerHTML=string


for (let i=0;i<howItWorks.length;i++)
{
    how+=`<div class="howCard">
    <div class="howCardLeft">${i+1}</div>
    <div class="howCardRight">
    <div class="howCardTitle">${howItWorks[i].title}</div>
    <div class="howCardContent">${howItWorks[i].content}</div>
    </div>
    
</div>`
}

document.getElementsByClassName('howContent')[0].innerHTML=how;

let reviews = [
    {
        title:'Never been easy',
        content:`Writing great marketing copy has never been this easy. Since i started using Copy.ai, I spend only a few minutes to whip myself a good piece, whether it's for our blog, social media posts or while creating online ads. Now marketers like me have no excuse.`,
        author:'Tina'
    },
    {
        title:'Amazing',
        content:'I spend only a few minutes to whip myself a good piece.',
        author:'Anuraag'
    },
    {
        title:'Fantastic',
        content:'Writing great marketing copy has never been this easy. Since I started using Copy.ai, I spend only a few minutes to whip myself a good piece.',
        author:'Rakesh'
    },
    {
        title:'Very Easy',
        content:'Writing great content',
        author:'Rahul'
    },
]

let reviewContentMobile = ``;
let reviewContentDesktop = ``


for(let i=0;i<2;i++)
{
    reviewContentMobile+=`<div class="reviewCard">
    <div class="reviewCardTitle">${reviews[i].title}</div>
    <div class="reviewCardContent">${reviews[i].content}</div>
    <div class="reviewCardAuthor"><img height='50px' src="./WriteEase WhatsApp PNG/Ellipse ${i+1}.png" alt=""><div style="font-weight:600;">${reviews[i].author}</div></div>
</div>`
}


for(let i=0;i<reviews.length;i++)
{
    reviewContentDesktop+=`<div class="reviewCard">
    <div class="reviewCardTitle">${reviews[i].title}</div>
    <div class="reviewCardContent">${reviews[i].content}</div>
    <div class="reviewCardAuthor"><img height='50px' src="./WriteEase WhatsApp PNG/Ellipse ${i+1}.png" alt=""><div style="font-weight:600;">${reviews[i].author}</div></div>
</div>`
}

document.getElementsByClassName('reviewContent')[0].innerHTML=reviewContentMobile;


document.getElementsByClassName('reviewContentDesk')[0].innerHTML=reviewContentDesktop;


let pricingDetails = [
    {
        heading:'Free',
        price:0,
        button:'Start for free',
        subheading:'Give it a go without any commitment',
        feature:['100 messages per month','Image Generation', '24/7 Availabilty', 'Web Search Functionality', 'Local Chat History', 'Interact with Files']
    },
    {
        heading:'Premium Monthly',
        price:5,
        button:'Choose Plan',
        subheading:'Use the best ChatGPT in WhatsApp',
        feature:['Unlimited Messages','Image Generation', '24/7 Availabilty', 'Web Search Functionality', 'Local Chat History', 'Interact with Files']
    },
    {
        heading:'Premium Yearly',
        price:49,
        button:'Choose Plan',
        subheading:'Use the best ChatGPT in WhatsApp',
        feature:['Unlimited Messages','Image Generation', '24/7 Availabilty', 'Web Search Functionality', 'Local Chat History', 'Interact with Files']
    }
];


let priceContent= ``;

for( let i=0; i< pricingDetails.length; i++)
{
    priceContent+=`<div class="pricingCard">
    <div class="priceHeading">${pricingDetails[i].heading}</div>
    <div class="priceAndBtn">
        <div class="price">$${pricingDetails[i].price}</div>
        <div class="priceBtn">${pricingDetails[i].button}</div>
    </div>
    <div class="priceSubHeading">${pricingDetails[i].subheading}</div>
    <div class="priceFeatures">
    <li class="flist">${pricingDetails[i].feature[0]}</li>
    <li class="flist">${pricingDetails[i].feature[1]}</li>
    <li class="flist">${pricingDetails[i].feature[2]}</li>
    <li class="flist">${pricingDetails[i].feature[3]}</li>
    <li class="flist">${pricingDetails[i].feature[4]}</li>
    <li class="flist">${pricingDetails[i].feature[5]}</li>
</div>

</div>`
}

document.getElementsByClassName('pricingContent')[0].innerHTML=priceContent;


window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
      document.getElementById('elems').style.opacity=1 
    }
    else{
        document.getElementById('elems').style.opacity=0
    }
  });