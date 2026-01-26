---
type: property
interface: IHingeMateFeatureData
member: AngleSelection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
  - selections
related: []
keywords:
  - angleselection
  - ihingematefeaturedata
  - hinge
  - mate
  - feature
  - data
  - angle
  - selection
  - boolean
readonly: null
---

# IHingeMateFeatureData.AngleSelection

Gets or sets whether to specify angle limits.

## Signature

```csharp
System.Boolean AngleSelection {get; set;}
```
## Parameters

None.

## Return Value

True to specify angle limits, false to not

## Remarks

After setting this property to true, also set:
IHingeMateFeatureData::Angle
IHingeMateFeatureData::MaxVal
IHingeMateFeatureData::MinVal

## Examples

- IHingeMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHingeMateFeatureData)