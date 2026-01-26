---
type: property
interface: ILinearCouplerMateFeatureData
member: ReferenceComponent1
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
  - referencecomponent1
  - ilinearcouplermatefeaturedata
  - linear
  - coupler
  - mate
  - feature
  - data
  - reference
  - component1
  - object
readonly: null
---

# ILinearCouplerMateFeatureData.ReferenceComponent1

Gets or sets the reference component of the first mate entity of this linear coupler mate.

## Signature

```csharp
System.Object ReferenceComponent1 {get; set;}
```
## Parameters

None.

## Return Value

Reference component 1

## Remarks

Use this property to set up the motion of the first mated component with respect to a reference component. If you do not set this property, motion is with respect to the assembly origin.