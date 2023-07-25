import React, { Fragment, useState } from "react";

function Test() {
  const testList = [1, 2, 4, 8, 16, 32];
  const [summary, setSummary] = useState(0);
  const [totalList, settotalList] = useState([]);
  const [result, setResult] = useState([]);
  const changeHandler = (e) => {
    const check = e.target.checked;
    const value = parseInt(e.target.value);
    if (check) {
      setSummary((pre) => pre + value);
      settotalList((pre) => [...pre, value]);
    } else {
      setSummary((pre) => pre - value);
      settotalList((pre) => pre.filter((val) => val !== value));
    }
  };

  const recursive = (x, i = 0, result = []) => {
    // 將原本的陣列反轉
    const currentNumber = [...testList].reverse()[i];
    if (x >= currentNumber) {
      return recursive(x - currentNumber, i + 1, [...result, currentNumber]);
    }
    if (x < currentNumber) {
      return recursive(x, i + 1, result);
    }
    // 終止條件
    if (x == 0) {
      return result;
    }
  };

  const reduce = (x) => {
    return [...testList].reverse().reduce((arr, val) => {
      if (x >= val) {
        x -= val;
        arr.unshift(val);
      }
      return arr;
    }, []);
  };

  const calculating = () => {
    // setResult(recursive(summary));\
    console.log(summary);
    let result = recursive(summary).reverse();
    let result2 = reduce(summary);
    console.log(result2);
    console.log(result);
    setResult(result);
  };

  return (
    <div>
      {testList.map((checkbox) => {
        return (
          <Fragment key={checkbox}>
            <label htmlFor={"checkbox" + checkbox}>{checkbox}</label>
            <input
              type="checkbox"
              id={"checkbox" + checkbox}
              value={checkbox}
              onChange={changeHandler}
            />
          </Fragment>
        );
      })}
      <p>{summary}</p>
      <p>{totalList}</p>
      <button onClick={calculating}>calculate</button>
      <p>{result}</p>
    </div>
  );
}

export default Test;
