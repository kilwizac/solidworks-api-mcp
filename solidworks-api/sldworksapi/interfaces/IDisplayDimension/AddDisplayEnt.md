---
type: method
interface: IDisplayDimension
member: AddDisplayEnt
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of graphical entity (see Remarks )
  -
    name: Data
    type: System.Object
    description: Geometric data describing the entity (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.IAddDisplayText
keywords:
  - adddisplayent
  - idisplaydimension
  - display
  - dimension
  - add
  - ent
  - type
  - int32
  - data
  - object
  - boolean
  - replace
  - text
  - vba
---

# IDisplayDimension.AddDisplayEnt

Overrides the display graphics of objects.

## Signature

```csharp
System.Boolean AddDisplayEnt( 
   System.Int32
Type
,
   System.Object
Data
)
```
## Parameters

- `Type` (System.Int32): Type of graphical entity (see Remarks )
- `Data` (System.Object): Geometric data describing the entity (see Remarks )

## Return Value

True if successful, false if not

## Remarks

The new graphics displayed by this method are temporary. When the user changes the dimension, this display dimension reverts back to the SOLIDWORKS standard.
The type controls which geometry is added and what information is placed in the data array. All colors and line styles are taken from DisplayDimension.
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

## Examples

- Replace Dimension with Text (VBA) (Replace_Dimension_with_Text_Example_VB.htm)

## See Also

- `IDisplayDimension.IAddDisplayText`