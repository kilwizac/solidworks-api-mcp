---
type: method
interface: IWizardHoleFeatureData2
member: IGetFeatureScopeBodies
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.AutoSelect
  - IWizardHoleFeatureData2.FeatureScope
  - IWizardHoleFeatureData2.FeatureScopeBodies
  - IWizardHoleFeatureData2.ISetFeatureScopeBodies
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - feature
  - scope
  - igetfeaturescopebodies
  - wizard
  - hole
  - data2
  - bodies
  - count
  - int32
  - body2
---

# IWizardHoleFeatureData2.IGetFeatureScopeBodies

Gets the solid bodies that the Hole Wizard feature affects in a multibody part.

## Signature

```csharp
Body2 IGetFeatureScopeBodies( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of solid bodies to affect

## Return Value

in-process, unmanaged C++: Pointer to an array of solid bodies of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IWizardHoleFeatureData2::GetFeatureScopeBodiesCount
to get Count.

## See Also

- `IWizardHoleFeatureData2.AutoSelect`
- `IWizardHoleFeatureData2.FeatureScope`
- `IWizardHoleFeatureData2.FeatureScopeBodies`
- `IWizardHoleFeatureData2.ISetFeatureScopeBodies`