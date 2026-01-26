---
type: property
interface: IExtrudeFeatureData2
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
  - IExtrudeFeatureData2.GetFeatureScopeBodiesCount
  - IExtrudeFeatureData2.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - multibody
  - extrude
  - autoselect
  - iextrudefeaturedata2
  - data2
  - auto
  - select
  - boolean
readonly: null
---

# IExtrudeFeatureData2.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the extrude feature to affect in the multibody part.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies for IExtrudeFeatureData2::FeatureScopeBodies and IExtrudeFeatureData2::ISetFeatureScopeBodies

## Remarks

This property is only available when the
IExtrudeFeatureData2::FeatureScope
property is true.
The extrude feature is expanded along the plane on which the feature is created and selects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IExtrudeFeatureData2.GetFeatureScopeBodiesCount`
- `IExtrudeFeatureData2.IGetFeatureScopeBodies`