# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Calender.spec.js >> calender Playwright Test
- Location: tests\Calender.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link "logo" [ref=e8] [cursor=pointer]:
      - /url: index.php
      - img "logo" [ref=e9]
    - navigation [ref=e14]:
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link "Home" [ref=e18] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e19]:
          - link "Input Form" [ref=e20] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e21]:
          - link "Date Pickers" [ref=e22] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=e23]:
          - link "Table" [ref=e24] [cursor=pointer]:
            - /url: table-pagination.php
        - listitem [ref=e25]:
          - link "Progress Bars" [ref=e26] [cursor=pointer]:
            - /url: jquery-progress-bar.php
        - listitem [ref=e27]:
          - link "Alerts and Modals" [ref=e28] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=e29]:
          - link "List Box" [ref=e30] [cursor=pointer]:
            - /url: bootstrap-dual-list.php
        - listitem [ref=e31]:
          - link "Others" [ref=e32] [cursor=pointer]:
            - /url: drag-drop.php
  - generic [ref=e35]:
    - generic [ref=e38]:
      - generic [ref=e39]: Menu
      - list [ref=e40]:
        - listitem [ref=e41]:
          - link "Bootstrap Date Picker" [ref=e42] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=e43]:
          - link "Jquery Date Picker" [ref=e44] [cursor=pointer]:
            - /url: jquery-date-picker.php
    - generic [ref=e45]:
      - generic [ref=e47]:
        - generic [ref=e48]: Date Picker
        - generic [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e52]: Enter Date
            - generic [ref=e53]:
              - textbox [ref=e54]
              - generic [ref=e57]: 
          - button "Show Date" [ref=e58] [cursor=pointer]
          - generic [ref=e59]: "Date :"
      - generic [ref=e61]:
        - generic [ref=e62]: Date Range Picker
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: Enter Dates
            - generic [ref=e67]:
              - textbox [ref=e68]: 05/20/2026 - 05/20/2026
              - generic [ref=e71]: 
          - button "Show Date" [ref=e72] [cursor=pointer]
          - generic [ref=e73]: "Date Range :"
  - contentinfo [ref=e74]:
    - paragraph [ref=e77]: © 2021 Obsqura Testing, All Rights Reserved.
  - table [ref=e80]:
    - rowgroup [ref=e81]:
      - row
      - row "« 2020-2029 »" [ref=e82]:
        - columnheader "«" [ref=e83] [cursor=pointer]
        - columnheader "2020-2029" [ref=e84] [cursor=pointer]
        - columnheader "»" [ref=e85] [cursor=pointer]
    - rowgroup [ref=e86]:
      - row "2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030" [ref=e87]:
        - cell "2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029 2030" [ref=e88]:
          - generic [ref=e89] [cursor=pointer]: "2019"
          - generic [ref=e90] [cursor=pointer]: "2020"
          - generic [ref=e91] [cursor=pointer]: "2021"
          - generic [ref=e92] [cursor=pointer]: "2022"
          - generic [ref=e93] [cursor=pointer]: "2023"
          - generic [ref=e94] [cursor=pointer]: "2024"
          - generic [ref=e95] [cursor=pointer]: "2025"
          - generic [ref=e96] [cursor=pointer]: "2026"
          - generic [ref=e97] [cursor=pointer]: "2027"
          - generic [ref=e98] [cursor=pointer]: "2028"
          - generic [ref=e99] [cursor=pointer]: "2029"
          - generic [ref=e100] [cursor=pointer]: "2030"
    - rowgroup:
      - row
      - row
```