---
type: method
interface: IModelDoc2
member: ClosestDistance
returns: System.Double
parameters:
  -
    name: Object1
    type: System.Object
    description: Pointer to first object (see Remarks )
  -
    name: Object2
    type: System.Object
    description: Pointer to second object (see Remarks )
  -
    name: Point1
    type: System.Object
    description: Array of x, y, z coordinates for the point on Object1 that is nearest to Point2
  -
    name: Point2
    type: System.Object
    description: Array of x, y, z coordinates for the point on Object2 that is nearest to Point1
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
  - closestdistance
  - imodeldoc2
  - model
  - doc2
  - closest
  - object1
  - object
  - object2
  - point1
  - point2
  - double
  - calculate
  - between
  - faces
  - vba
  - components
---

# IModelDoc2.ClosestDistance

Calculates the minimum distance between the specified geometric objects.

## Signature

```csharp
System.Double ClosestDistance( 
   System.Object
Object1
,
   System.Object
Object2
,
   out System.Object
Point1
,
   out System.Object
Point2
)
```
## Parameters

- `Object1` (System.Object): Pointer to first object (see Remarks )
- `Object2` (System.Object): Pointer to second object (see Remarks )
- `Point1` (System.Object): Array of x, y, z coordinates for the point on Object1 that is nearest to Point2
- `Point2` (System.Object): Array of x, y, z coordinates for the point on Object2 that is nearest to Point1

## Return Value

Distance in meters between Point1 and Point2; -1.0 if no solution

## Remarks

Supported types of Object1 and Object2 include
swSelectType_e
:
swSelFACES (face)
swSelEDGES (edge)
swSelVERTICES (vertex)
swSelSKETCHSEGS (sketch segment)
swSelDATUMPLANES (reference plane)
swSelEXTSKETCHPOINTS (point on origin)
swSelDATUMAXES (reference axis)
swSelCOMPONENTS (component; multi-body part supported, but not multi-part sub-assembly)
swSelREFCURVES (reference curve)
swSelSOLIDBODIES (solid bodies only; surface bodies not supported)
This method has these restrictions for drawings:
Cannot measure between a sketch entity and a model entity
Measured sketch entities have to belong to the same sheet
Model entity measurements are based on the model origin
Measured object cannot be a temporary geometric entity

## Examples

- Calculate Closest Distance Between Faces (VBA) (Calculate_Closest_Distance_Between_Faces_Example_VB.htm)
- Calculate Closest Distance Between Model Components (VBA) (Calculate_Closest_Distance_Between_Model_Components_Example_VB.htm)