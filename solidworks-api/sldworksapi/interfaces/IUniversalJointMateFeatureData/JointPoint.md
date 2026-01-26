---
type: property
interface: IUniversalJointMateFeatureData
member: JointPoint
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
  - jointpoint
  - iuniversaljointmatefeaturedata
  - universal
  - joint
  - mate
  - feature
  - data
  - point
  - object
readonly: null
---

# IUniversalJointMateFeatureData.JointPoint

Gets or sets the joint point of this universal joint mate.

## Signature

```csharp
System.Object JointPoint {get; set;}
```
## Parameters

None.

## Return Value

IVertex or ISketchPoint or IRefPoint

## Remarks

This property is valid only if
IUniversalJointMateFeatureData::DefineJointPoint
is true.