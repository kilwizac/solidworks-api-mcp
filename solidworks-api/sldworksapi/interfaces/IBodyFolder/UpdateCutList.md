---
type: method
interface: IBodyFolder
member: UpdateCutList
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBodyFolder.GetCutListType
  - IBodyFolder.SetAutomaticCutList
keywords:
  - cut
  - lists
  - updatecutlist
  - ibodyfolder
  - body
  - folder
  - update
  - list
  - boolean
---

# IBodyFolder.UpdateCutList

Updates an automatically generated cut list.

## Signature

```csharp
System.Boolean UpdateCutList()
```
## Parameters

None.

## Return Value

True if the automatically generated cut list is successfully updated, false if not or because the document does not contain an automatically generated cut list

## Remarks

You must specify when to update an automatically generated cut list in a part document. However, an automatically generated cut list in a drawing is automatically updated when you open a drawing that references the cut list.
To find out if the part contains a weldment feature, use
IPartDoc::IsWeldment
. If it does, then use
IBodyFolder::GetAutomaticCutList
to find out if automatic generation of a cut list is enabled.

## See Also

- `IBodyFolder.GetCutListType`
- `IBodyFolder.SetAutomaticCutList`