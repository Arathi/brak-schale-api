import { test } from "vitest";
import SchaleApi from "./schale-api";

const schale = new SchaleApi();

test("获取学生信息", async () => {
  const students = await schale.getStudents();
  console.info(
    `获取 ${schale.serverName}/${schale.languageName} 学生信息 ${students.length} 条`
  );
});

test("获取物品信息", async () => {
  const students = await schale.getItems();
  console.info(
    `获取 ${schale.serverName}/${schale.languageName} 物品信息 ${students.length} 条`
  );
});
