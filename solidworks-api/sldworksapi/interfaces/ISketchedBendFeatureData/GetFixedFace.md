---
type: method
interface: ISketchedBendFeatureData
member: GetFixedFace
returns: System.Object
parameters:
  -
    name: X
    type: System.Double
    description: X location
  -
    name: Y
    type: System.Double
    description: Y location
  -
    name: Z
    type: System.Double
    description: Z location
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - sketches
related:
  - ISketchedBendFeatureData.SetFixedFace
keywords:
  - bends
  - fixed
  - face
  - getfixedface
  - isketchedbendfeaturedata
  - sketched
  - bend
  - feature
  - data
  - double
  - object
  - change
  - radius
  - vba
---

# ISketchedBendFeatureData.GetFixedFace

Gets the fixed face from this sketched bend.

## Signature

```csharp
System.Object GetFixedFace( 
   out System.Double
X
,
   out System.Double
Y
,
   out System.Double
Z
)
```
## Parameters

- `X` (System.Double): X location
- `Y` (System.Double): Y location
- `Z` (System.Double): Z location

## Return Value

Fixed IFace2 that does not move as a result of the bend

## Remarks

The location is a point on the fixed face, but in the space of the sketch used to define the sketched-bend feature. Thus, the z location is always 0.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Change Bend Radius of Sketched Bend (VBA) (Change_Bend_Radius_of_Sketched_Bend_Example_VB.htm)

## See Also

- `ISketchedBendFeatureData.SetFixedFace`