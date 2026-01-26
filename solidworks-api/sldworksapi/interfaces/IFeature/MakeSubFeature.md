---
type: method
interface: IFeature
member: MakeSubFeature
returns: System.Boolean
parameters:
  -
    name: SubFeature
    type: Feature
    description: Pointer to the feature to become a subfeature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetFirstSubFeature
  - IFeature.GetNextSubFeature
  - IFeature.IGetFirstSubFeature
  - IFeature.IGetNextSubFeature
keywords:
  - subfeatures
  - makesubfeature
  - ifeature
  - feature
  - make
  - sub
  - boolean
  - create
  - macro
  - subfeature
  - vba
---

# IFeature.MakeSubFeature

Makes a feature become a subfeature of this feature.

## Signature

```csharp
System.Boolean MakeSubFeature( 
   Feature
SubFeature
)
```
## Parameters

- `SubFeature` (Feature): Pointer to the feature to become a subfeature

## Return Value

True if the feature becomes a subfeature, false if not

## Remarks

This method is not supported in assembly documents.
This method can only be used to make subfeatures to a macro feature.
The feature and subfeature must have a parent-child relationship. If the subfeature is a reference plane, then the feature and subfeatures of the feature are the only parents of the subfeature to be inserted.

## Examples

- Create Macro Feature Subfeature (VBA) (Create_Macro_Feature_Subfeature_Example_VB.htm)

## See Also

- `IFeature.GetFirstSubFeature`
- `IFeature.GetNextSubFeature`
- `IFeature.IGetFirstSubFeature`
- `IFeature.IGetNextSubFeature`