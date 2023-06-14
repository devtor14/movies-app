export function Cake({
  width = 20,
  height = 20,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.997 14.4444C13.396 14.4444 12.551 13.6933 11.872 13.09C11.305 12.5867 10.895 12.2222 9.994 12.2222C9.096 12.2222 8.707 12.5678 8.12 13.0889C7.441 13.6933 6.596 14.4444 4.995 14.4444C3.394 14.4444 2.551 13.6933 1.872 13.0889C1.285 12.5678 0.897 12.2222 0 12.2222V17.7778C0 19.0033 0.897 20 2 20H18C19.103 20 20 19.0033 20 17.7778V12.2222C19.101 12.2222 18.712 12.5678 18.124 13.09C17.444 13.6933 16.599 14.4444 14.997 14.4444ZM17 3.33333H11V0H9V3.33333H3C1.346 3.33333 0 4.82889 0 6.66667V10C1.6 10 2.443 10.7511 3.122 11.3556C3.709 11.8767 4.097 12.2222 4.995 12.2222C5.894 12.2222 6.282 11.8767 6.87 11.3544C7.549 10.7511 8.394 10 9.994 10C11.596 10 12.441 10.7511 13.121 11.3544C13.709 11.8767 14.098 12.2222 14.997 12.2222C15.897 12.2222 16.308 11.8578 16.875 11.3544C17.554 10.7511 18.399 10 20 10V6.66667C20 4.82889 18.654 3.33333 17 3.33333Z'
        fill='#EEEEEE'
      />
    </svg>
  );
}