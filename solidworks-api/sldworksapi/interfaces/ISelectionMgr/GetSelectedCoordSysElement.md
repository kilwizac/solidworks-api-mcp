---
type: method
interface: ISelectionMgr
member: GetSelectedCoordSysElement
returns: System.Object
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
  - getselectedcoordsyselement
  - iselectionmgr
  - selection
  - mgr
  - selected
  - coord
  - sys
  - element
  - index
  - int32
  - mark
  - object
  - icoordinatesystemelement
---

# ISelectionMgr.GetSelectedCoordSysElement

Gets the selected coordinate system element.

## Signature

```csharp
System.Object GetSelectedCoordSysElement( 
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

ICoordinateSystemElement

## Remarks

After calling this method, call
ISelectionMgr::IsCoordSysElementSelected
.

## Examples

- ICoordinateSystemElement (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICoordinateSystemElement)