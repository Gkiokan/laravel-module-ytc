(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=404)})({404:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(405);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},405:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Tibet.20.10-30-2012 07:14:42
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Tibet",revision:20,standaloneInit:true,baseWidth:500,baseHeight:330,baseScaleFactor:10,entities:{"TI.NA":{outlines:[[M,1445,211,Q,1440,208,1433,208,1422,206,1420,199,1417,194,1415,188,1415,185,1413,183,1410,178,1408,173,1405,171,1398,169,1396,169,1394,167,1303,164,1212,162,1209,162,1207,160,1193,150,1184,127,1179,124,1172,122,1170,122,1165,120,1146,117,1130,115,1102,113,1090,125,1088,127,1083,129,1069,138,1058,150,1055,157,1048,157,1037,160,1025,167,1023,169,1020,169,985,171,950,173,929,173,915,164,899,150,885,141,882,138,880,139,864,141,859,129,859,127,857,125,850,117,847,106,847,103,847,101,845,96,843,89,838,80,833,73,763,73,693,71,670,71,658,78,656,82,654,85,651,96,646,101,637,108,628,113,625,117,623,120,621,122,616,122,611,124,605,127,602,129,591,157,580,185,557,191,533,197,523,212,511,227,491,240,471,253,472,266,472,278,464,294,457,310,414,324,371,338,334,310,296,283,289,283,282,283,274,283,266,283,264,274,262,265,254,265,253,271,250,276,249,279,247,281,247,293,245,300,245,302,243,304,L,240,307,Q,240,318,236,323,236,325,233,328,233,335,231,339,229,342,226,342,226,346,224,349,221,351,219,358,219,360,219,363,217,365,215,365,212,367,210,374,210,379,208,379,205,381,203,386,203,390,201,393,198,400,191,409,184,421,180,428,179,430,177,430,172,435,168,435,165,437,166,440,163,451,163,463,165,472,161,482,158,486,158,489,156,507,156,529,156,533,158,535,158,538,161,540,163,545,163,547,165,549,168,550,172,554,175,554,179,556,184,559,L,186,561,Q,193,561,201,561,205,563,208,563,210,566,215,570,219,573,221,573,226,577,231,580,240,584,245,592,L,247,594,Q,252,596,252,598,256,603,257,615,257,659,257,704,257,748,259,793,257,796,254,797,254,799,250,802,247,802,243,804,L,240,804,Q,238,806,233,809,231,809,226,809,219,809,215,813,210,820,205,823,203,825,198,825,191,825,184,825,175,827,170,823,L,168,820,Q,161,820,158,818,158,815,156,816,154,813,149,811,147,811,140,811,135,808,135,802,L,133,799,Q,130,799,130,797,128,795,128,790,L,126,788,126,785,123,783,Q,121,776,114,776,70,776,23,776,L,21,776,Q,18,802,18,825,18,869,18,914,18,960,18,1005,18,1049,18,1093,18,1140,18,1185,L,18,1189,Q,28,1192,39,1192,49,1192,58,1194,60,1196,63,1196,81,1196,100,1196,105,1196,110,1199,112,1199,114,1199,116,1201,117,1203,121,1208,121,1215,L,123,1217,Q,123,1234,123,1250,126,1259,140,1259,L,142,1262,Q,149,1261,149,1269,149,1271,149,1273,151,1278,154,1283,156,1287,158,1290,161,1292,163,1292,168,1294,170,1294,L,173,1297,Q,172,1304,182,1304,L,184,1304,Q,191,1311,196,1320,198,1325,198,1327,198,1341,198,1353,L,201,1355,Q,205,1362,212,1374,L,215,1376,Q,217,1381,217,1383,L,219,1385,Q,224,1385,229,1388,233,1388,238,1392,240,1395,243,1395,L,245,1397,Q,249,1397,252,1402,252,1406,252,1409,L,254,1411,Q,254,1416,257,1418,L,259,1418,Q,271,1418,282,1418,285,1420,287,1420,289,1427,294,1435,296,1439,299,1442,301,1444,303,1446,308,1448,308,1451,310,1453,310,1455,315,1465,322,1467,331,1472,336,1474,338,1476,338,1479,338,1504,341,1528,343,1528,345,1528,352,1528,359,1526,371,1526,383,1526,394,1523,406,1528,408,1528,411,1528,418,1525,420,1530,420,1537,420,1546,L,422,1549,Q,429,1553,429,1561,429,1570,432,1575,434,1579,434,1582,434,1619,436,1654,436,1656,439,1659,441,1659,443,1659,460,1658,474,1661,476,1661,476,1663,481,1668,481,1677,481,1682,483,1687,483,1689,485,1689,488,1691,488,1694,490,1708,492,1722,495,1722,497,1722,506,1722,516,1717,518,1715,520,1712,523,1712,523,1710,530,1708,532,1703,534,1703,537,1703,539,1701,539,1698,546,1691,558,1684,560,1684,560,1682,562,1677,567,1673,569,1673,570,1668,569,1663,574,1663,579,1661,581,1659,583,1659,586,1659,600,1661,609,1654,L,609,1652,Q,609,1642,611,1633,L,611,1631,Q,614,1628,614,1624,614,1614,626,1617,629,1617,635,1617,635,1619,635,1621,635,1626,637,1628,637,1630,637,1633,642,1640,646,1645,649,1647,651,1647,654,1652,656,1652,658,1654,663,1654,L,665,1656,Q,672,1656,677,1659,679,1661,682,1663,L,684,1666,Q,691,1665,696,1670,723,1675,726,1647,726,1645,728,1640,730,1637,733,1633,737,1619,749,1619,791,1619,833,1617,838,1617,843,1614,852,1610,854,1596,864,1591,864,1582,864,1572,875,1575,885,1574,889,1570,889,1567,894,1568,927,1565,943,1579,945,1581,950,1584,973,1589,992,1605,994,1607,997,1610,1001,1621,1016,1621,1037,1619,1058,1621,1076,1621,1083,1612,1100,1598,1095,1577,1092,1546,1118,1542,1130,1539,1130,1526,1127,1511,1125,1502,1118,1483,1107,1467,1104,1465,1104,1460,1097,1416,1099,1367,1099,1353,1102,1339,1104,1329,1109,1327,1111,1327,1114,1327,1125,1325,1137,1322,1146,1322,1151,1327,1151,1329,1156,1329,1242,1329,1328,1327,1331,1327,1333,1325,1359,1306,1377,1285,1380,1283,1385,1283,1401,1285,1410,1290,1412,1292,1417,1294,1419,1294,1422,1297,1429,1304,1445,1309,1447,1308,1450,1311,1457,1327,1452,1353,1452,1362,1457,1367,1459,1367,1461,1372,1466,1388,1485,1395,1487,1395,1489,1400,1517,1409,1518,1437,1515,1526,1513,1614,1513,1663,1520,1708,1522,1729,1534,1740,1543,1745,1546,1752,1548,1754,1553,1754,1564,1757,1564,1773,1564,1775,1567,1778,1574,1782,1574,1792,1574,1794,1574,1797,1581,1818,1592,1832,1597,1841,1613,1838,1648,1838,1683,1834,1686,1834,1688,1829,1695,1803,1725,1808,1737,1810,1749,1813,1763,1813,1770,1808,1798,1771,1812,1731,1816,1714,1816,1694,1816,1689,1819,1684,1823,1668,1845,1661,1847,1661,1849,1659,1851,1656,1854,1654,1857,1652,1858,1649,L,1858,1647,Q,1860,1635,1861,1624,1856,1598,1851,1572,L,1847,1570,Q,1844,1570,1842,1568,1812,1551,1793,1518,1791,1516,1793,1511,1795,1504,1802,1500,1805,1497,1807,1493,1812,1481,1816,1477,1819,1474,1823,1472,1826,1472,1828,1470,1840,1458,1845,1437,1847,1423,1847,1409,1847,1381,1845,1353,1844,1343,1840,1336,1837,1334,1835,1329,1835,1327,1833,1325,1804,1313,1798,1292,1798,1290,1795,1287,1784,1262,1765,1248,1751,1234,1751,1208,1753,1180,1753,1152,1753,1142,1763,1140,1765,1140,1767,1138,1781,1124,1786,1105,L,1791,1105,Q,1805,1108,1812,1103,1828,1082,1851,1077,1861,1075,1870,1070,1872,1070,1875,1068,1889,1056,1901,1042,1903,1040,1905,1035,1907,1031,1912,1017,1917,1002,1936,1005,1947,1007,1959,1007,1975,1007,1989,1002,1992,1002,1992,998,1989,986,1987,975,1984,970,1984,965,1982,874,1982,783,1973,762,1936,767,1919,769,1903,769,1851,769,1800,767,1795,767,1793,762,1781,750,1770,739,1765,736,1763,734,1758,729,1756,725,1739,708,1725,694,1721,692,1716,690,1707,687,1700,683,1697,680,1693,678,1681,673,1676,668,1674,666,1669,664,1667,664,1665,662,1655,647,1641,633,1637,626,1627,624,1616,619,1606,608,1604,605,1602,601,1602,598,1602,596,1597,584,1602,575,1604,570,1604,563,1601,538,1611,524,1613,521,1613,517,1613,498,1599,489,1583,477,1569,463,1564,456,1562,447,1555,430,1543,414,1541,412,1539,409,1513,384,1487,358,1482,355,1480,351,1478,348,1476,346,1473,342,1471,337,1468,335,1466,330,1464,325,1461,321,1459,316,1459,311,1461,286,1466,265,1468,255,1468,246,1468,230,1468,217,1466,216,1464,216,1461,215,1457,213,Q,1452,211,1445,211,Z]],label:"Ngari Prefecture",shortLabel:"NA",labelPosition:[88.5,77.5],labelAlignment:[CEN,MID]},"TI.NG":{outlines:[[M,2524,71,Q,2505,71,2487,71,2442,71,2396,71,2351,71,2307,71,2304,73,2302,73,2300,80,2291,82,2290,85,2288,85,2288,89,2286,89,2281,94,2279,101,2276,106,2272,108,2269,110,2267,113,2265,115,2263,115,2244,115,2227,115,2204,115,2181,115,2181,117,2178,117,2176,120,2171,120,2169,124,2167,125,2159,129,2160,141,2160,145,2157,148,2157,157,2157,167,2157,171,2155,171,2143,173,2132,173,2129,173,2125,173,2118,176,2120,190,2120,194,2118,197,L,2118,199,Q,2115,206,2111,211,2111,213,2108,213,2106,213,2101,216,2099,216,2097,216,2057,218,2017,218,1973,218,1926,218,1926,220,1924,220,1921,220,1919,223,1914,225,1910,232,1907,234,1908,237,1905,248,1905,265,1903,265,1901,265,1809,265,1721,265,1632,265,1546,265,1536,264,1527,267,1499,272,1504,246,1504,241,1501,237,1499,234,1489,230,1485,220,1476,218,1472,218,1468,217,1468,230,1468,246,1468,255,1466,265,1461,286,1459,311,1459,316,1461,321,1464,325,1466,330,1468,335,1471,337,1473,342,1476,346,1478,348,1480,351,1482,355,1487,358,1513,384,1539,409,1541,412,1543,414,1555,430,1562,447,1564,456,1569,463,1583,477,1599,489,1613,498,1613,517,1613,521,1611,524,1601,538,1604,563,1604,570,1602,575,1597,584,1602,596,1602,598,1602,601,1604,605,1606,608,1616,619,1627,624,1637,626,1641,633,1655,647,1665,662,1667,664,1669,664,1674,666,1676,668,1681,673,1693,678,1697,680,1700,683,1707,687,1716,690,1721,692,1725,694,1739,708,1756,725,1758,729,1763,734,1765,736,1770,739,1781,750,1793,762,1795,767,1800,767,1851,769,1903,769,1919,769,1936,767,1973,762,1982,783,1982,874,1984,965,1984,970,1987,975,1989,986,1992,998,1992,1002,1989,1002,1975,1007,1959,1007,1947,1007,1936,1005,1917,1002,1912,1017,1907,1031,1905,1035,1903,1040,1901,1042,1889,1056,1875,1068,1872,1070,1870,1070,1861,1075,1851,1077,1828,1082,1812,1103,1805,1108,1791,1105,L,1786,1105,Q,1781,1124,1767,1138,1765,1140,1763,1140,1753,1142,1753,1152,1753,1180,1751,1208,1751,1234,1765,1248,1784,1262,1795,1287,1798,1290,1798,1292,1804,1313,1833,1325,1835,1327,1835,1329,1837,1334,1840,1336,1844,1343,1845,1353,1847,1381,1847,1409,1847,1423,1845,1437,1840,1458,1828,1470,1826,1472,1823,1472,1819,1474,1816,1477,1812,1481,1807,1493,1805,1497,1802,1500,1795,1504,1793,1511,1791,1516,1793,1518,1812,1551,1842,1568,1844,1570,1847,1570,L,1851,1572,Q,1856,1598,1861,1624,1860,1635,1858,1647,L,1858,1649,Q,1864,1651,1870,1654,1872,1654,1875,1654,1891,1656,1898,1675,1900,1677,1903,1680,1912,1705,1936,1731,1938,1733,1940,1734,1959,1740,1971,1752,1984,1761,2006,1764,2010,1764,2013,1761,2017,1759,2022,1757,2038,1742,2050,1729,2057,1717,2064,1724,2068,1731,2073,1740,2073,1743,2076,1745,2087,1766,2101,1782,2113,1796,2122,1815,2125,1817,2125,1820,2127,1880,2125,1941,2124,1957,2132,1962,2150,1978,2160,1993,2162,1995,2164,1995,2169,1997,2171,2e3,2183,2011,2202,2021,2206,2023,2211,2025,2216,2032,2225,2037,2227,2037,2230,2037,2304,2039,2379,2039,2402,2039,2426,2037,2440,2037,2447,2042,2459,2058,2468,2072,2470,2074,2473,2074,2519,2077,2566,2077,2594,2076,2603,2091,2606,2093,2608,2095,2638,2128,2664,2156,2671,2163,2673,2175,2673,2179,2676,2182,2680,2189,2685,2198,2692,2214,2706,2231,2715,2242,2718,2250,2720,2254,2723,2257,2741,2270,2748,2295,2751,2290,2756,2287,2766,2280,2774,2272,2780,2262,2791,2257,2802,2251,2818,2239,2834,2226,2858,2224,2872,2224,2877,2214,2881,2203,2888,2191,2890,2189,2891,2184,2893,2172,2895,2161,2897,2158,2898,2156,2900,2151,2900,2144,2900,2133,2895,2126,2888,2114,2881,2102,2869,2084,2893,2072,2914,2063,2940,2065,2958,2067,2972,2063,2975,2063,2975,2056,2970,2037,2984,2030,2988,2027,2993,2028,3007,2023,3007,2032,3010,2056,3023,2059,3035,2062,3040,2066,3045,2070,3057,2066,3070,2062,3075,2063,3096,2063,3105,2079,3108,2084,3110,2086,3131,2100,3131,2126,3131,2130,3131,2133,3136,2142,3150,2147,3157,2149,3157,2161,3157,2184,3168,2196,3171,2200,3173,2203,3180,2210,3200,2205,3220,2200,3265,2203,3311,2205,3346,2203,3354,2202,3360,2201,3382,2199,3387,2192,3393,2184,3414,2170,3416,2168,3418,2161,3425,2144,3432,2131,3434,2133,3435,2137,L,3439,2137,Q,3444,2140,3449,2142,3460,2154,3481,2159,3486,2158,3491,2161,3502,2172,3509,2191,3509,2193,3514,2193,3540,2191,3556,2198,3575,2207,3577,2226,3577,2238,3598,2235,3631,2228,3657,2247,3659,2249,3661,2252,3666,2254,3671,2259,3673,2261,3675,2266,3687,2277,3696,2294,3696,2296,3701,2296,3715,2294,3722,2298,3724,2303,3729,2305,3736,2310,3743,2315,3757,2322,3776,2322,3799,2319,3822,2317,3827,2317,3832,2315,3834,2312,3836,2313,3845,2308,3853,2303,3855,2301,3855,2296,3855,2280,3850,2263,3850,2261,3848,2257,3836,2247,3822,2245,3820,2245,3815,2242,3799,2224,3783,2214,3780,2212,3776,2210,3773,2210,3771,2207,3757,2189,3769,2172,3771,2170,3776,2170,3785,2168,3794,2163,3797,2163,3799,2163,3813,2163,3811,2147,3811,2142,3813,2137,3825,2126,3850,2126,3855,2126,3860,2123,3864,2123,3869,2114,3874,2107,3878,2100,3881,2097,3883,2095,3897,2086,3895,2058,3892,2044,3900,2037,3904,2035,3906,2030,3918,2018,3925,2007,3934,1995,3944,1995,3988,1992,4033,1993,4049,1993,4065,1990,4072,1962,4084,1943,4086,1941,4084,1936,4074,1922,4061,1908,4058,1904,4056,1899,4051,1887,4037,1883,4002,1869,3983,1838,3974,1827,3965,1817,3962,1815,3960,1810,3960,1808,3958,1806,3951,1801,3948,1792,3946,1789,3946,1787,3944,1764,3941,1740,3941,1722,3948,1708,3951,1705,3953,1705,3967,1698,3969,1680,3969,1677,3972,1675,3979,1659,4e3,1654,4004,1654,4009,1652,4039,1635,4074,1628,4093,1626,4105,1610,4112,1598,4119,1589,4121,1586,4119,1582,L,4117,1579,Q,4114,1579,4112,1577,4109,1577,4107,1575,4088,1572,4070,1572,4067,1572,4063,1570,4058,1570,4051,1570,4044,1572,4044,1568,4042,1565,4039,1565,4030,1563,4028,1558,4023,1553,4023,1546,L,4021,1544,Q,4021,1542,4018,1540,4015,1536,4015,1530,L,4014,1530,Q,4011,1530,4007,1528,4002,1525,3995,1526,3979,1526,3960,1523,3955,1523,3948,1523,3932,1521,3913,1521,3909,1521,3902,1518,3899,1518,3897,1516,3869,1514,3843,1514,3838,1514,3834,1516,3817,1528,3792,1523,3782,1523,3783,1514,3780,1509,3778,1502,3778,1500,3776,1498,3771,1493,3766,1486,3759,1476,3750,1472,3748,1472,3745,1470,3687,1467,3629,1467,3624,1467,3617,1465,3603,1458,3593,1444,3589,1437,3575,1437,3521,1441,3505,1409,3502,1406,3500,1407,3495,1404,3493,1402,3486,1392,3470,1397,3449,1399,3446,1385,3446,1374,3439,1362,3439,1360,3437,1357,3434,1353,3432,1350,3416,1346,3400,1334,3388,1327,3383,1325,3379,1322,3372,1320,3369,1320,3365,1318,3346,1318,3337,1311,3329,1304,3318,1301,3315,1301,3313,1301,3308,1299,3304,1297,3301,1294,3299,1292,3290,1285,3292,1269,3295,1257,3290,1243,3255,1240,3220,1241,3208,1241,3196,1238,3185,1236,3173,1234,3171,1231,3166,1229,3154,1224,3152,1210,3150,1205,3148,1201,3143,1194,3131,1194,3126,1194,3119,1192,3117,1192,3115,1189,3087,1187,3056,1187,3033,1187,3010,1189,2999,1191,2993,1192,2990,1192,2988,1193,2964,1194,2956,1182,2953,1177,2947,1173,2939,1168,2940,1157,2940,1145,2944,1138,2947,1135,2944,1129,2944,1126,2940,1121,2918,1103,2921,1058,2921,1049,2912,1045,2907,1045,2900,1042,2888,1040,2879,1035,2874,1035,2872,1028,2870,1021,2870,1012,2870,921,2870,830,2870,741,2874,650,2877,647,2881,643,2895,638,2912,636,2914,636,2914,631,2916,540,2916,451,2916,398,2919,346,2921,344,2923,339,2939,318,2949,293,2949,290,2949,288,2946,264,2923,262,2921,262,2916,260,2893,246,2877,230,2863,218,2846,211,2844,208,2842,206,2830,192,2818,176,2811,169,2795,169,2755,171,2718,171,2708,171,2701,169,2699,169,2695,167,2690,164,2685,162,2680,159,2676,155,2673,152,2669,152,2666,151,2664,150,2662,147,2662,143,L,2660,141,Q,2655,141,2652,136,2652,134,2650,132,2645,129,2638,125,2636,122,2634,120,2631,120,2629,117,2617,117,2606,117,2598,120,2592,115,2587,110,2582,106,2580,103,2578,104,2575,101,2573,101,2571,94,2564,97,2557,97,2554,94,2552,92,2547,89,2547,87,2545,87,2536,87,2531,82,L,2529,80,Q,2529,78,2526,73,Z]],label:"Nagqu Prefecture",shortLabel:"NG",labelPosition:[240.9,119.6],labelAlignment:[CEN,MID]},"TI.QP":{outlines:[[M,4833,1540,Q,4824,1525,4824,1507,4824,1504,4824,1502,4819,1483,4798,1481,4787,1479,4775,1479,4770,1479,4763,1486,4754,1500,4745,1514,4742,1516,4740,1521,4740,1523,4738,1526,4733,1535,4733,1544,4721,1546,4714,1556,4714,1558,4712,1561,4705,1565,4703,1575,4700,1581,4698,1591,4698,1593,4698,1596,4696,1598,4693,1600,4691,1602,4691,1605,4691,1607,4689,1607,4686,1610,4682,1612,4679,1612,4679,1614,4677,1619,4670,1619,4670,1621,4668,1621,4668,1628,4663,1631,4656,1633,4656,1640,4656,1642,4656,1645,4653,1659,4654,1673,4656,1680,4651,1687,4649,1689,4649,1691,4646,1696,4647,1698,4642,1708,4640,1715,4637,1719,4637,1722,4635,1736,4635,1750,L,4635,1754,4642,1757,4642,1759,Q,4640,1759,4635,1759,4633,1759,4628,1761,4616,1761,4605,1761,4602,1761,4598,1764,L,4595,1764,Q,4588,1766,4588,1771,4590,1778,4586,1780,4586,1782,4584,1782,4584,1789,4577,1789,4539,1789,4504,1789,4502,1789,4499,1789,4497,1787,4495,1787,4485,1785,4481,1782,L,4479,1780,Q,4471,1780,4469,1778,4467,1775,4464,1773,4457,1768,4453,1766,4450,1764,4446,1761,4434,1759,4423,1757,4415,1754,4406,1754,4404,1754,4399,1752,L,4397,1752,Q,4387,1750,4378,1750,L,4376,1750,Q,4371,1757,4371,1766,4373,1782,4366,1792,4366,1794,4364,1794,4352,1796,4338,1797,4336,1797,4331,1797,4327,1794,4327,1785,4327,1782,4327,1780,4320,1775,4317,1768,4310,1752,4285,1754,4282,1754,4280,1754,4280,1752,4278,1752,4275,1750,4271,1747,L,4271,1745,4268,1743,Q,4268,1740,4266,1740,4264,1738,4259,1738,L,4257,1736,Q,4250,1736,4247,1731,4245,1724,4243,1722,4238,1719,4236,1712,L,4233,1710,Q,4233,1703,4231,1701,4224,1694,4215,1689,4212,1689,4210,1687,4203,1677,4191,1675,4186,1675,4187,1668,4187,1666,4184,1663,4182,1663,4182,1661,4179,1659,4177,1654,4175,1647,4173,1638,4172,1635,4170,1633,4165,1631,4166,1621,L,4163,1619,Q,4156,1612,4154,1605,4154,1602,4152,1600,4145,1598,4142,1593,L,4140,1591,Q,4137,1591,4133,1589,L,4131,1589,Q,4123,1586,4119,1582,4121,1586,4119,1589,4112,1598,4105,1610,4093,1626,4074,1628,4039,1635,4009,1652,4004,1654,4e3,1654,3979,1659,3972,1675,3969,1677,3969,1680,3967,1698,3953,1705,3951,1705,3948,1708,3941,1722,3941,1740,3944,1764,3946,1787,3946,1789,3948,1792,3951,1801,3958,1806,3960,1808,3960,1810,3962,1815,3965,1817,3974,1827,3983,1838,4002,1869,4037,1883,4051,1887,4056,1899,4058,1904,4061,1908,4074,1922,4084,1936,4086,1941,4084,1943,4072,1962,4065,1990,4049,1993,4033,1993,3988,1992,3944,1995,3934,1995,3925,2007,3918,2018,3906,2030,3904,2035,3900,2037,3892,2044,3895,2058,3897,2086,3883,2095,3881,2097,3878,2100,3874,2107,3869,2114,3864,2123,3860,2123,3855,2126,3850,2126,3825,2126,3813,2137,3811,2142,3811,2147,3813,2163,3799,2163,3797,2163,3794,2163,3785,2168,3776,2170,3771,2170,3769,2172,3757,2189,3771,2207,3773,2210,3776,2210,3780,2212,3783,2214,3799,2224,3815,2242,3820,2245,3822,2245,3836,2247,3848,2257,3850,2261,3850,2263,3885,2263,3920,2261,3941,2261,3953,2268,3955,2270,3958,2270,3976,2277,3986,2292,3988,2294,3991,2294,4009,2301,4023,2310,4025,2313,4028,2313,4032,2315,4037,2315,4084,2315,4131,2313,4149,2312,4163,2320,4165,2322,4168,2324,4196,2340,4222,2368,4224,2373,4226,2378,4240,2392,4247,2408,4250,2410,4250,2413,4257,2432,4268,2443,4271,2448,4273,2453,4278,2460,4285,2464,4301,2471,4327,2469,4331,2469,4334,2467,4343,2457,4359,2455,4383,2455,4406,2457,4408,2457,4411,2459,4436,2473,4453,2497,4455,2499,4457,2499,4464,2502,4471,2504,4488,2509,4504,2516,4506,2518,4509,2520,4518,2525,4525,2539,4530,2548,4537,2553,4539,2555,4542,2558,4553,2574,4570,2586,4572,2588,4574,2588,4586,2593,4598,2593,4642,2595,4686,2597,4691,2597,4696,2597,4707,2600,4714,2604,4717,2609,4719,2614,4726,2618,4733,2628,4735,2630,4738,2630,4742,2632,4745,2635,4768,2660,4798,2684,4801,2686,4803,2688,4817,2719,4841,2745,4852,2759,4864,2773,4866,2775,4868,2777,4885,2786,4894,2805,4895,2789,4896,2773,L,4901,2773,Q,4920,2773,4939,2770,4948,2770,4952,2766,4957,2761,4962,2758,4983,2747,4981,2721,4980,2709,4976,2700,4976,2698,4971,2695,4964,2691,4955,2682,4952,2677,4950,2672,4931,2651,4906,2632,4903,2630,4901,2628,4889,2611,4868,2604,4882,2593,4880,2562,4878,2530,4878,2497,4878,2406,4880,2315,4880,2313,4882,2310,4887,2305,4891,2297,4887,2286,4882,2277,4867,2249,4841,2240,4831,2238,4829,2231,4826,2224,4826,2217,4826,2198,4826,2179,4826,2175,4819,2168,4815,2165,4810,2163,4798,2151,4794,2133,4787,2116,4789,2091,4789,2074,4791,2058,4791,2056,4794,2053,4805,2049,4817,2046,4829,2044,4838,2037,4843,2030,4843,2016,4840,1992,4841,1969,4840,1941,4845,1913,4845,1911,4850,1908,4852,1906,4854,1904,4864,1897,4878,1895,L,4878,1890,Q,4878,1799,4878,1708,4878,1649,4873,1591,4873,1589,4871,1584,4868,1582,4866,1577,4866,1574,4864,1572,Q,4845,1558,4833,1540,Z]],label:"Qamdo Prefecture",shortLabel:"QP",labelPosition:[438.2,209.2],labelAlignment:[CEN,MID]},"TI.XP":{outlines:[[M,1870,1654,Q,1864,1651,1858,1649,1857,1652,1854,1654,1851,1656,1849,1659,1847,1661,1845,1661,1823,1668,1819,1684,1816,1689,1816,1694,1816,1714,1812,1731,1798,1771,1770,1808,1763,1813,1749,1813,1737,1810,1725,1808,1695,1803,1688,1829,1686,1834,1683,1834,1648,1838,1613,1838,1597,1841,1592,1832,1581,1818,1574,1797,1574,1794,1574,1792,1574,1782,1567,1778,1564,1775,1564,1773,1564,1757,1553,1754,1548,1754,1546,1752,1543,1745,1534,1740,1522,1729,1520,1708,1513,1663,1513,1614,1515,1526,1518,1437,1517,1409,1489,1400,1487,1395,1485,1395,1466,1388,1461,1372,1459,1367,1457,1367,1452,1362,1452,1353,1457,1327,1450,1311,1447,1308,1445,1309,1429,1304,1422,1297,1419,1294,1417,1294,1412,1292,1410,1290,1401,1285,1385,1283,1380,1283,1377,1285,1359,1306,1333,1325,1331,1327,1328,1327,1242,1329,1156,1329,1151,1329,1151,1327,1146,1322,1137,1322,1125,1325,1114,1327,1111,1327,1109,1327,1104,1329,1102,1339,1099,1353,1099,1367,1097,1416,1104,1460,1104,1465,1107,1467,1118,1483,1125,1502,1127,1511,1130,1526,1130,1539,1118,1542,1092,1546,1095,1577,1100,1598,1083,1612,1076,1621,1058,1621,1037,1619,1016,1621,1001,1621,997,1610,994,1607,992,1605,973,1589,950,1584,945,1581,943,1579,927,1565,894,1568,889,1567,889,1570,885,1574,875,1575,864,1572,864,1582,864,1591,854,1596,852,1610,843,1614,838,1617,833,1617,791,1619,749,1619,737,1619,733,1633,730,1637,728,1640,726,1645,726,1647,723,1675,696,1670,698,1673,698,1675,702,1677,703,1680,707,1687,712,1691,L,714,1694,Q,719,1701,721,1705,728,1712,731,1722,731,1729,731,1734,L,733,1736,Q,738,1745,747,1750,749,1752,752,1752,754,1757,756,1757,761,1764,766,1771,766,1773,766,1775,773,1782,780,1794,L,782,1797,Q,791,1808,805,1820,829,1845,852,1869,854,1871,857,1873,857,1876,857,1878,L,859,1880,Q,861,1892,871,1897,L,873,1899,Q,873,1901,873,1904,880,1908,887,1913,889,1915,892,1916,894,1922,906,1925,L,908,1927,Q,910,1932,917,1932,L,920,1934,Q,929,1934,934,1936,936,1939,938,1939,943,1944,945,1946,957,1951,962,1958,964,1964,969,1971,973,1978,978,1986,980,1988,980,1990,L,983,1993,Q,987,1999,990,2004,L,992,2007,Q,999,2006,1001,2014,1001,2018,1008,2018,L,1011,2021,Q,1015,2025,1020,2028,1025,2027,1027,2030,1029,2032,1032,2032,1034,2035,1034,2037,1039,2039,1043,2044,1048,2051,1051,2060,1051,2062,1051,2065,L,1053,2067,Q,1056,2078,1058,2088,1100,2088,1139,2088,1151,2088,1163,2088,1172,2086,1177,2091,L,1179,2093,Q,1179,2098,1181,2100,1181,2102,1184,2102,1184,2105,1184,2107,1183,2114,1186,2119,L,1188,2123,Q,1200,2126,1212,2126,1216,2126,1219,2126,1226,2128,1235,2135,L,1237,2137,Q,1237,2163,1237,2186,1237,2193,1237,2198,1235,2207,1242,2210,L,1244,2212,1247,2217,Q,1261,2219,1270,2224,1275,2226,1275,2228,1277,2235,1277,2242,1277,2252,1282,2259,1284,2261,1284,2263,1288,2270,1300,2270,1303,2270,1305,2270,L,1307,2273,Q,1314,2275,1319,2277,1321,2280,1324,2280,1326,2287,1328,2292,L,1331,2294,Q,1331,2298,1333,2301,1333,2303,1335,2303,1338,2305,1340,2310,L,1340,2313,Q,1363,2315,1387,2315,1391,2315,1391,2317,1405,2326,1424,2326,1426,2359,1426,2394,1426,2399,1429,2404,1429,2408,1431,2408,1468,2411,1506,2411,1517,2410,1524,2415,L,1527,2418,Q,1529,2420,1532,2422,1536,2424,1539,2429,1541,2434,1543,2436,1546,2439,1548,2441,1550,2445,1553,2448,L,1555,2450,Q,1555,2455,1557,2457,1557,2459,1559,2459,1562,2464,1564,2471,L,1567,2474,Q,1566,2478,1569,2481,1569,2483,1571,2483,L,1574,2485,Q,1574,2492,1578,2495,1580,2497,1583,2497,L,1585,2502,Q,1592,2504,1595,2509,L,1597,2511,Q,1599,2513,1602,2516,1604,2518,1606,2518,1611,2522,1611,2527,1611,2534,1611,2544,1611,2558,1618,2565,1620,2567,1623,2569,1625,2574,1627,2574,1632,2576,1634,2581,L,1637,2586,Q,1646,2586,1646,2593,1648,2595,1648,2597,1655,2600,1665,2600,1674,2602,1681,2597,1686,2595,1688,2593,1690,2590,1693,2588,1695,2581,1700,2576,1704,2569,1704,2558,L,1704,2555,Q,1721,2553,1735,2558,1737,2558,1739,2558,1742,2560,1742,2562,L,1744,2565,Q,1749,2574,1751,2581,1753,2583,1753,2586,1756,2588,1758,2588,1767,2590,1772,2597,L,1775,2600,Q,1813,2600,1849,2600,1849,2618,1851,2637,L,1854,2637,Q,1863,2637,1873,2637,1879,2639,1877,2649,1877,2656,1880,2665,1879,2667,1882,2670,1884,2677,1886,2686,L,1889,2688,Q,1898,2695,1912,2693,1959,2693,2003,2693,2038,2693,2071,2691,L,2071,2686,Q,2071,2663,2073,2642,L,2076,2639,Q,2122,2639,2167,2639,2213,2639,2258,2639,2276,2639,2295,2639,L,2298,2642,Q,2302,2642,2304,2644,2307,2644,2307,2647,2307,2691,2307,2735,2307,2780,2307,2826,2307,2833,2309,2836,2311,2838,2314,2838,2330,2838,2349,2838,L,2351,2840,Q,2356,2854,2354,2871,2351,2877,2361,2875,2367,2875,2372,2875,2391,2875,2407,2873,L,2407,2871,Q,2412,2864,2409,2850,2407,2840,2412,2838,2417,2838,2419,2838,2438,2838,2456,2836,L,2456,2833,Q,2456,2826,2459,2824,2461,2821,2463,2817,L,2466,2815,Q,2470,2810,2470,2803,L,2470,2801,Q,2470,2793,2477,2793,2480,2793,2480,2791,2484,2791,2491,2791,2494,2791,2494,2789,2498,2789,2501,2786,2503,2784,2505,2780,2508,2779,2508,2777,2510,2777,2512,2775,2514,2772,2517,2768,2521,2758,2526,2747,2529,2742,2536,2742,2538,2742,2538,2740,2561,2740,2585,2740,2606,2740,2625,2738,L,2627,2733,2627,2730,Q,2629,2728,2629,2723,2629,2709,2631,2695,L,2634,2695,Q,2678,2695,2725,2695,2732,2695,2729,2705,2750,2660,2762,2637,2764,2635,2764,2628,2764,2567,2762,2506,2762,2504,2760,2499,2757,2494,2751,2490,2748,2487,2741,2485,2739,2485,2736,2483,2734,2481,2729,2478,2720,2474,2716,2464,2716,2462,2716,2459,2713,2413,2711,2366,2711,2340,2726,2330,2740,2320,2743,2307,2745,2300,2748,2295,2741,2270,2723,2257,2720,2254,2718,2250,2715,2242,2706,2231,2692,2214,2685,2198,2680,2189,2676,2182,2673,2179,2673,2175,2671,2163,2664,2156,2638,2128,2608,2095,2606,2093,2603,2091,2594,2076,2566,2077,2519,2077,2473,2074,2470,2074,2468,2072,2459,2058,2447,2042,2440,2037,2426,2037,2402,2039,2379,2039,2304,2039,2230,2037,2227,2037,2225,2037,2216,2032,2211,2025,2206,2023,2202,2021,2183,2011,2171,2e3,2169,1997,2164,1995,2162,1995,2160,1993,2150,1978,2132,1962,2124,1957,2125,1941,2127,1880,2125,1820,2125,1817,2122,1815,2113,1796,2101,1782,2087,1766,2076,1745,2073,1743,2073,1740,2068,1731,2064,1724,2057,1717,2050,1729,2038,1742,2022,1757,2017,1759,2013,1761,2010,1764,2006,1764,1984,1761,1971,1752,1959,1740,1940,1734,1938,1733,1936,1731,1912,1705,1903,1680,1900,1677,1898,1675,1891,1656,1875,1654,Q,1872,1654,1870,1654,Z]],label:"Xigazê Prefecture",shortLabel:"XP",labelPosition:[187,216.9],labelAlignment:[CEN,MID]},"TI.NP":{outlines:[[M,3991,2294,Q,3988,2294,3986,2292,3976,2277,3958,2270,3955,2270,3953,2268,3941,2261,3920,2261,3885,2263,3850,2263,3855,2280,3855,2296,3855,2301,3853,2303,3845,2308,3836,2313,3834,2312,3832,2315,3827,2317,3822,2317,3799,2319,3776,2322,3757,2322,3743,2315,3736,2310,3729,2305,3724,2303,3722,2298,3715,2294,3701,2296,3696,2296,3696,2294,3687,2277,3675,2266,3673,2261,3671,2259,3666,2254,3661,2252,3659,2249,3657,2247,3631,2228,3598,2235,3577,2238,3577,2226,3575,2207,3556,2198,3540,2191,3514,2193,3509,2193,3509,2191,3502,2172,3491,2161,3486,2158,3481,2159,3460,2154,3449,2142,3444,2140,3439,2137,L,3435,2137,Q,3434,2133,3432,2131,3425,2144,3418,2161,3416,2168,3414,2170,3393,2184,3387,2192,3382,2199,3360,2201,3360,2222,3360,2245,L,3360,2247,Q,3351,2249,3344,2250,3341,2250,3339,2250,3329,2245,3316,2247,L,3313,2247,Q,3311,2294,3311,2338,L,3311,2341,Q,3334,2343,3360,2345,3360,2392,3360,2436,3392,2423,3407,2436,3409,2439,3411,2439,3416,2441,3418,2443,3421,2450,3430,2453,3449,2460,3463,2469,3481,2478,3484,2502,3484,2527,3479,2548,3477,2553,3475,2555,3446,2579,3425,2600,3423,2602,3423,2604,3421,2618,3421,2632,3418,2658,3425,2675,3428,2677,3430,2677,3456,2679,3481,2679,3572,2679,3664,2677,3689,2677,3706,2684,3710,2686,3715,2691,3717,2693,3722,2695,3729,2702,3736,2710,3738,2714,3741,2719,3747,2726,3757,2730,3764,2735,3771,2742,3773,2744,3778,2747,3792,2758,3799,2777,3801,2779,3804,2782,3818,2786,3822,2801,3836,2831,3860,2857,3862,2859,3862,2861,3864,2910,3866,2963,3871,2962,3878,2962,3901,2964,3925,2964,3950,2964,3976,2959,L,3976,2955,Q,3979,2929,3995,2924,4002,2922,4009,2922,4039,2922,4070,2917,L,4070,2913,Q,4072,2896,4082,2887,4084,2885,4086,2880,4175,2875,4261,2875,4277,2863,4278,2880,4278,2882,4278,2884,4282,2905,4299,2915,4310,2920,4322,2922,4350,2922,4378,2924,4380,2924,4383,2924,4390,2927,4397,2927,4404,2926,4404,2936,4404,2938,4406,2941,4413,2950,4420,2955,4425,2957,4427,2962,4429,2964,4429,2969,4429,2983,4448,2980,4460,2978,4471,2976,4478,2976,4486,2976,4499,2973,4514,2971,4516,2971,4518,2969,4530,2957,4534,2931,4537,2927,4539,2922,4541,2917,4544,2915,4546,2912,4551,2910,4553,2910,4556,2908,4560,2901,4570,2896,4574,2894,4579,2892,4583,2889,4588,2887,4590,2887,4593,2884,4597,2877,4612,2878,4616,2877,4619,2873,4623,2868,4628,2857,4630,2849,4630,2843,4635,2819,4658,2817,4686,2817,4710,2824,4714,2824,4717,2826,4719,2829,4719,2833,4719,2847,4724,2859,4724,2861,4728,2861,4733,2863,4738,2866,4742,2873,4747,2880,4752,2887,4761,2892,4768,2894,4766,2903,4759,2934,4780,2934,4791,2936,4796,2941,4808,2957,4808,2983,4808,2990,4817,2990,4831,2987,4841,2983,4843,2980,4845,2978,4852,2971,4852,2955,4850,2936,4854,2917,L,4859,2917,Q,4882,2922,4889,2908,4892,2903,4892,2899,4892,2852,4894,2805,4885,2786,4868,2777,4866,2775,4864,2773,4852,2759,4841,2745,4817,2719,4803,2688,4801,2686,4798,2684,4768,2660,4745,2635,4742,2632,4738,2630,4735,2630,4733,2628,4726,2618,4719,2614,4717,2609,4714,2604,4707,2600,4696,2597,4691,2597,4686,2597,4642,2595,4598,2593,4586,2593,4574,2588,4572,2588,4570,2586,4553,2574,4542,2558,4539,2555,4537,2553,4530,2548,4525,2539,4518,2525,4509,2520,4506,2518,4504,2516,4488,2509,4471,2504,4464,2502,4457,2499,4455,2499,4453,2497,4436,2473,4411,2459,4408,2457,4406,2457,4383,2455,4359,2455,4343,2457,4334,2467,4331,2469,4327,2469,4301,2471,4285,2464,4278,2460,4273,2453,4271,2448,4268,2443,4257,2432,4250,2413,4250,2410,4247,2408,4240,2392,4226,2378,4224,2373,4222,2368,4196,2340,4168,2324,4165,2322,4163,2320,4149,2312,4131,2313,4084,2315,4037,2315,4032,2315,4028,2313,4025,2313,4023,2310,Q,4009,2301,3991,2294,Z]],label:"Nyinchi Prefecture",shortLabel:"NP",labelPosition:[393.2,256],labelAlignment:[CEN,MID]},"TI.SP":{outlines:[[M,3430,2453,Q,3421,2450,3418,2443,3416,2441,3411,2439,3409,2439,3407,2436,3392,2423,3360,2436,3310,2432,3271,2432,3180,2432,3089,2432,3042,2431,2996,2429,2986,2429,2986,2436,2986,2448,2989,2459,2991,2476,2977,2476,2954,2478,2930,2476,2928,2476,2926,2476,2890,2473,2856,2474,2809,2473,2762,2476,2757,2476,2758,2478,2755,2488,2751,2490,2757,2494,2760,2499,2762,2504,2762,2506,2764,2567,2764,2628,2764,2635,2762,2637,2750,2660,2729,2705,2729,2712,2729,2716,2729,2730,2732,2742,2734,2742,2736,2742,2783,2742,2828,2742,2851,2742,2874,2745,L,2874,2747,Q,2874,2763,2877,2780,L,2879,2780,Q,2914,2779,2949,2777,L,2949,2775,Q,2949,2765,2954,2756,L,2956,2754,Q,2961,2749,2970,2751,2977,2751,2986,2751,2991,2751,2996,2749,L,2998,2749,Q,3003,2747,3005,2747,3010,2747,3014,2747,3019,2747,3021,2749,3024,2751,3024,2754,L,3026,2756,Q,3035,2761,3045,2768,L,3047,2770,3052,2770,Q,3054,2800,3054,2831,3054,2875,3054,2922,L,3054,2924,Q,3094,2929,3136,2929,3138,2929,3141,2931,L,3141,2934,Q,3140,2941,3143,2948,3143,2952,3145,2955,L,3145,2957,Q,3150,2964,3152,2969,L,3154,2971,Q,3154,2975,3157,2976,3159,2980,3161,2980,L,3164,2983,Q,3168,2983,3171,2985,3173,2985,3173,2987,3176,2987,3178,2987,3180,2990,3183,2990,3185,2990,3187,2990,3192,2996,3199,3004,L,3201,3006,Q,3206,3008,3211,3013,3215,3020,3213,3034,3213,3048,3206,3057,3201,3064,3187,3062,3175,3062,3164,3062,3164,3064,3161,3064,3159,3064,3157,3067,3154,3071,3154,3076,3154,3099,3154,3123,3154,3125,3152,3127,3150,3141,3150,3158,L,3152,3163,Q,3192,3165,3234,3165,3245,3165,3255,3167,L,3257,3170,Q,3257,3174,3259,3174,3262,3179,3264,3181,3267,3183,3267,3186,3271,3195,3281,3202,3283,3204,3283,3202,3313,3204,3341,3205,3334,3195,3334,3179,3337,3165,3341,3153,3341,3151,3346,3151,3437,3151,3528,3153,3544,3153,3547,3141,3549,3137,3549,3132,3549,3118,3566,3120,3577,3123,3589,3125,3610,3127,3624,3116,3638,3102,3647,3081,3656,3057,3682,3053,3684,3053,3687,3048,3691,3036,3703,3027,3705,3025,3708,3022,3710,3020,3715,3018,3717,3018,3720,3018,3769,3015,3818,3015,3834,3015,3848,3011,3850,3011,3850,3006,3850,2989,3853,2973,3852,2971,3855,2969,3859,2965,3866,2963,3864,2910,3862,2861,3862,2859,3860,2857,3836,2831,3822,2801,3818,2786,3804,2782,3801,2779,3799,2777,3792,2758,3778,2747,3773,2744,3771,2742,3764,2735,3757,2730,3747,2726,3741,2719,3738,2714,3736,2710,3729,2702,3722,2695,3717,2693,3715,2691,3710,2686,3706,2684,3689,2677,3664,2677,3572,2679,3481,2679,3456,2679,3430,2677,3428,2677,3425,2675,3418,2658,3421,2632,3421,2618,3423,2604,3423,2602,3425,2600,3446,2579,3475,2555,3477,2553,3479,2548,3484,2527,3484,2502,3481,2478,3463,2469,Q,3449,2460,3430,2453,Z]],label:"Shannan Prefecture",shortLabel:"SP",labelPosition:[329.7,281.7],labelAlignment:[CEN,MID]},"TI.LP":{outlines:[[M,3075,2063,Q,3070,2062,3057,2066,3045,2070,3040,2066,3035,2062,3023,2059,3010,2056,3007,2032,3007,2023,2993,2028,2988,2027,2984,2030,2970,2037,2975,2056,2975,2063,2972,2063,2958,2067,2940,2065,2914,2063,2893,2072,2869,2084,2881,2102,2888,2114,2895,2126,2900,2133,2900,2144,2900,2151,2898,2156,2897,2158,2895,2161,2893,2172,2891,2184,2890,2189,2888,2191,2881,2203,2877,2214,2872,2224,2858,2224,2834,2226,2818,2239,2802,2251,2791,2257,2780,2262,2774,2272,2766,2280,2756,2287,2751,2290,2748,2295,2745,2300,2743,2307,2740,2320,2726,2330,2711,2340,2711,2366,2713,2413,2716,2459,2716,2462,2716,2464,2720,2474,2729,2478,2734,2481,2736,2483,2739,2485,2741,2485,2748,2487,2751,2490,2755,2488,2758,2478,2757,2476,2762,2476,2809,2473,2856,2474,2890,2473,2926,2476,2928,2476,2930,2476,2954,2478,2977,2476,2991,2476,2989,2459,2986,2448,2986,2436,2986,2429,2996,2429,3042,2431,3089,2432,3180,2432,3271,2432,3310,2432,3360,2436,3360,2392,3360,2345,3334,2343,3311,2341,L,3311,2338,Q,3311,2294,3313,2247,L,3316,2247,Q,3329,2245,3339,2250,3341,2250,3344,2250,3351,2249,3360,2247,L,3360,2245,Q,3360,2222,3360,2201,3354,2202,3346,2203,3311,2205,3265,2203,3220,2200,3200,2205,3180,2210,3173,2203,3171,2200,3168,2196,3157,2184,3157,2161,3157,2149,3150,2147,3136,2142,3131,2133,3131,2130,3131,2126,3131,2100,3110,2086,3108,2084,3105,2079,Q,3096,2063,3075,2063,Z]],label:"Lhasa Prefecture",shortLabel:"LP",labelPosition:[303.5,225.8],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"tibet",type:"maps"}}})});