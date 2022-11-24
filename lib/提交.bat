@echo off
set year=%date:~0,4%
set mon=%date:~5,2%
set day=%date:~8,2%
set zhou=%date:~10,6%
set h=%time:~0,2%
set m=%time:~3,2%
set s=%time:~6,2%
set comtxt=%year%年%mon%月%day%日-%h%时%m%分%s%秒-%zhou%
cd Super-series
git add .
git commit -m "%comtxt%"
git push origin master
git push gitee master
pause