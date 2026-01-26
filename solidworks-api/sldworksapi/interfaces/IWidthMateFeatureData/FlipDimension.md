---
type: property
interface: IWidthMateFeatureData
member: FlipDimension
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - dimensions
  - features
related: []
keywords:
  - flipdimension
  - iwidthmatefeaturedata
  - width
  - mate
  - feature
  - data
  - flip
  - dimension
  - boolean
readonly: null
---

# IWidthMateFeatureData.FlipDimension

Gets or sets whether to move entities to opposite sides of the dimension of this width mate.

## Signature

```csharp
System.Boolean FlipDimension {get; set;}
```
## Parameters

None.

## Return Value

True to flip the dimension, false to not (see Remarks )

## Remarks

This property is valid only if
IWidthMateFeatureData::ConstraintType
is set to
swMateWidthOptions_e
.swMateWidth_Dimension or swMateWidth_Percent.