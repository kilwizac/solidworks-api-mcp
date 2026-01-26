---
type: method
interface: IRuledSurfaceFeatureData
member: SetDirectionReference
returns: void
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
  - IRuledSurfaceFeatureData.GetDirectionReference
keywords:
  - setdirectionreference
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - direction
  - reference
  - ref1
  - object
  - ref2
  - void
---

# IRuledSurfaceFeatureData.SetDirectionReference

Sets the direction of the extrusion for this ruled-surface feature.

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

- `Ref1` (System.Object): First reference entity (see Remarks )
- `Ref2` (System.Object): Second reference entity (see Remarks )

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
Valid reference entities for type1 and type2:
line segment
edge
axis
vertex
face
plane
sketch point
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IRuledSurfaceFeatureData.GetDirectionReference`