---
type: method
interface: IWizardHoleFeatureData2
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.AutoSelect
  - IWizardHoleFeatureData2.FeatureScopeBodies
  - IWizardHoleFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - getfeaturescopebodiescount
  - wizard
  - hole
  - data2
  - bodies
  - count
  - int32
---

# IWizardHoleFeatureData2.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the Hole Wizard feature in a multibody part.

## Signature

```csharp
System.Int32 GetFeatureScopeBodiesCount()
```
## Parameters

None.

## Return Value

Number of solid bodies affected

## Remarks

Call this method before calling
IWizardHoleFeatureData2::IGetFeatureScopeBodies
.
If
IWizardHoleFeatureData2::FeatureScope
is false, then the return value is 0.

## See Also

- `IWizardHoleFeatureData2.AutoSelect`
- `IWizardHoleFeatureData2.FeatureScopeBodies`
- `IWizardHoleFeatureData2.ISetFeatureScopeBodies`