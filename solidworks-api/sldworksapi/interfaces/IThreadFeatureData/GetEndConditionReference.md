---
type: method
interface: IThreadFeatureData
member: GetEndConditionReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.SetEndConditionReference
keywords:
  - getendconditionreference
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - end
  - condition
  - reference
  - object
---

# IThreadFeatureData.GetEndConditionReference

Gets the Up To Selection end condition reference of this thread feature.

## Signature

```csharp
System.Object GetEndConditionReference()
```
## Parameters

None.

## Return Value

Vertex , edge , plane , or planar surface

## Remarks

This method is valid only if
IThreadFeatureData::EndCondition
is set to
swEndConditions_e
.swEndCondUpToSelection
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IThreadFeatureData.SetEndConditionReference`