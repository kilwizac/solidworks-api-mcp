---
type: method
interface: IModelDocExtension
member: SaveSelection
returns: System.Object
parameters:
  -
    name: Status
    type: System.Int32
    description: 1 if a selection set is created, 0 if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - selections
  - ui
related:
  - ISelectionSet.RemoveSelectionSet
  - ISelectionSetFolder
  - ISelectionSetItem
keywords:
  - selection
  - iselectionset
  - saveselection
  - imodeldocextension
  - model
  - doc
  - extension
  - save
  - status
  - int32
  - object
  - create
  - delete
  - vb
  - net
  - vba
---

# IModelDocExtension.SaveSelection

Creates a new selection set containing the selected entities.

## Signature

```csharp
System.Object SaveSelection( 
   out System.Int32
Status
)
```
## Parameters

- `Status` (System.Int32): 1 if a selection set is created, 0 if not

## Return Value

Selection set

## Examples

- Create and Delete Selection Sets (C#) (Create_and_Delete_Selection_Sets_Example_CSharp.htm)
- Create and Delete Selection Sets (VB.NET) (Create_and_Delete_Selection_Sets_Example_VBNET.htm)
- Create and Delete Selection Sets (VBA) (Create_and_Delete_Selection_Sets_Example_VB.htm)

## See Also

- `ISelectionSet.RemoveSelectionSet`
- `ISelectionSetFolder`
- `ISelectionSetItem`