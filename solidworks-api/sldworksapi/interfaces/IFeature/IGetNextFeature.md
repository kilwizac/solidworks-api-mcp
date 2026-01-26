---
type: method
interface: IFeature
member: IGetNextFeature
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IComponent2.FirstFeature
  - IFeature.GetFirstSubFeature
  - IFeature.GetNextFeature
  - IFeature.GetNextSubFeature
  - IFeature.IGetFirstSubFeature
  - IFeature.IGetNextSubFeature
  - IModelDoc2.FirstFeature
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - traverse
  - features
  - igetnextfeature
  - ifeature
  - feature
  - next
  - access
  - assembly
  - names
  - creators
---

# IFeature.IGetNextFeature

Gets the next feature.

## Signature

```csharp
Feature IGetNextFeature()
```
## Parameters

None.

## Return Value

Pointer to the next feature

## Remarks

This method:
allows you to access suppressed features.
returns features in the current order for the model, and this order changes when the model is edited.
Your application should not assume that:
features retain the same relative or absolute position throughout the model’s lifetime. For example, you should not assume that Sketch1 always appears before Sketch2.
any feature has a specific name. Because features can be renamed, you cannot assume that the first reference plane feature is named Plane1.
When traversing the FeatureManager design tree, your application should use
IFeature::GetTypeName2
and
IFeature::GetSpecificFeature2
to identify specific features instead of relying solely on
IFeature::Name
.
This method returns features in the model definition order, which is not the same as the order displayed in the user interface. See
ITreeControlItem
for details.
IFeature::GetFirstSubFeature
and
IFeature::IGetFirstSubFeature
provide access to subfeatures.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Get Names of Creators of Features (C++) (Get_Names_of_Creators_of_Features_Examples_CPlusCPlus_COM.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetFirstSubFeature`
- `IFeature.GetNextFeature`
- `IFeature.GetNextSubFeature`
- `IFeature.IGetFirstSubFeature`
- `IFeature.IGetNextSubFeature`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`