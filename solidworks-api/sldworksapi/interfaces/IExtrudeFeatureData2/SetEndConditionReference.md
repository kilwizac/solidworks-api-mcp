---
type: method
interface: IExtrudeFeatureData2
member: SetEndConditionReference
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: PDisp
    type: System.Object
    description: Pointer to the reference entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetEndCondition
  - IExtrudeFeatureData2.GetEndConditionReference
  - IExtrudeFeatureData2.SetEndCondition
keywords:
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - end
  - conditions
  - setendconditionreference
  - feature
  - data2
  - condition
  - reference
  - forward
  - boolean
  - disp
  - object
  - void
---

# IExtrudeFeatureData2.SetEndConditionReference

Sets the reference entity that defines the end condition in a forward or reverse direction.

## Signature

```csharp
void SetEndConditionReference( 
   System.Boolean
Forward
,
   System.Object
PDisp
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `PDisp` (System.Object): Pointer to the reference entity

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IExtrudeFeatureData2.GetEndCondition`
- `IExtrudeFeatureData2.GetEndConditionReference`
- `IExtrudeFeatureData2.SetEndCondition`