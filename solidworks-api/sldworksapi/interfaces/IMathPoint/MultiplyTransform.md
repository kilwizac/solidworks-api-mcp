---
type: method
interface: IMathPoint
member: MultiplyTransform
returns: System.Object
parameters:
  -
    name: TransformObjIn
    type: System.Object
    description: Math transform by which to multiply this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.IMultiplyTransform
keywords:
  - multiplytransform
  - imathpoint
  - math
  - point
  - multiply
  - transform
  - obj
  - object
  - dimension
  - edge
  - drawing
  - vba
  - evaluate
  - curves
  - defined
  - sketch
  - space
  - names
  - segments
  - coordinates
  - model
  - zoom
  - region
  - points
  - repeating
  - elements
  - table
  - driven
  - pattern
  - vb
  - net
---

# IMathPoint.MultiplyTransform

Multiplies a math point with a math transform; the point is rotated, scaled, and then translated.

## Signature

```csharp
System.Object MultiplyTransform( 
   System.Object
TransformObjIn
)
```
## Parameters

- `TransformObjIn` (System.Object): Math transform by which to multiply this math point

## Return Value

Newly created translated math point or null if the operation fails

## Examples

- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Evaluate Curves Defined in Sketch Space (VBA) (Evaluate_Curves_Defined_in_Sketch_Space_Example_VB.htm)
- Get Names of Sketch Segments (VBA) (Get_Names_of_Sketch_Segments_Example_VB.htm)
- Transform Coordinates from Sketch to Model Space (VBA) (Transform_Coordinates_from_Sketch_to_Model_Space_Example_VB.htm)
- Transform Sketch to Model (VBA) (Transform_Sketch_to_Model_Example_VB.htm)
- Zoom to Region (VBA) (Zoom_to_Region_Example_VB.htm)
- Get Points of Repeating Elements in Table-driven Pattern (C#) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_CSharp.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VB.NET) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VBNET.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VBA) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VB.htm)

## See Also

- `IMathPoint.IMultiplyTransform`