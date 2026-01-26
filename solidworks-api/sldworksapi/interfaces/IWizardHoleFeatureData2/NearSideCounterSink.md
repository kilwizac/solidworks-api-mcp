---
type: property
interface: IWizardHoleFeatureData2
member: NearSideCounterSink
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.CounterSinkAngle
  - IWizardHoleFeatureData2.CounterSinkDiameter
  - IWizardHoleFeatureData2.FarCounterSinkAngle
  - IWizardHoleFeatureData2.FarCounterSinkDiameter
  - IWizardHoleFeatureData2.FarSideCounterSink
  - IWizardHoleFeatureData2.MidCounterSinkAngle
  - IWizardHoleFeatureData2.MidCounterSinkDiameter
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - countersunk
  - nearsidecountersink
  - wizard
  - hole
  - feature
  - data2
  - near
  - side
  - counter
  - sink
  - boolean
  - select
  - far
  - countersink
  - options
  - vb
  - net
  - vba
readonly: null
---

# IWizardHoleFeatureData2.NearSideCounterSink

Gets whether the near side option is selected for the Hole Wizard countersink feature.

## Signature

```csharp
System.Boolean NearSideCounterSink {get; set;}
```
## Parameters

None.

## Return Value

True if the near side option for the countersink Hole Wizard feature is selected, false if not (see Remarks )

## Remarks

If you set this property to true, you must also set
IWizardHoleFeatureData2::NearCounterSinkDiameter
to an appropriate value in meters and
IWizardHoleFeatureData2::NearCounterSinkAngle
to an appropriate value in radians to modify the Hole Wizard feature definition. If you do not set the diameter and angle to their proper values, then this method has no effect.

## Examples

- Select Near and Far Side Hole Wizard Countersink Options (C#) (Select_Near_and_Far_Side_Countersink_Hole_Options_Example_CSharp.htm)
- Select Near and Far Side Hole Wizard Countersink Options (VB.NET) (Select_Near_and_Far_Side_Countersink_Hole_Options_Example_VBNET.htm)
- Select Near and Far Side Hole Wizard Countersink Options (VBA) (Select_Near_and_Far_Side_Countersink_Hole_Options_Example_VB.htm)

## See Also

- `IWizardHoleFeatureData2.CounterSinkAngle`
- `IWizardHoleFeatureData2.CounterSinkDiameter`
- `IWizardHoleFeatureData2.FarCounterSinkAngle`
- `IWizardHoleFeatureData2.FarCounterSinkDiameter`
- `IWizardHoleFeatureData2.FarSideCounterSink`
- `IWizardHoleFeatureData2.MidCounterSinkAngle`
- `IWizardHoleFeatureData2.MidCounterSinkDiameter`