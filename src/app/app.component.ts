import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
} from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('dReveal', [
      transition(':enter', [
        style({ transform: 'translateY(20px) ', opacity: 1 }),
        animate(
          300,
          style({
            transform: 'translateY(0%)',
            opacity: 1,
            height: '100%',
          })
        ),
      ]),
      transition(':leave', [
        style({
          transform: 'translateY(0%)',
          opacity: 1,
          height: '100%',
        }),
        animate(300, style({ transform: 'translateY(100%)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  ele!: ElementRef<any>;
  title = 'Aurelius Grow';
  constructor(private http: HttpClient) {
    window.addEventListener('scroll', () => {
      let animationClasses = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClasses.forEach((e) => {
        if (e.getBoundingClientRect().top < 600) {
          e.classList.add('reveal');
        } else {
          e.classList.remove('reveal');
        }
      });
    });
    window.addEventListener('load', () => {
      this.loading = false;
      let animationClasses = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClasses.forEach((e) => {
        if (e.getBoundingClientRect().top < 600) {
          e.classList.add('reveal');
        } else {
          e.classList.remove('reveal');
        }
      });
    });
  }
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.activeMenu = false;
    });

    const swiperEl: any = document.querySelector('swiper-container');
    let firstTime = true;
    const swiperParams: SwiperOptions = {
      grabCursor: true,
      speed: 1000,
      spaceBetween: 20,
      loop: true,
      initialSlide: 2,
      // slidesPerView: 2,
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      on: {
        init() {
          swiperParams.initialSlide = 1;
          Object.assign(swiperEl, swiperParams);
          swiperEl.initialize();
          setTimeout(() => {
            let x = document.querySelector('.prev') as HTMLElement;
            x.click();
          }, 1000);
        },
      },
    };
    // const swiper = new Swiper('.swiper', swiperParams);
    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();

    // const swiper: any = document.querySelector('.swiper')?.swiper;

    // Now you can use all slider methods like
    // swiper.slideNext();
  }
  submit() {
    fetch('https://formsubmit.co/ajax/oisin@maureliusgrow.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(this.data),
    })
      .then((response) => response.json())
      .then((data) => {
        this.activeForm = false;
      })
      .catch((error) => (this.activeForm = false));
  }
  clients: any[] = [`logo`];
  activeForm: boolean = false;
  data: any = {
    job: null,
    studioName: null,
    benefits: null,
    fullName: null,
    email: null,
    phone: null,
    location: null,
    instagramProfile: null,
  };
  videosSlides: any[] = [
    'https://www.youtube.com/embed/BhyMMzMosL4',
    'https://www.youtube.com/embed/TGZkt-3Ujn0',
    'https://www.youtube.com/embed/lSQTgeDvOlA',
    'https://www.youtube.com/embed/4abvqPpUcxw',
    'https://www.youtube.com/embed/eLxRAj-bD0o',

    //
  ];
  increasStep() {
    if (
      (this.step == 0 && !this.data.job) ||
      (this.step == 1 && !this.data.studioName) ||
      (this.step == 2 && !this.data.instagramProfile) ||
      (this.step == 3 && !this.data.location) ||
      (this.step == 4 && !this.data.benefits) ||
      (this.step == 5 && !this.data.fullName) ||
      (this.step == 6 && !this.data.email) ||
      (this.step == 7 && !this.data.phone)
    ) {
      return;
    } else {
      if (this.data.job == 'artist' && this.step == 0) {
        this.step = 2;
      } else {
        this.step += 1;
      }
    }
  }
  step: number = 0;
  activeMenu: boolean = false;
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }
  services: any = [
    {
      name: 'Paid Advertising',
      icon: 'meta.svg',
      dis: `Advertising that focuses on human behavior rather than a generic discount`,
      to: `#advertise`,
    },
    {
      name: 'Video Content',
      icon: 'videoplay.svg',
      dis: `From high quality videos to engagement posts. Meaning you can go home and rest.`,
      to: `#videoContent`,
    },
    {
      name: 'Website Design',
      icon: 'codecircle.svg',
      dis: `Merge visuals and user flow in a 
      striking online presence.`,
      to: `#`,
    },
    {
      name: 'Brand Growth',
      icon: 'trendup.svg',
      dis: `Strengthen identity and outshine 
      competitors with tailored strategies.`,
      to: `#`,
    },
    {
      name: 'Clientele',
      icon: 'people.svg',
      dis: `A software where you can manage everything from bookings, payments, reviews, and more.`,
      to: `#`,
    },
    {
      name: 'Google Business',
      icon: 'google.svg',
      dis: `Become one of the top rated google studios in your city, without spending a penny on SEO or Ads.`,
      to: `#softwear`,
    },
  ];
  videoContent: any[] = [
    {
      name: `Simon`,
      des: `“Im booked out two months in advance which 
      has never happened before”`,
      link: `https://www.youtube.com/embed/JQ31-ga5H0s`,
      studioName: `Eddisons Tattoo Emporium`,
    },
    {
      name: `DAVE`,
      des: `They have not only increased consultations but also 
efficiently streamlined my social media channels.`,
      link: `https://www.youtube.com/embed/3WTnUEjZPqc`,
      studioName: `Renegade Tattoo`,
    },
  ];
  videoContent2: any[] = [
    {
      name: `Paul`,
      des: `“Within a few days the increase in customers 
      and attention to the studio was really noticeable”`,
      link: `https://www.youtube.com/embed/h_t3oo9MOyQ`,
      studioName: `Court Street Tattoo`,
    },
    {
      name: `Charles`,
      des: `“We are getting so many clients, I had to 
      turn off the ads”`,
      link: `https://www.youtube.com/embed/XYIjZfMp-78`,
      studioName: `Brotherhood Studio`,
    },
    // {
    //   name: `Hollie Bardin`,
    //   des: `“My client base has grown to the point where I’ve
    //   actually given up my full time job”`,
    //   link: `https://www.youtube.com/embed/32Zno2LlEJM`,
    //   studioName: `Hollie B Laser`,
    // },
  ];
  socialMediaVideoContent: any[] = [
    {
      name: 'Slow build up',
    },
    {
      name: 'Storyline type',
    },
    {
      name: 'Fast Cut Edits',
    },
  ];
  benefits: any[] = [
    {
      title1: `Google my business`,
      title: ` 
      management`,
      des: `Reviews, requests, replies, reports, 
      reputation management and most 
      importantly Growth. You name it 
      the software can handle it.`,
      img: `briefcase`,
    },
    {
      title1: `Every message`,
      title: `         
      in one inbox`,
      des: `Integrate all of your social media and enquiry platforms into one inbox, so you never have to jump from app to app again.`,
      img: `messagetext1`,
    },
    {
      title1: `Text to pay `,
      title: `
      invoicing`,
      des: `All your revenue in one place while
      never having to chase a client 
      for payment again.`,
      img: `walletmoney`,
    },
    {
      title1: `Automations and`,
      title: ` 
      Sequences`,
      des: `Automated message systems that talk 
      to enquiries while you sleep, while 
      simultaneously booking 
      in past clients.`,
      img: `backwarditem`,
    },
    {
      title1: `Booking `,
      title: `
      Calendars`,
      des: `Keep clientele organized with 
      every consultation and tattoo
      session marked.`,
      img: `calendar`,
    },
  ];
  links: any = [
    {
      name: 'Phone',
      title: '1-514-348-2584',
      icon: 'phone.svg',
      link: `tel:15143482584`,
    },
    {
      name: 'email',
      title: 'nicolas@dmsolutions.pro',
      icon: 'mail.png',
      link: `mailto:nicolas@dmsolutions.pro`,
    },
    {
      name: 'facebook',
      title: '@dm solution',
      icon: 'facebook.svg',
      link: `https://www.facebook.com/profile.php?id=100089912816271`,
    },
    {
      name: 'instagram',
      title: 'nicolas.doucetoo',
      icon: 'insegram.svg',
      link: `https://instagram.com/nicolas.doucet00?igshid=YmMyMTA2M2Y=`,
    },
  ];
  year: number = new Date().getFullYear();
}
