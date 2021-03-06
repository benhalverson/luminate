import {Theme} from 'theme-ui'

const greens = [
  'hsl(152, 68%, 96%)',
  'hsl(154, 75%, 87%)',
  'hsl(156, 73%, 74%)',
  'hsl(158, 58%, 62%)',
  'hsl(160, 51%, 49%)',
  'hsl(162, 63%, 41%)',
  'hsl(164, 71%, 34%)',
  'hsl(166, 72%, 28%)',
  'hsl(168, 80%, 23%)',
  'hsl(170, 97%, 15%)',
]

const blues = [
  'hsl(205, 79%, 92%)',
  'hsl(205, 97%, 85%)',
  'hsl(205, 84%, 74%)',
  'hsl(205, 74%, 65%)',
  'hsl(205, 65%, 55%)',
  'hsl(205, 67%, 45%)',
  'hsl(205, 76%, 39%)',
  'hsl(205, 82%, 33%)',
  'hsl(205, 87%, 29%)',
  'hsl(205, 100%, 21%)',
]

const purples = [
  'hsl(262, 61%, 93%',
  'hsl(261, 68%, 84%)',
  'hsl(261, 54%, 68%)',
  'hsl(261, 47%, 58%)',
  'hsl(262, 43%, 51%)',
  'hsl(262, 48%, 46%)',
  'hsl(262, 60%, 38%)',
  'hsl(262, 60%, 38%)',
  'hsl(262, 69%, 31%)',
  'hsl(262, 72%, 25%)',
  'hsl(263, 85%, 18%)',
]

const greys = [
  'hsl(210, 36%, 96%)',
  'hsl(212, 33%, 89%)',
  'hsl(210, 31%, 80%)',
  'hsl(211, 27%, 70%)',
  'hsl(209, 23%, 60%)',
  'hsl(210, 22%, 49%)',
  'hsl(209, 28%, 39%)',
  'hsl(209, 34%, 30%)',
  'hsl(211, 39%, 23%)',
  'hsl(209, 61%, 16%)',
]

const reds = [
  'hsl(360, 100%, 97%)',
  'hsl(360, 82%, 89%)',
  'hsl(360, 77%, 78%)',
  'hsl(360, 71%, 66%)',
  'hsl(360, 64%, 55%)',
  'hsl(360, 67%, 44%)',
  'hsl(360, 72%, 38%)',
  'hsl(360, 79%, 32%)',
  'hsl(360, 85%, 25%)',
  'hsl(360, 92%, 20%)',
]

const yellows = [
  'hsl(45, 100%, 96%)',
  'hsl(45, 90%, 88%)',
  'hsl(45, 86%, 81%)',
  'hsl(43, 90%, 76%)',
  'hsl(43, 89%, 70%)',
  'hsl(42, 78%, 60%)',
  'hsl(42, 63%, 48%)',
  'hsl(43, 72%, 37%)',
  'hsl(43, 77%, 27%)',
  'hsl(43, 86%, 17%)',
]

const hslToHsla = (hsl: string, a: string) => `hsla(${hsl.replace('hsl(', '').replace(')', '')}, ${a})`

const colors: Theme['colors'] = {
  background: 'white',
  text: greys[9],
  primary: greens[5],
  secondary: greys[8],
  accent: blues[5],
  muted: greys[3],
  // appBackground: greys[1],
  appBackground: hslToHsla(greys[1], '.96'),
  greens,
  blues,
  purples,
  greys,
  grays: greys,
  reds,
  yellows,
}

export default colors
