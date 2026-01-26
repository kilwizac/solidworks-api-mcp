---
type: enum
name: swAddMateError_e
description: Status after adding or editing a mate.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swAddMateError_e

Status after adding or editing a mate.

## Values

| Member | Value | Description |
|---|---|---|
| `swAddMateError_ErrorUknown` | 0 | = Unknown error occurred |
| `swAddMateError_IncorrectAlignment` | 3 | = Unknown mate alignment or mate alignment is not present in swMateAlign_e |
| `swAddMateError_IncorrectGearRatios` | 6 | = Mate gear ratios are invalid |
| `swAddMateError_IncorrectMateType` | 2 | = Unknown mate type or mate type not present in swMateType_e |
| `swAddMateError_IncorrectSelections` | 4 | = Incorrect selections for mate |
| `swAddMateError_NoError` | 1 | = Success, no error |
| `swAddMateError_OverDefinedAssembly` | 5 | = Mate is over-defining the assembly |