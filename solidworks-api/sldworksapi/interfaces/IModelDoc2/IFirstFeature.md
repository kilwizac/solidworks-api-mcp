---
type: method
interface: IModelDoc2
member: IFirstFeature
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IModelDoc2.FeatureByPositionReverse
  - IModelDoc2.FirstFeature
  - IModelDoc2.GetFeatureCount
  - IModelDoc2.IFeatureByPositionReverse
keywords:
  - feature
  - see
  - also
  - ifeature
  - traverse
  - features
  - ifirstfeature
  - imodeldoc2
  - model
  - doc2
  - first
  - access
  - assembly
  - names
  - creators
---

# IModelDoc2.IFirstFeature

Gets the first feature in the document.

## Signature

```csharp
Feature IFirstFeature()
```
## Parameters

None.

## Return Value

First feature in the document

## Remarks

This method:
is identical to
IPartDoc::FirstFeature
, but is available on the IModelDoc2 interface to include access to assemblies and drawings.
can access the first feature, even if it is suppressed.
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
To access the next feature in the FeatureManager design tree and subfeatures, use
IFeature::GetNextFeature
or
IFeature::IGetNextFeature
and
IFeature::GetFirstSubFeature
or
IFeature::IGetFirstSubFeature
methods, respectively.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Get Names of Creators of Features (C++) (Get_Names_of_Creators_of_Features_Examples_CPlusCPlus_COM.htm)

## See Also

- `IModelDoc2.FeatureByPositionReverse`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.GetFeatureCount`
- `IModelDoc2.IFeatureByPositionReverse`