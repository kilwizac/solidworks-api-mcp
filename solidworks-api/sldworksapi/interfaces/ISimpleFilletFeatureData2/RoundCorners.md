---
type: property
interface: ISimpleFilletFeatureData2
member: RoundCorners
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - fillets
  - round
  - corners
  - roundcorners
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - boolean
readonly: null
---

# ISimpleFilletFeatureData2.RoundCorners

Gets or sets whether to round the corners of this simple fillet feature.

## Signature

```csharp
System.Boolean RoundCorners {get; set;}
```
## Parameters

None.

## Return Value

True if simple fillet feature has round corners, false if not

## Remarks

This property is valid only if
ISimpleFilletFeatureData2::CurvatureContinuous
is false, and at least two adjacent edges to fillet are selected.

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)