export default{
    mounted(){
        window.addEventListener('load', () => {
            this.isMobile = $(window).width() < 992
       })
       console.log('REFERRER',this.referrer)
       this.referrer = (document.referrer.split('/')[2] && document.referrer.split('/')[2]!="app.focusmind.net")?document.referrer.split('/')[2]   :this.referrer;
    },
    data(){
        return {
            isMobile:false,
            referrer:'https://focusmind.net/'
        }
    }
}