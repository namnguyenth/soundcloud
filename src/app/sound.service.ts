import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  getSound() {
    return [
      { id: 1, title: 'Có Em Đời Bỗng Vui', author: 'Chillies', description: 'posted a track 21 ago', genre: '#Indie', link: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/756464500&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>', view: 26340, linkHome: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/756464500&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>' },
      { id: 2, title: 'Chúng Ta Của Hiện Tại', author: 'Sơn Tùng MTP', description: 'posted a track 21 ago', genre: '#Pop', link: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/949944211&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>', view: 55456 },
      { id: 3, title: 'Thủ Đô Cypher', author: 'Beck Stage X Bitis Hunter', description: 'posted a track 21 ago', genre: '#HipHop-Rap', link: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/854085799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>', view: 1200, linkHome: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/854085799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>' },
      { id: 4, title: 'Em là bad girl trong bộ váy ngắn ', author: 'niz ( prod.Soulker )', description: 'posted a track 21 ago', genre: '#Pop', link: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/836321380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>', view: 4100 },
      { id: 5, title: 'Snow Flower', author: 'BTS ', description: 'posted a track 21 ago', genre: '#Pop', link: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953468332&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>', view: 6340 },
      { id: 6, title: 'Mot lieu thuoc', author: 'BTS ', description: 'posted a track 21 ago', genre: '#Pop', link: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953468332&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>', view: 40 },

    ]
  }

  getFull() {
    return [
      {
        id: 1,
        author: 'Chillies',
        songId: 1,
        songName: 'Có Em Đời Bỗng Vui',
        src: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/756464500&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        srcHome: 'url',
        genre: '#Indie',
        description: 'posted a track 21 ago',
        view: 12000,
        shared: 200,
        comment: 64,
        avatar: 'url',
        follower: 1234
      },
      {
        id: 2,
        author: 'Sơn Tùng MTP',

        songId: 1,
        songName: 'Chúng Ta Của Hiện Tại',
        src: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/949944211&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        srcHome: 'url',
        genre: '#Pop',
        description: 'posted a track 21 ago',
        view: 12000,
        shared: 200,
        comment: 64,
        avatar: 'url',
        follower: 2000
      },
      {
        id: 3,
        author: 'niz ( prod.Soulker )',

        songId: 1,
        songName: 'Em là bad girl trong bộ váy ngắn',
        src: 'url',
        srcHome: 'url',
        genre: '#Pop',
        description: 'posted a track 21 ago',
        view: 12000,
        shared: 200,
        comment: 64,
        avatar: 'url',
        follower: 2000
      },
      {
        id: 4,
        author: 'Beck Stage X Bitis Hunter',

        songId: 1,
        songName: 'Thủ Đô Cypher',
        src: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/854085799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        srcHome: 'url',
        genre: '#HipHop-Rap',
        description: 'posted a track 21 ago',
        view: 12000,
        shared: 200,
        comment: 64,
        avatar: 'url',
        follower: 2000
      },
      {
        id: 5,
        author: 'BTS',

        songId: 1,
        songName: 'Snow Flower',
        src: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953468332&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        srcHome: 'url',
        genre: '#Pop',
        description: 'posted a track 21 ago',
        view: 12000,
        shared: 200,
        comment: 64,
        avatar: 'url',
        follower: 2000
      },
      {
        id: 6,
        author: 'Keisha',

        songId: 1,
        songName: 'Mot lieu thuoc',
        src: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/953468332&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        srcHome: 'url',
        genre: '#Pop',
        description: 'posted a track 21 ago',
        view: 12000,
        shared: 200,
        comment: 6,
        avatar: 'url',
        follower: 2000
      }
    ]
  }
  constructor() { }

}
