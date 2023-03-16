import { useState, useTransition } from "react";
export default function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [pickedNumber, setPickedNumber] = useState(1);
  const handleClick = (number, isTransition) => {
    if (isTransition) {
      startTransition(() => {
        setPickedNumber(number);
      });
    } else {
      setPickedNumber(number);
    }
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>1번 선택</button>
      <button onClick={() => handleClick(2, true)}>2번 선택</button>
      <button onClick={() => handleClick(3)}>3번 선택</button>
      {isPending && <div>loading...</div>}
      {pickedNumber === 1 && <div>1번 선택했습니다.</div>}
      {pickedNumber === 2 && Array(100000).fill(1).map(() => {
        return (
          <span>trash</span>
        )
      })}
      {pickedNumber === 3 && <div>3번 선택했습니다.</div>}
    </div>
  );
}

