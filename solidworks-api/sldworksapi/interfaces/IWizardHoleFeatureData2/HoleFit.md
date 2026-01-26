---
type: property
interface: IWizardHoleFeatureData2
member: HoleFit
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - fit
  - holefit
  - wizard
  - hole
  - feature
  - data2
  - int32
readonly: null
---

# IWizardHoleFeatureData2.HoleFit

Gets or sets the Hole Wizard feature fit information.

## Signature

```csharp
System.Int32 HoleFit {get; set;}
```
## Parameters

None.

## Return Value

Fit information as defined by swWzdHoleScrewClearanceTypes_e

## Remarks

When this property is changed, the diameter of the Hole Wizard feature is changed as per the database. This property applies to counterbore and countersink Hole Wizard features only.
See
Accessing Selections that Define Features
for additional details.