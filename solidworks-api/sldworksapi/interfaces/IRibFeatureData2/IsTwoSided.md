---
type: property
interface: IRibFeatureData2
member: IsTwoSided
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - istwosided
  - iribfeaturedata2
  - rib
  - feature
  - data2
  - two
  - sided
  - boolean
readonly: null
---

# IRibFeatureData2.IsTwoSided

Gets or sets whether the rib is created on two sides of the midplane or in a single direction (see IRibFeatureData2::ReverseThicknessDir).

## Signature

```csharp
System.Boolean IsTwoSided {get; set;}
```
## Parameters

None.

## Return Value

True if the rib is extruded either side of the midplane, false if it is single-sided

## Remarks

Changing the value of this property does not affect geometry until
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
is called.

## Examples

- IRibFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRibFeatureData2)