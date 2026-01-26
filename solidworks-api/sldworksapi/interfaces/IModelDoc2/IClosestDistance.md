---
type: method
interface: IModelDoc2
member: IClosestDistance
returns: System.Double
parameters:
  -
    name: Object1
    type: System.Object
    description: Pointer to first object
  -
    name: Object2
    type: System.Object
    description: Pointer to second object
  -
    name: Point1
    type: System.Double
    description: Array of x, y, z coordinates for the first point
  -
    name: Point2
    type: System.Double
    description: Array of x, y, z coordinates for the second point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - distance
  - measure
  - iclosestdistance
  - imodeldoc2
  - model
  - doc2
  - closest
  - object1
  - object
  - object2
  - point1
  - double
  - point2
---

# IModelDoc2.IClosestDistance

Calculates the distance and closest points between two geometric objects.

## Signature

```csharp
System.Double IClosestDistance( 
   System.Object
Object1
,
   System.Object
Object2
,
   out System.Double
Point1
,
   out System.Double
Point2
)
```
## Parameters

- `Object1` (System.Object): Pointer to first object
- `Object2` (System.Object): Pointer to second object
- `Point1` (System.Double): Array of x, y, z coordinates for the first point
- `Point2` (System.Double): Array of x, y, z coordinates for the second point

## Return Value

Minimum distance; -1.0 if no solution

## Remarks

Supported input object types include:
swSelFACES (face)
swSelEDGES (edge)
swSelVERTICES (vertex)
swSelSKETCHSEGS (sketch segments)
swSelDATUMPLANES (reference plane)
swSelEXTSKETCHPOINTS (point on origin)
swSelDATUMAXES
(reference axis)
swSelCOMPONENTS (component)
swSelREFCURVES (reference curves)
This method includes these restrictions for drawings:
Cannot measure between a sketch entity and a model entity
Measured sketch entities have to belong to the same sheet
Model entity measurements are based on the model origin
Measured object cannot be a temporary geometric entity