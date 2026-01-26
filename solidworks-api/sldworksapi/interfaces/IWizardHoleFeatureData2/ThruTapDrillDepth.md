---
type: property
interface: IWizardHoleFeatureData2
member: ThruTapDrillDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.ThruHoleDepth
  - IWizardHoleFeatureData2.ThruHoleDiameter
  - IWizardHoleFeatureData2.ThruTapDrillDiameter
keywords:
  - depth
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - tap
  - through
  - thrutapdrilldepth
  - wizard
  - hole
  - feature
  - data2
  - thru
  - drill
  - double
readonly: null
---

# IWizardHoleFeatureData2.ThruTapDrillDepth

Gets or sets the Hole Wizard feature through-tap drill depth.

## Signature

```csharp
System.Double ThruTapDrillDepth {get; set;}
```
## Parameters

None.

## Return Value

Through-tap drill depth

## Remarks

For through holes, the depths depend on the geometry. Do not rely on the Set version of this property to set depths.
This property is only relevant for:
swTapBlind
swTapBlindCounterSinkTop
swTapThru
swTapThruCounterSinkBottom
swTapThruCounterSinkTop
swTapThruCounterSinkTopBottom
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWizardHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWizardHoleFeatureData2)

## See Also

- `IWizardHoleFeatureData2.ThruHoleDepth`
- `IWizardHoleFeatureData2.ThruHoleDiameter`
- `IWizardHoleFeatureData2.ThruTapDrillDiameter`