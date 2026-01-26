---
type: enum
name: swCloseReopenError_e
description: Close and reopen errors.
member_count: 15
docset: swconst
categories:
  - constants
used_by: []
---

# swCloseReopenError_e

Close and reopen errors.

## Values

| Member | Value | Description |
|---|---|---|
| `swCloseReopenCloseDocError` | 5 | ; error occurred during close |
| `swCloseReopenInvalidDocError` | 4 | ; document is not a drawing |
| `swCloseReopenLoadFileNotFoundError` | 7 | ; file path specified for document to reopen does not exist |
| `swCloseReopenLoadFilePathEmptyError` | 13 | ; file path of document to reopen is empty |
| `swCloseReopenLoadFilePathNonDrawingError` | 14 | ; file to reopen is not a drawing |
| `swCloseReopenLoadFutureVersionError` | 9 | ; file to reopen is a future version |
| `swCloseReopenLoadGenericError` | 6 | ; error occurred during reopen |
| `swCloseReopenLoadInvalidFileTypeError` | 8 | ; file type is not valid |
| `swCloseReopenLoadLiquidMachineDocError` | 11 | ; LiquidMachine document error |
| `swCloseReopenLoadSameTitleAlreadyOpenError` | 10 | ; file with the same title is already open |
| `swCloseReopenModifiedError` | 12 | ; unable to close the document because changes were made to the document, and swCloseReopenOption_e.swCloseReopenOption_DiscardChanges was not set |
| `swCloseReopenNoError` | 0 | ; no error |
| `swCloseReopenNoInputDocError` | 2 | ; input document is null |
| `swCloseReopenOutputDocPointerError` | 3 | ; output document is null |
| `swCloseReopenUnknownError` | 1 | ; unknown error |