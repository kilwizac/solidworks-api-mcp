---
type: enum
name: swPackAndGoSaveStatus_e
description: Status of each document intended for Pack and Go.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swPackAndGoSaveStatus_e

Status of each document intended for Pack and Go.

## Values

| Member | Value | Description |
|---|---|---|
| `swPackAndGoSaveStatus_FileAlreadyExist` | 2 | = File already exists |
| `swPackAndGoSaveStatus_SaveError` | 4 | = Save error |
| `swPackAndGoSaveStatus_SaveToEmpty` | 3 | = Saving empty file |
| `swPackAndGoSaveStatus_Succeed` | 0 | = Success |
| `swPackAndGoSaveStatus_UserInputNotCorrect` | 1 | = User input not correct |