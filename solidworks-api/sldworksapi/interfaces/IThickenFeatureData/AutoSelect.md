---
type: property
interface: IThickenFeatureData
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
  - IThickenFeatureData.FeatureScope
  - IThickenFeatureData.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - autoselect
  - ithickenfeaturedata
  - thicken
  - data
  - auto
  - select
  - boolean
  - create
  - vba
readonly: null
---

# IThickenFeatureData.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the thicken feature to affect in a multibody part.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies using IThickenFeatureData::FeatureScopeBodies or IThickenFeatureData::ISetFeatureScopeBodies .

## Remarks

This property is only available when the
IThickenFeatureData::FeatureScope
property is true. The thicken feature is expanded along the plane on which the feature is created and selects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Create Thicken Feature (VBA) (Create_Thicken_Feature_Example_VB.htm)

## See Also

- `IThickenFeatureData.FeatureScope`
- `IThickenFeatureData.IGetFeatureScopeBodies`