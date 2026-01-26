---
type: method
interface: IRuledSurfaceFeatureData
member: GetDirectionReference
returns: System.Int32
parameters:
  -
    name: Ref1
    type: System.Object
    description: First reference entity (see Remarks )
  -
    name: Type1
    type: System.Int32
    description: Type of reference entity as defined by swSelectType_e (see Remarks )
  -
    name: Ref2
    type: System.Object
    description: Second reference entity (see Remarks )
  -
    name: Type2
    type: System.Int32
    description: Type of reference entity as defined by swSelectType_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRuledSurfaceFeatureData.SetDirectionReference
keywords:
  - getdirectionreference
  - iruledsurfacefeaturedata
  - ruled
  - surface
  - feature
  - data
  - direction
  - reference
  - ref1
  - object
  - type1
  - int32
  - ref2
  - type2
---

# IRuledSurfaceFeatureData.GetDirectionReference

Gets the direction of this ruled-surface feature.

## Signature

```csharp
System.Int32 GetDirectionReference( 
   out System.Object
Ref1
,
   out System.Int32
Type1
,
   out System.Object
Ref2
,
   out System.Int32
Type2
)
```
## Parameters

- `Ref1` (System.Object): First reference entity (see Remarks )
- `Type1` (System.Int32): Type of reference entity as defined by swSelectType_e (see Remarks )
- `Ref2` (System.Object): Second reference entity (see Remarks )
- `Type2` (System.Int32): Type of reference entity as defined by swSelectType_e (see Remarks )

## Return Value

Number of reference entities used to define the direction of the ruled surface (see Remarks )

## Remarks

This method is only available when
IRuledSurfaceFeatureData::Type
is set to swRuledSurfaceType_TaperedToVector, swRuledSurfaceType_PerpendicularToVector, or swRuledSurfaceType_Sweep.
Sometimes one reference entity defines a direction; for example, an edge or axis. Other times, two reference entities define a direction; for example, two vertices or two sketch points.
If...
Then...
One reference entity defined the direction
Ref2 is NULL and the return value is 1
Two reference entities defined the direction
Both Ref1 and Ref2 are non-NULL and the return value is 2
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

- `IRuledSurfaceFeatureData.SetDirectionReference`