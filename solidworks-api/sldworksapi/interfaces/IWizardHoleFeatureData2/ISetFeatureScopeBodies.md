---
type: method
interface: IWizardHoleFeatureData2
member: ISetFeatureScopeBodies
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of solid bodies to affect
  -
    name: BodyArr
    type: Body2
    description: Array of solid bodies of size Count
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWizardHoleFeatureData2.FeatureScope
  - IWizardHoleFeatureData2.FeatureScopeBodies
  - IWizardHoleFeatureData2.GetFeatureScopeBodiesCount
  - IWizardHoleFeatureData2.IGetFeatureScopeBodies
  - IWizardHoleFeatureData2.IVertex
  - IWizardHoleFeatureData2.Vertex
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - feature
  - scope
  - isetfeaturescopebodies
  - wizard
  - hole
  - data2
  - bodies
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# IWizardHoleFeatureData2.ISetFeatureScopeBodies

Sets the solid bodies that the Hole Wizard feature affects in the multibody part.

## Signature

```csharp
void ISetFeatureScopeBodies( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of solid bodies to affect
- `BodyArr` (Body2): Array of solid bodies of size Count

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWizardHoleFeatureData2.FeatureScope`
- `IWizardHoleFeatureData2.FeatureScopeBodies`
- `IWizardHoleFeatureData2.GetFeatureScopeBodiesCount`
- `IWizardHoleFeatureData2.IGetFeatureScopeBodies`
- `IWizardHoleFeatureData2.IVertex`
- `IWizardHoleFeatureData2.Vertex`