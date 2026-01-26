---
type: method
interface: IBodyFolder
member: GetAutomaticCutList
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBodyFolder.GetCutListSortOptions
  - IBodyFolder.GetCutListType
  - IBodyFolder.UpdateCutList
keywords:
  - cut
  - lists
  - getautomaticcutlist
  - ibodyfolder
  - body
  - folder
  - automatic
  - list
  - boolean
---

# IBodyFolder.GetAutomaticCutList

Gets whether to automatically generate a cut list when the first weldment feature is inserted in a part.

## Signature

```csharp
System.Boolean GetAutomaticCutList()
```
## Parameters

None.

## Return Value

True to automatically generate a cut list, false to not

## Remarks

By default, a cut list is automatically generated in new weldment parts. Use
IBodyFolder::SetAutomaticCutList
to change the default. Use
IPartDoc::IsWeldment
to get whether the part contains a weldment feature.

## Examples

- IBodyFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBodyFolder)

## See Also

- `IBodyFolder.GetCutListSortOptions`
- `IBodyFolder.GetCutListType`
- `IBodyFolder.UpdateCutList`