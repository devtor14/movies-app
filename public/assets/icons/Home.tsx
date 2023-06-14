export function Home({
  width = 38,
  height = 38,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 38 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M37.5075 19.6156L20.4094 0.601786C19.6894 -0.200595 18.3063 -0.200595 17.5863 0.601786L0.488215 19.6156C0.242109 19.8886 0.0805671 20.2273 0.0232307 20.5905C-0.0341057 20.9537 0.0152339 21.3258 0.165251 21.6615C0.469217 22.3479 1.14934 22.789 1.89976 22.789H5.69933V36.0986C5.69933 36.6029 5.89949 37.0865 6.25577 37.4431C6.61205 37.7997 7.09526 38 7.59912 38H13.2985C13.8023 38 14.2856 37.7997 14.6418 37.4431C14.9981 37.0865 15.1983 36.6029 15.1983 36.0986V28.4931H22.7974V36.0986C22.7974 36.6029 22.9976 37.0865 23.3539 37.4431C23.7101 37.7997 24.1934 38 24.6972 38H30.3966C30.9004 38 31.3836 37.7997 31.7399 37.4431C32.0962 37.0865 32.2964 36.6029 32.2964 36.0986V22.789H36.0959C36.4639 22.7905 36.8243 22.6849 37.1333 22.485C37.4423 22.2851 37.6865 21.9996 37.8361 21.6632C37.9858 21.3267 38.0344 20.954 37.976 20.5905C37.9176 20.2269 37.7549 19.8882 37.5075 19.6156Z'
        fill='#EEEEEE'
      />
    </svg>
  );
}