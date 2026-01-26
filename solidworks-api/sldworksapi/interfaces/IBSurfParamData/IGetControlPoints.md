---
type: method
interface: IBSurfParamData
member: IGetControlPoints
returns: System.Double
parameters:
  -
    name: Row
    type: System.Int32
    description: 1 <= index of row <= ControlPointRowCount
  -
    name: Column
    type: System.Int32
    description: 1 <= index of column <= ControlPointColumnCount
  -
    name: Count
    type: System.Int32
    description: ControlPointDimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IBSurfParamData.GetControlPoints
keywords:
  - igetcontrolpoints
  - ibsurfparamdata
  - ib
  - surf
  - param
  - data
  - control
  - points
  - row
  - int32
  - column
  - count
  - double
---

# IBSurfParamData.IGetControlPoints

Gets the coordinates of a control point at a specific row and column of the control point matrix.

## Signature

```csharp
System.Double IGetControlPoints( 
   System.Int32
Row
,
   System.Int32
Column
,
   System.Int32
Count
)
```
## Parameters

- `Row` (System.Int32): 1 <= index of row <= ControlPointRowCount
- `Column` (System.Int32): 1 <= index of column <= ControlPointColumnCount
- `Count` (System.Int32): ControlPointDimension

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Control points are stored in (ControlPointColumnCount*ControlPointRowCount) vectors of dimension
ControlPointDimension
. The U direction of surface is in the row direction. The V direction of surface is in the column direction.
For non-rational surfaces ControlPointDimension = 3, and control point coordinates are stored as [x0,y0,z0,x1,y1,z1,.........].
For rational surfaces ControlPointDimension = 4, and control point coordinates and weights are stored as [x0,y0,z0,w0,x1,y1,z1,w1,........].
For example, 6 control points are stored in 6 vectors of dimension 3 in a 2X3 matrix as follows:
Row1, Column1
Row1, Column2
# Coordinates
x0, y0, z0
x1, y1, z1
= 6
Row2, Column1
Row2, Column2
x2, y2, z2
x3, y3, z3
= 6
Row3, Column1
Row3, Column2
x4, y4, z4
x5, y5, z5
= 6
Total
= 18

## See Also

- `IBSurfParamData.GetControlPoints`