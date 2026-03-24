# 🛠️ TypeORM SQL Log Parser

A simple web-based tool that converts raw TypeORM logs into **readable SQL queries**, supports **multiple log lines**, highlights **SQL syntax**, and allows easy **copying** and **saving**.

## 🌟 Features

- ✅ **Parse raw TypeORM logs** (`query + -- PARAMETERS`)
- 🧠 **Auto inject parameters** into query placeholders
- ✨ **Beautify SQL** for better readability
- 🖍️ **SQL syntax highlighting**
- 📋 **Copy each query result** individually
- 💾 **Save input/output** as JSON
- ➕ **Supports multiple queries at once**

## 🚀 How to Use

1. Open `index.html` in your browser.
2. Paste one or more TypeORM logs in the input box. Example:

    ```
    SELECT * FROM "users" WHERE id = $1 -- PARAMETERS: ["abc-123"]
    SELECT * FROM "orders" WHERE user_id = $1 AND status = $2 -- PARAMETERS: ["abc-123", "pending"]
    ```

3. Click **Parse**.
4. Each parsed & formatted SQL query will appear in a separate box.
5. Click the **copy** icon to copy individual SQL queries.

## 🏗️ Example Input


## 📦 Output

```sql
SELECT * FROM "users" WHERE id = 'abc-123'


📌 Limitations
Only supports -- PARAMETERS: [...] format.

Assumes parameter order matches $1, $2, ... in SQL.

Beautifier is regex-based (not a full SQL parser).
