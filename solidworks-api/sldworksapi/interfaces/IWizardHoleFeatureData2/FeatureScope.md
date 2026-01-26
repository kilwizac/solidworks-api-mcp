---
type: property
interface: IWizardHoleFeatureData2
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.AutoSelect
  - IWizardHoleFeatureData2.FeatureScopeBodies
  - IWizardHoleFeatureData2.GetFeatureScopeBodiesCount
  - IWizardHoleFeatureData2.IGetFeatureScopeBodies
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
  - featurescope
  - wizard
  - hole
  - data2
  - boolean
readonly: null
---

# IWizardHoleFeatureData2.FeatureScope

Gets or sets whether to use scope for the Hole Wizard feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

When set to... Then... True Only the specified bodies in the multibody part are affected by the Hole Wizard feature False All of the bodies in the multibody part are affected by the Hole Wizard feature

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWizardHoleFeatureData2.AutoSelect`
- `IWizardHoleFeatureData2.FeatureScopeBodies`
- `IWizardHoleFeatureData2.GetFeatureScopeBodiesCount`
- `IWizardHoleFeatureData2.IGetFeatureScopeBodies`
- `IWizardHoleFeatureData2.ISetFeatureScopeBodies`