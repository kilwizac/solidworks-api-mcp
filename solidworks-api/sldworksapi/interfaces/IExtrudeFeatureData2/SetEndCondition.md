---
type: method
interface: IExtrudeFeatureData2
member: SetEndCondition
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: EndCondition
    type: System.Int32
    description: End condition type as defined in swEndConditions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetEndCondition
  - IExtrudeFeatureData2.GetEndConditionReference
  - IExtrudeFeatureData2.SetDepth
  - IExtrudeFeatureData2.SetEndConditionReference
keywords:
  - end
  - conditions
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - setendcondition
  - feature
  - data2
  - condition
  - forward
  - boolean
  - int32
  - void
---

# IExtrudeFeatureData2.SetEndCondition

Sets the end condition type of the extrusion feature for the forward or reverse direction.

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

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `EndCondition` (System.Int32): End condition type as defined in swEndConditions_e

## Return Value

Unknown.

## See Also

- `IExtrudeFeatureData2.GetEndCondition`
- `IExtrudeFeatureData2.GetEndConditionReference`
- `IExtrudeFeatureData2.SetDepth`
- `IExtrudeFeatureData2.SetEndConditionReference`