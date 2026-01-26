---
type: method
interface: ISurfExtrudeFeatureData
member: SetEndCondition
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True sets the end condition in the forward direction, false sets it in the reverse direction
  -
    name: EndCondition
    type: System.Int32
    description: End condition as defined in swEndConditions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfExtrudeFeatureData.GetEndCondition
keywords:
  - setendcondition
  - isurfextrudefeaturedata
  - surf
  - extrude
  - feature
  - data
  - end
  - condition
  - forward
  - boolean
  - int32
  - void
---

# ISurfExtrudeFeatureData.SetEndCondition

Sets the end condition of this extruded surface in the forward or reverse direction.

## Signature

```csharp
void SetEndCondition( 
   System.Boolean
Forward
,
   System.Int32
EndCondition
)
```
## Parameters

- `Forward` (System.Boolean): True sets the end condition in the forward direction, false sets it in the reverse direction
- `EndCondition` (System.Int32): End condition as defined in swEndConditions_e

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfExtrudeFeatureData.GetEndCondition`