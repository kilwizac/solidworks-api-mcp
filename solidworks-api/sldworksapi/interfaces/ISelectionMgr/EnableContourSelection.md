---
type: property
interface: ISelectionMgr
member: EnableContourSelection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectionMgr.EnableSelection
keywords:
  - selection
  - see
  - also
  - iselectionmgr
  - contours
  - enablecontourselection
  - mgr
  - enable
  - contour
  - boolean
  - vba
  - vb
  - net
readonly: null
---

# ISelectionMgr.EnableContourSelection

Enables and disables contour selection.

## Signature

```csharp
System.Boolean EnableContourSelection {get; set;}
```
## Parameters

None.

## Return Value

True to enable contour selection, false to disable it

## Remarks

This property enables you to select regions that are defined by single, multiple, open, or closed sketch boundaries. See the SOLIDWORKS Help for more information about selecting contours.

## Examples

- Enable Contour Selection (VBA) (Enable_Contour_Selection_Example_VB.htm)
- Enable Contour Selection (VB.NET) (Enable_Contour_Selection_Example_VBNET.htm)
- Enable Contour Selection (C#) (Enable_Contour_Selection_Example_CSharp.htm)

## See Also

- `ISelectionMgr.EnableSelection`