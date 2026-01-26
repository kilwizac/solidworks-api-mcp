---
type: property
interface: ISimpleFilletFeatureData2
member: IsMultipleRadius
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.DefaultRadius
  - ISimpleFilletFeatureData2.GetRadius
  - ISimpleFilletFeatureData2.IGetRadius
  - ISimpleFilletFeatureData2.ISetRadius
  - ISimpleFilletFeatureData2.SetRadius
keywords:
  - ismultipleradius
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - multiple
  - radius
  - boolean
readonly: null
---

# ISimpleFilletFeatureData2.IsMultipleRadius

Gets or sets whether this symmetric fillet or chamfer feature is a multiple radius fillet.

## Signature

```csharp
System.Boolean IsMultipleRadius {get; set;}
```
## Parameters

None.

## Return Value

True if this symmetric fillet/chamfer feature has multiple radii, false if not

## Remarks

This property is valid only for symmetric constant radius fillets and symmetric offset face chamfers.

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)

## See Also

- `ISimpleFilletFeatureData2.DefaultRadius`
- `ISimpleFilletFeatureData2.GetRadius`
- `ISimpleFilletFeatureData2.IGetRadius`
- `ISimpleFilletFeatureData2.ISetRadius`
- `ISimpleFilletFeatureData2.SetRadius`