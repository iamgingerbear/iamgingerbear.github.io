Vue.component('banner', {
    template: `
    <div class="banner">
        <img class="logo" src="img/Designaffix_no_background_cropped.png" alt="Designaffix logo"></img>
        <div class="tagline">    
            <h2>Show your good side at all times<br>Responsive website designed to connect your brand to your customers.</h2>
        </div>
        <div class="arrow">
            <img alt="arrow down" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADTSURBVGhD7dK9DcIwGIRhd9AAE7AYJQMwAKOwCx1bIBoalkDAOeSkFAhbjn8+S/dIp8TuXslORERERCTFElt8f03ajN+gO3bFtsPJlj32xI7DKeCMvbEbZinGR7zG7fxFyBq7YJZiphEHfxHLUkxyBFmImR1BLWOyRVCLmOwRVDOmWATViCkeQSVjqkVQiZjqEZQzplkE5YhpHkFzYsxEUEqMuQhaYbExZiMoJsZ8BP2L6SaCfsV0F0HTmAfWZQRNY7qNIB9zwvzTEhERERGRDJz7ALs1cajR0ID6AAAAAElFTkSuQmCC">
        </div>
    </div>
    `,
})

Vue.component('about-us', {
    template: `
    <div class="about">
        <h2>About us</h2>
        <div class="textBox">
            <p class="paragraph" >Designaffix is a Narberth based startup web development company with a focus on user experience and accessibility. We aim to provide intuative websites that allow customers to connect with brands and create a website that anyone can enjoy.</p>
            <p class="paragraph" >We are passionate about what we do and as such are constantly increasing our skills to offer a better service as well as provide additional services.</p>
        </div>
    </div>
    `,
})

Vue.component('pricing', {
    template: `
    <div class="price">
        <div class="basicPackage">
            <h2>Prices start from £250</h2>
            <div class="textBox">
                <p class="paragraph">Base package comes with:</p>
                <ul>
                    <li class="paragraph" v-for="item in basePack">{{ item }}</li>
                </ul>
                <p class="paragraph">On contact, we will be happy to answer any questions, as well as help work out the requirements for the job. I will not charge for a quote.<br>Expect a reponse within 24 hours.</p>
            </div>
        </div>
        <div class="addOn">
            <h2>Add-Ons</h2>
            <div class="textBox">
                <p class="paragraph" v-for="addon in addOns">{{addon}}</p>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            basePack:[
                "Responsive design that adapts to any screen.",
                "4 static web pages",
                "6 months hosting",
                "Email account",
                "Accessibility that allows every customer to connect with your brand",
            ],
            addOns:[
                "Search engine optimisation (SEO) to get your site higher up on the search rankings and increasing traffic to your site.",
                "Additonal pages. Sometimes 4 pages aren't enough to display everything that you want your customers to see.",
                "Quotes available on contact as prices will depend on the project size",
            ],
        }
    },
})

Vue.component('portfolio', {
    template: `
    <div class="portfolio">
        <h2>Portfolio</h2>
        <div class="portfolioContainer">
            <div v-for="project in projects"
            :product="project" :key="project.id" class="portfolioPanel">
                <div >
                    <a :href="project.site" target="_blank"><img class="portfolioImage" :src="project.image" :alt="project.alt"></a>
                </div>
                <div class="description">
                    <a href="project.site" target="_blank"><h3 class="title">{{project.title}}</h3></a>
                    <p class="paragraph portfolioDescription">{{project.desc}}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            projects: {
                mntax:{
                    image: "img/mn-accountants-logo.png",
                    alt: "MN Accountants Logo",
                    site: "https://www.mntaxaccountants.com/",
                    title:"MN Tax Accountants.com",
                    desc: "I was asked to refresh the homepage. Modernising it by creating a responsive website, a colour scheme that suited the brand, easily readable text and easily navigatable.",
                },
                stuff:{
                    image: "https://ahotaku39.files.wordpress.com/2012/11/cmpfullscreen-capture-1142012-12809-pm.jpg",
                    alt: "something else",
                    site: "#",
                    title:"FirstBlog.com",
                    desc: "I was tasked with creating a fresh and easy to use blogging site for a small business. Blah, blah, etc.",
                },
                things:{
                    image: "https://i.imgur.com/waxS1XS.jpg",
                    alt: "a logo",
                    site: "#",
                    title:"Something.com",
                    desc: "blah, blah, blah. Something about how it was a fun project or w/e",
                }, 
            }
        }
    },
})

Vue.component('contact', {
    template: `
    <footer class="contact">
        <h2>Contact Us</h2>

        <div class="email">
        <p class="email twelve columns links"><a class="e-l footer-links" href="#" data-ep1="jack" data-ep2="designaffix.co" data-ep3="uk">xxxx@xxxxxxx.xx.xxx</a></p>
        </div>           

        <div class="mobile">
            <p class="twelve columns mobile links"><a class="e-l2 footer-links" href="#" data-p1="07548" data-p2="855" data-p3="583">xxxxxxxxx</a></p>
        </div>
    </footer>
    `,
})

var app = new Vue({
    template: `
    <div class="container">
        <banner></banner>

        <about-us></about-us>

        <pricing></pricing>

        <portfolio></portfolio>

        <contact></contact>
    </div>
    `,
    el: '#app',
    data: {
        
    },
    methods: {

    }
})