import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('lReveal', [
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
  ele!: ElementRef<any>;
  title = 'Aurelis Grow';
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
    // new Swiper('.swiper', {
    //   // Install modules
    //   slidesPerView: 1,
    //   spaceBetween: 50,

    //   breakpoints: {
    //     768: {
    //       slidesPerView: 3,
    //       spaceBetween: 50,
    //     },
    //   },
    //   // ...
    // });
    const swiperEl: any = document.querySelector('swiper-container');

    // swiper parameters
    const swiperParams = {
      // effect: 'coverflow',
      grabCursor: true,
      // spaceBetween: 50,
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // },
      slidesPerView: 'auto',
      centeredSlides: true,
      // breakpoints: {
      //   768: {
      //     slidesPerView: 3,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //   },
      // },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      on: {
        init() {
          // ...
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  }
  submit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        dataType: 'application/json',
        'Accept-Language': 'en',
      }),
    };
    this.http
      .post(
        'https://formsubmit.co/galal142004mm@gmail.com',
        this.data,
        httpOptions
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
  activeForm: boolean = false;
  data: any = {
    job: null,
    studioName: null,
    benefits: null,
    fullName: null,
    email: null,
    phone: null,
    location: null,
  };
  videosSlides: any[] = [
    'https://www.youtube.com/embed/nFDiweNppHc',
    'https://www.youtube.com/embed/nFDiweNppHc',
    'https://www.youtube.com/embed/nFDiweNppHc',
    'https://www.youtube.com/embed/nFDiweNppHc',
    'https://www.youtube.com/embed/nFDiweNppHc',
  ];
  increasStep() {
    // console.log(this.step);
    // console.log(this.data);
    // console.log(this.step == 2 && !this.data.location);
    if (
      (this.step == 0 && !this.data.job) ||
      (this.step == 1 && !this.data.studioName) ||
      (this.step == 2 && !this.data.location) ||
      (this.step == 3 && !this.data.benefits) ||
      (this.step == 4 && !this.data.fullName) ||
      (this.step == 5 && !this.data.email) ||
      (this.step == 6 && !this.data.phone)
    ) {
      console.log(this.step, !this.data.location);
      return;
    } else {
      if (this.data.job == 'artist' && this.step == 0) {
        this.step = 2;
      } else {
        this.step += 1;
      }
    }
  }

  // header
  // header

  step: number = 0;
  scrollInto(ele: HTMLElement) {
    if (ele) {
      ele.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  }
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
      to: `#softwear`,
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
      link: `https://www.youtube.com/embed/nFDiweNppHc`,
      studioName: `Eddisons Tattoo Emporium`,
    },
    {
      name: `Charles`,
      des: `“We are getting so many clients, I had to 
      turn off the ads”`,
      link: `https://www.youtube.com/embed/nFDiweNppHc`,
      studioName: `Brotherhood Studio`,
    },
  ];
  videoContent2: any[] = [
    {
      name: `Paul`,
      des: `“Within a few days the increase in customers 
      and attention to the studio was really noticeable”`,
      link: `https://www.youtube.com/embed/nFDiweNppHc`,
      studioName: `Court Street Tattoo`,
    },
    {
      name: `Hollie Bardin`,
      des: `“My client base has grown to the point where I’ve 
      actually given up my full time job”`,
      link: `https://www.youtube.com/embed/nFDiweNppHc`,
      studioName: `Hollie B Laser`,
    },
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
