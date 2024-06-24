import React, {useMemo} from "react";

export function MemoDialog({ list }) {
  console.log('render MemoDialog')

  const memoList = useMemo( () => {
    return list
  }, []);
  // }, [list]);

  console.log('Memoized list =>', memoList)

  return (
    <ul>
      {memoList.map((el) => (
        <li key={el}>{el}</li>
      ))}
      {/*{list.map((el) => (*/}
      {/*    <li key={el}>{el}</li>*/}
      {/*))}*/}
    </ul>
  );
}
