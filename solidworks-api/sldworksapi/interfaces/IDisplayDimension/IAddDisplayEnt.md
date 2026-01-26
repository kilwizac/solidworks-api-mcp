---
type: method
interface: IDisplayDimension
member: IAddDisplayEnt
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of graphical entity (see Remarks )
  -
    name: Data
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of geometric data describing the entity (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.AddDisplayEnt
keywords:
  - iadddisplayent
  - idisplaydimension
  - display
  - dimension
  - add
  - ent
  - type
  - int32
  - data
  - double
  - boolean
---

# IDisplayDimension.IAddDisplayEnt

Overrides the display graphics of objects for this display dimension.

## Signature

```csharp
System.Boolean IAddDisplayEnt( 
   System.Int32
Type
,
   ref System.Double
Data
)
```
## Parameters

- `Type` (System.Int32): Type of graphical entity (see Remarks )
- `Data` (System.Double): in-process, unmanaged C++: Pointer to an array of geometric data describing the entity (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if successful, false if not

## Remarks

The new graphics displayed by this method are temporary. When the user changes the dimension, this display dimension reverts back to the SOLIDWORKS standard.
The type controls which geometry is added and what information is placed in the data array. All colors and line styles are taken from IDisplayDimension.
type
Description
data
1
Line
6 doubles; (x, y, z) start point and (x, y, z) end point
2
Filled triangle
9 doubles; 3 (x, y, z) points of the triangle to fill
3
Filled 4 sided polygon
12 doubles; 4 (x, y, z) points of the polygon to fill
4
Arc
12 doubles; (x, y, z) center point, (x, y, z) normal vector, (x, y, z) start point and (x, y, z) end point
5
Circle
7 doubles; (x, y, z) center point, (x, y, z) normal vector and radius
6
Filled dot
4 doubles; (x, y, z) center point and radius
The size of the array is the size of the expected returned array.

## See Also

- `IDisplayDimension.AddDisplayEnt`