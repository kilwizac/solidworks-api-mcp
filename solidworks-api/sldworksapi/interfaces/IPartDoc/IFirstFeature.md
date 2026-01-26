---
type: method
interface: IPartDoc
member: IFirstFeature
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - parts
  - ui
related:
  - IComponent2.FirstFeature
  - IModelDoc2.FirstFeature
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.ReorderFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - first
  - traverse
  - features
  - parts
  - ipartdoc
  - ifirstfeature
  - part
  - doc
  - sketches
---

# IPartDoc.IFirstFeature

Gets the first feature in the part.

## Signature

```csharp
Feature IFirstFeature()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method returns features in the current order for the part, and this order changes when the part is edited.
Your application should not assume that:
features retain the same relative or absolute position throughout the part’s lifetime. For example, you should not assume that Sketch1 always appears before Sketch2.
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
If a feature is suppressed, then this method can still access the feature.
To access the next feature in the FeatureManager design tree and subfeatures, use
IFeature::GetNextFeature
or
IFeature::IGetNextFeature
and
IFeature::GetFirstSubFeature
or
IFeature::IGetFirstSubFeature
.

## Examples

- Get Sketches (C++) (Get_Sketches_Example_CPlusPlus_COM.htm)

## See Also

- `IComponent2.FirstFeature`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.ReorderFeature`