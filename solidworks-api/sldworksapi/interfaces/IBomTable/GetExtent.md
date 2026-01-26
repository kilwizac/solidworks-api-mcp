---
type: method
interface: IBomTable
member: GetExtent
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBomTable.IGetExtent
keywords:
  - getextent
  - ibomtable
  - bom
  - table
  - extent
  - object
---

# IBomTable.GetExtent

Gets the lower-left and upper-right extents of the BOM on the drawing sheet.

## Signature

```csharp
System.Object GetExtent()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

SOLIDWORKS returns the values in meters with respect to drawing sheet space.
The return value is the following array of doubles:
[
lowerLeftPt[3], upperRightPt[3]
]
where:
lowerLeftPt[3] is an array of 3 doubles describing the X,Y,Z location for the lower-left corner of the BOM
upperRightPt[3] is an array of 3 doubles describing the X,Y,Z location for the upper-right corner of the BOM
Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.IGetExtent`