---
type: property
interface: IWizardHoleFeatureData2
member: ThruHoleDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.ThruHoleDiameter
  - IWizardHoleFeatureData2.ThruTapDrillDepth
  - IWizardHoleFeatureData2.ThruTapDrillDiameter
keywords:
  - depth
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - through
  - thruholedepth
  - wizard
  - hole
  - feature
  - data2
  - thru
  - double
readonly: null
---

# IWizardHoleFeatureData2.ThruHoleDepth

Gets or sets the Hole Wizard feature through hole depth.

## Signature

```csharp
System.Double ThruHoleDepth {get; set;}
```
## Parameters

None.

## Return Value

Through hole depth

## Remarks

For through holes, the depths depend on the geometry. Do not rely on the Set version of this property to set depths.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWizardHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWizardHoleFeatureData2)

## See Also

- `IWizardHoleFeatureData2.ThruHoleDiameter`
- `IWizardHoleFeatureData2.ThruTapDrillDepth`
- `IWizardHoleFeatureData2.ThruTapDrillDiameter`