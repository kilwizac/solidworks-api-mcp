---
type: method
interface: IBodyFolder
member: SetAutomaticCutList
returns: System.Boolean
parameters:
  -
    name: CutList
    type: System.Boolean
    description: True to automatically generate a cut list, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBodyFolder.GetCutListType
  - IBodyFolder.UpdateCutList
keywords:
  - cut
  - lists
  - setautomaticcutlist
  - ibodyfolder
  - body
  - folder
  - automatic
  - list
  - boolean
---

# IBodyFolder.SetAutomaticCutList

Sets whether to automatically generate a cut list when the first weldment feature is inserted in a part.

## Signature

```csharp
System.Boolean SetAutomaticCutList( 
   System.Boolean
CutList
)
```
## Parameters

- `CutList` (System.Boolean): True to automatically generate a cut list, false to not

## Return Value

True if enabled, false if not (see Remarks )

## Remarks

Use
IBodyFolder::GetAutomaticCutList
to find out if automatic generation of a cut list is enabled.
This method returns false if:
the part does not contain a weldment feature. Use
IPartDoc::IsWeldment
to find out
if the part contains this feature.
a cut list folder already exists in the part. You must delete the cut list before
you can enable automatic generation.

## Examples

- IBodyFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBodyFolder)

## See Also

- `IBodyFolder.GetCutListType`
- `IBodyFolder.UpdateCutList`