---
type: property
interface: IWizardHoleFeatureData2
member: AutoSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IWizardHoleFeatureData2.AutoSelectComponents
  - IWizardHoleFeatureData2.FeatureScope
  - IWizardHoleFeatureData2.GetFeatureScopeBodiesCount
  - IWizardHoleFeatureData2.IGetFeatureScopeBodies
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - feature
  - scope
  - autoselect
  - wizard
  - hole
  - data2
  - auto
  - select
  - boolean
readonly: null
---

# IWizardHoleFeatureData2.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the Hole Wizard feature to affect in a multibody part.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies for IWizardHoleFeatureData2::FeatureScopeBodies or IWizardHoleFeatureData2::ISetFeatureScopeBodies

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWizardHoleFeatureData2.AutoSelectComponents`
- `IWizardHoleFeatureData2.FeatureScope`
- `IWizardHoleFeatureData2.GetFeatureScopeBodiesCount`
- `IWizardHoleFeatureData2.IGetFeatureScopeBodies`