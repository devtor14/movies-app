export function Star({
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
        d='M37.8996 13.642C37.7801 13.2903 37.5603 12.9813 37.2672 12.7531C36.9742 12.5248 36.6207 12.3874 36.2504 12.3578L25.4184 11.4972L20.7311 1.12269C20.5818 0.788547 20.339 0.504742 20.032 0.305527C19.7249 0.106312 19.3668 0.000201143 19.0008 2.85681e-07C18.6348 -0.000200572 18.2765 0.105517 17.9693 0.304395C17.662 0.503273 17.4189 0.786812 17.2693 1.12079L12.5819 11.4972L1.74996 12.3578C1.38602 12.3866 1.0381 12.5197 0.747809 12.741C0.457519 12.9624 0.237158 13.2627 0.113088 13.606C-0.0109828 13.9493 -0.0335085 14.3211 0.0482056 14.6768C0.12992 15.0326 0.312413 15.3573 0.573853 15.6121L8.5786 23.4143L5.74758 35.6715C5.66162 36.0425 5.68917 36.4308 5.82666 36.786C5.96415 37.1412 6.20523 37.4468 6.51861 37.6633C6.832 37.8797 7.20322 37.997 7.5841 37.9999C7.96499 38.0028 8.33795 37.8912 8.6546 37.6795L19.0002 30.7835L29.3457 37.6795C29.6694 37.8944 30.051 38.005 30.4394 37.9965C30.8278 37.988 31.2043 37.8607 31.5182 37.6319C31.8321 37.4031 32.0684 37.0836 32.1953 36.7165C32.3222 36.3494 32.3336 35.9522 32.228 35.5784L28.7529 23.42L37.3714 15.6653C37.9357 15.1561 38.1428 14.362 37.8996 13.642Z'
        fill='#EEEEEE'
      />
    </svg>
  );
}