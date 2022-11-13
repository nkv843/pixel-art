import clearDay from '../../img/weather/clearDay.svg';
import clearNight from '../../img/weather/clearNight.svg';
import cloudy from '../../img/weather/cloudy.svg';
import foggyDay from '../../img/weather/foggyDay.svg';
import foggyNight from '../../img/weather/foggyNight.svg';
import isolatedRainDay from '../../img/weather/isolatedRainDay.svg';
import isolatedRainNight from '../../img/weather/isolatedRainNight.svg';
import lightningDay from '../../img/weather/lightningDay.svg';
import lightningNight from '../../img/weather/lightningNight.svg';
import lightRain from '../../img/weather/lightRain.svg';
import occasionalRainDay from '../../img/weather/occasionalRainDay.svg';
import occasionalRainNight from '../../img/weather/occasionalRainNight.svg';
import occasionalSnowDay from '../../img/weather/occasionalSnowDay.svg';
import occasionalSnowNight from '../../img/weather/occasionalSnowNight.svg';
import partlyCloudyDay from '../../img/weather/partlyCloudyDay.svg';
import partlyCloudyNight from '../../img/weather/partlyCloudyNight.svg';
import rain from '../../img/weather/rain.svg';
import rainSnow from '../../img/weather/rainSnow.svg';
import snow from '../../img/weather/snow.svg';
import thunderstorm from '../../img/weather/thunderstorm.svg';
import windy from '../../img/weather/windy.svg';

const weatherModifiers = {
  weather: {
    clearday: { img: clearDay, description: 'Clear' },
    clearnight: { img: clearNight, description: 'Clear' },
    pcloudyday: { img: partlyCloudyDay, description: 'Partly cloudy' },
    pcloudynight: { img: partlyCloudyNight, description: 'Partly cloudy' },
    mcloudyday: { img: partlyCloudyDay, description: 'Partly cloudy' },
    mcloudynight: { img: partlyCloudyNight, description: 'Partly cloudy' },
    cloudyday: { img: cloudy, description: 'Cloudy' },
    cloudynight: { img: cloudy, description: 'Cloudy' },
    humidday: { img: foggyDay, description: 'Foggy' },
    humidnight: { img: foggyNight, description: 'Foggy' },
    lightrainday: { img: lightRain, description: 'Light rain' },
    lightrainnight: { img: lightRain, description: 'Light rain' },
    oshowerday: { img: occasionalRainDay, description: 'Occasional rain' },
    oshowernight: { img: occasionalRainNight, description: 'Occasional rain' },
    ishowerday: { img: isolatedRainDay, description: 'Isolated rain' },
    ishowernight: { img: isolatedRainNight, description: 'Isolated rain' },
    lightsnowday: { img: occasionalSnowDay, description: 'Light snow' },
    lightsnownight: { img: occasionalSnowNight, description: 'Light snow' },
    rainday: { img: rain, description: 'Rain' },
    rainnight: { img: rain, description: 'Rain' },
    snowday: { img: snow, description: 'Snow' },
    snownight: { img: snow, description: 'Snow' },
    rainsnowday: { img: rainSnow, description: 'Rainsnow' },
    rainsnownight: { img: rainSnow, description: 'Rainsnow' },
    tsday: { img: lightningDay, description: 'Lightning' },
    tsnight: { img: lightningNight, description: 'Lightning' },
    tsrainday: { img: thunderstorm, description: 'Thunderstorm' },
    tsrainnight: { img: thunderstorm, description: 'Thunderstorm' },
    windy: { img: windy, description: 'Windy' },
  },
  windSpeed: {
    1: 'calm, > 0.3 m/s',
    2: 'light, 0.3-3.4 m/s',
    3: 'moderate, 3.4-8.0 m/s',
    4: 'fresh, 8.0-10.8 m/s',
    5: 'strong, 10.8-17.2 m/s',
    6: 'gale, 17.2-24.5 m/s',
    7: 'storm, 24.5-32.6 m/s',
    8: 'hurricane, > 32.6 m/s',
  },
  cloudcover: {
    1: '0%',
    2: '10%',
    3: '25%',
    4: '40%',
    5: '50%',
    6: '60%',
    7: '75%',
    8: '90%',
    9: '100%',
  },
  monthNames: {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  },
};

export default weatherModifiers;
