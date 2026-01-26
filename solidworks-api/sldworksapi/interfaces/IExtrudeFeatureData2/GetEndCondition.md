---
type: method
interface: IExtrudeFeatureData2
member: GetEndCondition
returns: System.Int32
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetEndConditionReference
  - IExtrudeFeatureData2.SetEndCondition
  - IExtrudeFeatureData2.SetEndConditionReference
keywords:
  - end
  - conditions
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - getendcondition
  - feature
  - data2
  - condition
  - forward
  - boolean
  - int32
---

# IExtrudeFeatureData2.GetEndCondition

Gets the type of end condition of this extrusion feature for forward or reverse direction.

## Signature

```csharp
System.Int32 GetEndCondition( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse

## Return Value

End condition type as defined in swEndConditions_e

## See Also

- `IExtrudeFeatureData2.GetEndConditionReference`
- `IExtrudeFeatureData2.SetEndCondition`
- `IExtrudeFeatureData2.SetEndConditionReference`