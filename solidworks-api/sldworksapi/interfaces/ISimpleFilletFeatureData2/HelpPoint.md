---
type: property
interface: ISimpleFilletFeatureData2
member: HelpPoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.CurvatureContinuous
  - ISimpleFilletFeatureData2.GetHoldLineCount
  - ISimpleFilletFeatureData2.HoldLines
  - ISimpleFilletFeatureData2.IGetHoldLines
  - ISimpleFilletFeatureData2.ISetHoldLines
keywords:
  - face
  - blend
  - fillet
  - fillets
  - helppoint
  - isimplefilletfeaturedata2
  - simple
  - feature
  - data2
  - help
  - point
  - object
readonly: null
---

# ISimpleFilletFeatureData2.HelpPoint

Gets or sets whether to resolve an ambiguous selection by using a help point when creating a face-face chamfer or a face fillet feature.

## Signature

```csharp
System.Object HelpPoint {get; set;}
```
## Parameters

None.

## Return Value

Vertex

## Remarks

When creating a fillet or chamfer between two faces, it may not be clear where the blend should occur. Use this property to define the side of the fillet or chamfer that you want to blend. The fillet or chamfer is created at the location closest to the help point.
See
Accessing Selections that Define Features
for additional details.
NOTE:
This property corresponds to the
Help point
selection box that is available when creating face fillets or face-face chamfers. See the SOLIDWORKS Design user-interface help for more information about help points.

## See Also

- `ISimpleFilletFeatureData2.CurvatureContinuous`
- `ISimpleFilletFeatureData2.GetHoldLineCount`
- `ISimpleFilletFeatureData2.HoldLines`
- `ISimpleFilletFeatureData2.IGetHoldLines`
- `ISimpleFilletFeatureData2.ISetHoldLines`