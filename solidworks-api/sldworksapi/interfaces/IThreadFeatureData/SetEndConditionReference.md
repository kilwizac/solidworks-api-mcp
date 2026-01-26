---
type: method
interface: IThreadFeatureData
member: SetEndConditionReference
returns: void
parameters:
  -
    name: Value
    type: System.Object
    description: Vertex , edge , plane , or planar surface (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IThreadFeatureData.GetEndConditionReference
keywords:
  - setendconditionreference
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - end
  - condition
  - reference
  - value
  - object
  - void
---

# IThreadFeatureData.SetEndConditionReference

Sets the Up To Selection end condition reference of this thread feature.

## Signature

```csharp
void SetEndConditionReference( 
   System.Object
Value
)
```
## Parameters

- `Value` (System.Object): Vertex , edge , plane , or planar surface (see Remarks )

## Return Value

Unknown.

## Remarks

This method is valid only if
IThreadFeatureData::EndCondition
is set to
swEndConditions_e
.swEndCondUpToSelection.
Use
IModelDocExtension::SelectByRay
with Mark = 1 to select the end condition reference.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)

## See Also

- `IThreadFeatureData.GetEndConditionReference`