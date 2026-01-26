---
type: property
interface: IBaseFlangeFeatureData
member: OverrideKFactor
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.KFactor
  - IBaseFlangeFeatureData.TableKFactor
keywords:
  - overridekfactor
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - override
  - factor
  - boolean
  - create
  - using
  - gauge
  - table
  - vba
readonly: null
---

# IBaseFlangeFeatureData.OverrideKFactor

Gets or sets whether to override the K-factor value specified in the gauge table for this base flange feature.

## Signature

```csharp
System.Boolean OverrideKFactor {get; set;}
```
## Parameters

None.

## Return Value

True to override the K-factor value, false to not

## Examples

- Create Base-Flange Feature Using Gauge Table (VBA) (Create_Base-Flange_Feature_Using_Gauge_Table_Example_VB.htm)

## See Also

- `IBaseFlangeFeatureData.KFactor`
- `IBaseFlangeFeatureData.TableKFactor`