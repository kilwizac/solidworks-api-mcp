---
type: property
interface: IWizardHoleFeatureData2
member: DrillAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.CounterDrillAngle
  - IWizardHoleFeatureData2.CounterDrillDepth
  - IWizardHoleFeatureData2.CounterDrillDiameter
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - drill
  - angle
  - drillangle
  - wizard
  - hole
  - feature
  - data2
  - double
readonly: null
---

# IWizardHoleFeatureData2.DrillAngle

Gets or sets the drill angle for a Hole Wizard feature.

## Signature

```csharp
System.Double DrillAngle {get; set;}
```
## Parameters

None.

## Return Value

Drill angle

## Remarks

This property is relevant only for swSimpleDrilled, swTaperedDrilled, swCounterBoreDrilled, swCounterSunkDrilled, and swCounterDrilledDrilled holes.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWizardHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWizardHoleFeatureData2)

## See Also

- `IWizardHoleFeatureData2.CounterDrillAngle`
- `IWizardHoleFeatureData2.CounterDrillDepth`
- `IWizardHoleFeatureData2.CounterDrillDiameter`