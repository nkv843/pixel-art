import clear from '../../img/weather/clear.svg';
import cloudy from '../../img/weather/cloudy.svg';
import littleRain from '../../img/weather/littleRain.svg';
import littleSnow from '../../img/weather/littleSnow.svg';
import partlyCloudy from '../../img/weather/partlyCloudy.svg';
import rain from '../../img/weather/rain.svg';
import rainSnow from '../../img/weather/rainSnow.svg';
import humid from '../../img/weather/humid.svg';
import snow from '../../img/weather/snow.svg';

const weatherModifiers = {
  weather: {
    clearday: { img: clear, description: 'clear' },
    clearnight: { img: clear, description: 'clear' },
    pcloudyday: { img: partlyCloudy, description: 'partly cloudy' },
    pcloudynight: { img: partlyCloudy, description: 'partly cloudy' },
    mcloudyday: { img: partlyCloudy, description: 'partly cloudy' },
    mcloudynight: { img: partlyCloudy, description: 'partly cloudy' },
    cloudyday: { img: cloudy, description: 'cloudy' },
    cloudynight: { img: cloudy, description: 'cloudy' },
    humidday: { img: humid, description: 'fog' },
    humidnight: { img: humid, description: 'fog' },
    lightrainday: { img: littleRain, description: 'light rain' },
    lightrainnight: { img: littleRain, description: 'light rain' },
    oshowerday: { img: littleRain, description: 'light rain' },
    oshowernight: { img: littleRain, description: 'light rain' },
    ishowerday: { img: littleRain, description: 'light rain' },
    ishowernight: { img: littleRain, description: 'light rain' },
    lightsnowday: { img: littleSnow, description: 'light snow' },
    lightsnownight: { img: littleSnow, description: 'light snow' },
    rainday: { img: rain, description: 'rain' },
    rainnight: { img: rain, description: 'rain' },
    snowday: { img: snow, description: 'snow' },
    snownight: { img: snow, description: 'snow' },
    rainsnowday: { img: rainSnow, description: 'rain snow' },
    rainsnownight: { img: rainSnow, description: 'rain snow' },
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
