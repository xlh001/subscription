import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.comic',
  name: '哔哩哔哩漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        '[id="com.bilibili.comic:id/btn_full_ad_skip"]',
        '[id="com.bilibili.comic:id/skip_btn"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13063673',
        'https://i.gkd.li/import/13800292', //id="com.bilibili.comic:id/skip_btn"
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      quickFind: true,
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.bilibili.comic.home.view.FlutterMainActivity'],
      rules: '[id="com.bilibili.comic:id/tv_know"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063676',
        'https://i.gkd.li/import/13262801',
      ],
    },
  ],
});
