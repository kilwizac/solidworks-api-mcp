---
type: method
interface: ISketchedBendFeatureData
member: SetFixedFace
returns: void
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
  -
    name: EdgeArray
    type: System.Object
    description: Array of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - sketches
related:
  - ISketchedBendFeatureData.GetFixedFace
keywords:
  - bends
  - fixed
  - face
  - setfixedface
  - isketchedbendfeaturedata
  - sketched
  - bend
  - feature
  - data
  - double
  - edge
  - array
  - object
  - void
---

# ISketchedBendFeatureData.SetFixedFace

Sets the fixed face of this sketched bend.

## Signature

```csharp
void SetFixedFace( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Object
EdgeArray
)
```
## Parameters

- `X` (System.Double): X location
- `Y` (System.Double): Y location
- `Z` (System.Double): Z location
- `EdgeArray` (System.Object): Array of edges

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISketchedBendFeatureData.GetFixedFace`