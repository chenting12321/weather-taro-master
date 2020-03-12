/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  name: 'set' | 'rise' | 'duoyun' | 'yintian' | 'leizhenyubanyoubingbao' | 'qiangshachenbao' | 'shachenbao' | 'tianqi-teqiangnongwu' | 'lan-dawu' | 'dongyu' | 'tedabaoyu' | 'tedabaoyu-D' | 'zhongdumai' | 'zhongdumai1' | 'yanzhongmai' | 'fuchen' | 'zhenxue' | 'qingtian' | 'manyue' | 'shaoyun' | 'canyue' | 'baoyu' | 'dayu' | 'baoxue' | 'daxue' | 'dayuzhuanqing' | 'duoyunzhuanqingtian' | 'leizhenyu' | 'emeiyue' | 'shandian' | 'shangxianyue' | 'wanduoyun' | 'wanqingtian' | 'wumai' | 'wu' | 'tedazhenyu' | 'xiaxianyue' | 'xiaoxue' | 'xiaoyu' | 'xinyue' | 'zhenyu' | 'zhenyuzhuanqing' | 'yujiaxue' | 'zhongxue' | 'zhongyu' | 'zhangxianyue' | 'Group1';
  size?: number;
  color?: string | string[];
}

export declare const RNIcon: FunctionComponent<Props>;

export default RNIcon;
