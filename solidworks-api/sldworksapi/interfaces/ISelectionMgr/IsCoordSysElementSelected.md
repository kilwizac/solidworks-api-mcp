---
type: method
interface: ISelectionMgr
member: IsCoordSysElementSelected
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position within the current list of selected items, where Index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
  -
    name: Mark
    type: System.Int32
    description: -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - iscoordsyselementselected
  - iselectionmgr
  - selection
  - mgr
  - coord
  - sys
  - element
  - selected
  - index
  - int32
  - mark
  - boolean
  - icoordinatesystemelement
---

# ISelectionMgr.IsCoordSysElementSelected

Gets whether the selection is a coordinate system element.

## Signature

```csharp
System.Boolean IsCoordSysElementSelected( 
   System.Int32
Index
,
   System.Int32
Mark
)
```
## Parameters

- `Index` (System.Int32): Index position within the current list of selected items, where Index ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

True if coordinate system element selected, false if not

## Remarks

Call this method after calling
ISelectionMgr::GetSelectedCoordSysElement
to confirm that a coordinate system element is retrieved.

## Examples

- ICoordinateSystemElement (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICoordinateSystemElement)