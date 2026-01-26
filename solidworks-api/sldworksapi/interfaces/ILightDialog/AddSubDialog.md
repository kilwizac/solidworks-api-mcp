---
type: method
interface: ILightDialog
member: AddSubDialog
returns: System.Boolean
parameters:
  -
    name: Page
    type: System.Int32
    description: Pointer to a CDialog object cast to a long
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addsubdialog
  - ilightdialog
  - light
  - dialog
  - add
  - sub
  - page
  - int32
  - boolean
---

# ILightDialog.AddSubDialog

Adds a sub-dialog to the lighting dialog.

## Signature

```csharp
System.Boolean AddSubDialog( 
   System.Int32
Page
)
```
## Parameters

- `Page` (System.Int32): Pointer to a CDialog object cast to a long

## Return Value

True if the dialog was successfully added, false if not

## Remarks

Currently only one sub-dialog can be added to each dialog.