---
type: property
interface: IWizardHoleFeatureData2
member: AutoSelectComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IWizardHoleFeatureData2.AssemblyFeatureScope
  - IWizardHoleFeatureData2.PropagateFeatureToParts
keywords:
  - feature
  - scope
  - assemblies
  - see
  - also
  - iassemblydoc
  - autoselectcomponents
  - iwizardholefeaturedata2
  - wizard
  - hole
  - data2
  - auto
  - select
  - components
  - boolean
readonly: null
---

# IWizardHoleFeatureData2.AutoSelectComponents

Gets or sets whether to auto-select all components that this assembly Hole Wizard feature affects in model.

## Signature

```csharp
System.Boolean AutoSelectComponents {get; set;}
```
## Parameters

None.

## Return Value

True to auto-select all affected components, false to not (use the selected components only or set IWizardHoleFeatureData2::AutoSelect to true)

## See Also

- `IWizardHoleFeatureData2.AssemblyFeatureScope`
- `IWizardHoleFeatureData2.PropagateFeatureToParts`