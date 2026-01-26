---
type: method
interface: IExtrudeFeatureData2
member: GetEndConditionReference
returns: System.Object
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True for forward direction, false for reverse
  -
    name: ReferenceType
    type: System.Int32
    description: Reference type as defined by swSelectionReferenceTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.GetEndCondition
  - IExtrudeFeatureData2.SetEndCondition
  - IExtrudeFeatureData2.SetEndConditionReference
keywords:
  - end
  - conditions
  - extrude
  - see
  - also
  - iextrudefeaturedata2
  - getendconditionreference
  - feature
  - data2
  - condition
  - reference
  - forward
  - boolean
  - type
  - int32
  - object
---

# IExtrudeFeatureData2.GetEndConditionReference

Gets the reference entity defining the end condition in the forward or reverse direction.

## Signature

```csharp
System.Object GetEndConditionReference( 
   System.Boolean
Forward
,
   out System.Int32
ReferenceType
)
```
## Parameters

- `Forward` (System.Boolean): True for forward direction, false for reverse
- `ReferenceType` (System.Int32): Reference type as defined by swSelectionReferenceTypes_e

## Return Value

Pointer to the reference entity

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IExtrudeFeatureData2.GetEndCondition`
- `IExtrudeFeatureData2.SetEndCondition`
- `IExtrudeFeatureData2.SetEndConditionReference`