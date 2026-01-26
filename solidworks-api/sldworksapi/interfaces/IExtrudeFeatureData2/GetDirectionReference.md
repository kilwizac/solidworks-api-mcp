---
type: method
interface: IExtrudeFeatureData2
member: GetDirectionReference
returns: System.Int32
parameters:
  -
    name: Ref1
    type: System.Object
    description: First reference entity
  -
    name: Type1
    type: System.Int32
    description: Type of reference entity as defined by swSelectType_e (see Remarks )
  -
    name: Ref2
    type: System.Object
    description: Second reference entity
  -
    name: Type2
    type: System.Int32
    description: Type of reference entity as defined by swSelectType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.SetDirectionReference
keywords:
  - getdirectionreference
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - direction
  - reference
  - ref1
  - object
  - type1
  - int32
  - ref2
  - type2
---

# IExtrudeFeatureData2.GetDirectionReference

Gets the direction of the extrusion.

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

- `Ref1` (System.Object): First reference entity
- `Type1` (System.Int32): Type of reference entity as defined by swSelectType_e (see Remarks )
- `Ref2` (System.Object): Second reference entity
- `Type2` (System.Int32): Type of reference entity as defined by swSelectType_e

## Return Value

Number of reference entities used to define the direction of the extrusion

## Remarks

Sometimes one reference entity defines a direction; for example, an edge or axis. Other times, two reference entities define a direction; for example, two vertices or two sketch points.
If...
Then...
One reference entity defined the direction
Ref2 is NULL and the return value is 1
Two reference entities defined the direction
Both Ref1 and Ref2 are non-NULL and the return value is 2
Valid reference entities for Type1 and Type2:
line segment
edge
axis
vertex
face
plane
sketch point

## See Also

- `IExtrudeFeatureData2.SetDirectionReference`