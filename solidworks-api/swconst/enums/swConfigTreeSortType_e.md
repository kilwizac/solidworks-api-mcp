---
type: enum
name: swConfigTreeSortType_e
description: Order in which configurations are listed in the ConfigurationManager.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swConfigTreeSortType_e

Order in which configurations are listed in the ConfigurationManager.

## Values

| Member | Value | Description |
|---|---|---|
| `swSortType_DesignTable` | 3 | = Order of the configurations in the ConfigurationManager is dictated by the order of the configurations in the design table |
| `swSortType_History` | 0 | = Order of the configurations in the ConfigurationManager is dictated by the date the configuration was created, from earliest created at the top of the list to most recently created at the bottom of the list |
| `swSortType_Literal` | 2 | = Order of the configurations in the ConfigurationManager is alphabetical |
| `swSortType_Numeric` | 1 | = Order of the configurations in the ConfigurationManager is by ascending alpha or numeric value |