---
type: property
interface: ILinearCouplerMateFeatureData
member: ReferenceComponent2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - referencecomponent2
  - ilinearcouplermatefeaturedata
  - linear
  - coupler
  - mate
  - feature
  - data
  - reference
  - component2
  - object
readonly: null
---

# ILinearCouplerMateFeatureData.ReferenceComponent2

Gets or sets the reference component of the second mate entity of this linear/linear coupler mate.

## Signature

```csharp
System.Object ReferenceComponent2 {get; set;}
```
## Parameters

None.

## Return Value

Reference component 2

## Remarks

Use this property to set up the motion of the second mated component with respect to a reference component. If you do not set this property, motion is with respect to the assembly origin.