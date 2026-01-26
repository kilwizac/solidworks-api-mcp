---
type: method
interface: IMathUtility
member: CreatePoint
returns: System.Object
parameters:
  -
    name: ArrayDataIn
    type: System.Object
    description: Array of doubles representing the coordinates (x,y,z) of the point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathUtility.ICreatePoint
keywords:
  - points
  - math
  - point
  - see
  - imathpoint
  - createpoint
  - imathutility
  - utility
  - create
  - array
  - data
  - object
  - dimension
  - edge
  - drawing
  - vba
  - names
  - sketch
  - segments
  - transform
  - model
  - zoom
  - region
  - callout
  - independent
  - selection
  - vb
  - net
---

# IMathUtility.CreatePoint

Creates a new math point.

## Signature

```csharp
System.Object CreatePoint( 
   System.Object
ArrayDataIn
)
```
## Parameters

- `ArrayDataIn` (System.Object): Array of doubles representing the coordinates (x,y,z) of the point

## Return Value

Newly created IMathPoint object or null if the operation fails

## Examples

- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Get Names of Sketch Segments (VBA) (Get_Names_of_Sketch_Segments_Example_VB.htm)
- Transform Sketch to Model (VBA) (Transform_Sketch_to_Model_Example_VB.htm)
- Zoom to Region (VBA) (Zoom_to_Region_Example_VB.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)

## See Also

- `IMathUtility.ICreatePoint`