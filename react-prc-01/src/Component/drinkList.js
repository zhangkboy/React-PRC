import React from "react";

class DrinkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      posts: [],
    };
  }

  componentWillMount() {
    console.log(0);
    // makePosts();
  }

  render() {
    // var self = this;
    // var posts = this.state.posts;

    var ps = [
      {
        id: "1001",
        title: "轩尼诗Venom",
        brif:
          "轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-d332bf510d61bbc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1002",
        title: "迈凯伦F1",
        brif:
          "迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-5a7b5550a19b8342?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1003",
        title: "法拉利Enzo",
        brif:
          "法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-a1d64cf5da2d9d99?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1004",
        title: "兰博基尼Aventador",
        brif:
          "兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-e3bfd824f30afaac?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1005",
        title: "保时捷918 Spyder",
        brif:
          "保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-7d8be6ebc4c7c95b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1006",
        title: "法拉利Enzo",
        brif:
          "法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-a1d64cf5da2d9d99?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1007",
        title: "兰博基尼Aventador",
        brif:
          "兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-e3bfd824f30afaac?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1008",
        title: "保时捷918 Spyder",
        brif:
          "保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-7d8be6ebc4c7c95b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "1009",
        title: "轩尼诗Venom",
        brif:
          "轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom轩尼诗Venom",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-d332bf510d61bbc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "10012",
        title: "迈凯伦F1",
        brif:
          "迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1迈凯伦F1",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-5a7b5550a19b8342?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "10013",
        title: "法拉利Enzo",
        brif:
          "法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-a1d64cf5da2d9d99?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "10014",
        title: "兰博基尼Aventador",
        brif:
          "兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-e3bfd824f30afaac?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "10015",
        title: "保时捷918 Spyder",
        brif:
          "保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-7d8be6ebc4c7c95b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "10016",
        title: "法拉利Enzo",
        brif:
          "法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo法拉利Enzo",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-a1d64cf5da2d9d99?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "10017",
        title: "兰博基尼Aventador",
        brif:
          "兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador兰博基尼Aventador",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-e3bfd824f30afaac?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
      {
        id: "10018",
        title: "保时捷918 Spyder",
        brif:
          "保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder保时捷918 Spyder",
        url:
          "https://upload-images.jianshu.io/upload_images/2990730-7d8be6ebc4c7c95b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
      },
    ];

    console.log(ps);
    const elements = [];
    ps.forEach((element) => {
      elements.push(
        <section class="section ">
          <div class="container is-fullh">
            <h3>{element.title}</h3>
            <img
              width="150"
              height="150"
              alt="img"
              src={element.url}
              alt=""
            ></img>
            <div className="brif">{element.brif}</div>
            <span>2018-01-01 </span>
            <span>00:00:01</span>
            <figure class="image is-16x16">
              <img src={element.url}></img>
            </figure>
            <div class="tags are-medium">
              <span class="tag is-primary">Primary</span>
              <span class="tag is-link">Link</span>
              <span class="tag is-info">Info</span>
              <span class="tag is-success">Success</span>
              <span class="tag is-warning">Warning</span>
              <span class="tag is-danger">Danger</span>
            </div>
          </div>
        </section>
      );
    });
    return (
      <div>
        {/* is-medium */}

        <section class="hero  ">
          <div class="hero-body">
            <div class="container">
              <img src="https://upload-images.jianshu.io/upload_images/2990730-7d8be6ebc4c7c95b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"></img>
              <h1 class="title">Hero title</h1>
              <h2 class="subtitle">Hero subtitle</h2>
            </div>
          </div>
        </section>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                  <p class="title">Vertical...</p>
                  <p class="subtitle">Top tile</p>
                </article>
                <article class="tile is-child notification is-warning">
                  <p class="title">...tiles</p>
                  <p class="subtitle">Bottom tile</p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">Wide tile</p>
                <p class="subtitle">Aligned with the right tile</p>
                <div class="content">
                  !-- Content --!-- Content --!-- Content --!-- Content --!--
                  Content --!-- Content --!-- Content --
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  !-- Content --!-- Content --!-- Content -- !-- Content -- !--
                  Content -- !-- Content -- !-- Content --
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* <navbar className="">Cars</navbar> */}
        {/* <hero className="container is-fullhd">heroherohero</hero> */}
        <section className="section ">
          <div className="container is-fullhd">
            <div className="notification ">
              This container is <strong>centered</strong> on desktop.
            </div>
          </div>
        </section>

        <div class="columns is-vcentered">
          <div class="column is-8">
            <p class="bd-notification is-primary"> First column</p>
          </div>
          <div class="column">
            <p class="bd-notification is-primary">
              Second column with more content. This is so you can see the
              vertical alignment.
            </p>
          </div>
        </div>

        <div class="columns  is-mobile  ">
          <div class="column is-two-fifths">
            is-four-fifths is-four-fifths is-four-fifths
          </div>
          <div class="column is-1">Auto</div>
          <div class="column">Auto</div>
        </div>

        {elements}
        <footer className="container is-widescreen">
          <div className="notification ">
            This container is maybe <strong>centered</strong> on desktop.
          </div>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    console.log(1);
  }
}

export default DrinkList;
