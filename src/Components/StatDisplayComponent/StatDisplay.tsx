import React from 'react';
import { MouseEventHandler, useCallback, useState } from "react";
import data from "./Data.json";
import './StatDisplay.css';

type Data = typeof data;

type SortKeys = keyof Data[0];

type SortOrder = "ascn" | "desc";

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;

  const sortedData = data.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

function SortButton({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === "desc"
          ? "sort-button sort-reverse"
          : "sort-button"
      }`}
    >
      ▲
    </button>
  );
}

function StatDisplay() {

  const [sortKey, setSortKey] = useState<SortKeys>("player_name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  const headers: { key: SortKeys; label: string }[] = [
    { key: "player_number", label: "#" },
    { key: "player_name", label: "Player" },
    { key: "games_played", label: "GP" },
    { key: "goals", label: "G" },
    { key: "assists", label: "A" },
    { key: "points", label: "P" },
    { key: "plus_minus", label: "(+/-)" },
    { key: "penalty_minutes", label: "PIM" },
    { key: "shots", label: "S" },
    { key: "shooting_percentage", label: "S%" },
    { key: "face_off", label: "FO%" },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
            return (
              <td key={row.key}>
                {row.label}{" "}
                <SortButton
                  columnKey={row.key}
                  onClick={() => changeSort(row.key)}
                  {...{
                    sortOrder,
                    sortKey,
                  }}
                />
              </td>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sortedData().map((person) => {
          return (
            <tr key={person.player_number}>
              <td>{person.player_number}</td>
              <td>{person.player_name}</td>
              <td>{person.games_played}</td>
              <td>{person.goals}</td>
              <td>{person.assists}</td>
              <td>{person.points}</td>
              <td>{person.plus_minus}</td>
              <td>{person.penalty_minutes}</td>
              <td>{person.shots}</td>
              <td>{person.shooting_percentage}</td>
              <td>{person.face_off}</td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StatDisplay;








