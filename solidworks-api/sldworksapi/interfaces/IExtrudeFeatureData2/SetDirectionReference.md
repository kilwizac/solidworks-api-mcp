---
type: method
interface: IExtrudeFeatureData2
member: SetDirectionReference
returns: void
parameters:
  -
    name: Ref1
    type: System.Object
    description: First reference entity
  -
    name: Ref2
    type: System.Object
    description: Second reference entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetDirectionReference
keywords:
  - setdirectionreference
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - direction
  - reference
  - ref1
  - object
  - ref2
  - void
---

# IExtrudeFeatureData2.SetDirectionReference

Sets the direction of the extrusion.

## Signature

```csharp
void SetDirectionReference( 
   System.Object
Ref1
,
   System.Object
Ref2
)
```
## Parameters

- `Ref1` (System.Object): First reference entity
- `Ref2` (System.Object): Second reference entity

## Return Value

Unknown.

## Remarks

Sometimes one reference entity can sufficiently define a direction; for example, an edge or axis. Other times, two reference entities are required to define a direction; for example, two vertices or two sketch points.
If...
Then...
One reference entity can sufficiently define the direction
Ref2 is NULL
Two reference entities are required to define the direction
Both Ref1 and Ref2 are non-NULL
Valid reference entities for Type1 and Type2:
line segment
edge
axis
vertex
face
plane
sketch point

## See Also

- `IExtrudeFeatureData2.GetDirectionReference`