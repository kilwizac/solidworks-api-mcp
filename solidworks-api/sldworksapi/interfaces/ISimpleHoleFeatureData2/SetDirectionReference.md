---
type: method
interface: ISimpleHoleFeatureData2
member: SetDirectionReference
returns: System.Boolean
parameters:
  -
    name: Ref1
    type: System.Object
    description: First reference entity (see Remarks )
  -
    name: Ref2
    type: System.Object
    description: Second reference entity (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.GetDirectionReference
  - ISimpleHoleFeatureData2.ReverseDirection
keywords:
  - setdirectionreference
  - isimpleholefeaturedata2
  - simple
  - hole
  - feature
  - data2
  - direction
  - reference
  - ref1
  - object
  - ref2
  - boolean
---

# ISimpleHoleFeatureData2.SetDirectionReference

Sets the direction of the cut extrude for this simple hole feature.

## Signature

```csharp
System.Boolean SetDirectionReference( 
   System.Object
Ref1
,
   System.Object
Ref2
)
```
## Parameters

- `Ref1` (System.Object): First reference entity (see Remarks )
- `Ref2` (System.Object): Second reference entity (see Remarks )

## Return Value

True if the direction for the cut is set, false if not

## Remarks

Sometimes one reference entity defines a direction; for example, an edge or axis. Other times, two reference entities define a direction; for example, two vertices or two sketch points.
Valid reference entities for Ref1 and Ref2:
line segment
edge
axis
vertex
face
plane
sketch point
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleHoleFeatureData2.GetDirectionReference`
- `ISimpleHoleFeatureData2.ReverseDirection`