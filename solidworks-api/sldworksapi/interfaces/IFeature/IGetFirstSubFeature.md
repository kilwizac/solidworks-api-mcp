---
type: method
interface: IFeature
member: IGetFirstSubFeature
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
  - IFeature.IGetNextFeature
  - IFeature.IGetNextSubFeature
  - IFeature.MakeSubFeature
  - IModelDoc2.FirstFeature
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - traverse
  - features
  - subfeatures
  - igetfirstsubfeature
  - ifeature
  - feature
  - first
  - sub
  - sketches
---

# IFeature.IGetFirstSubFeature

Gets the first sub-feature that belongs to this feature.

## Signature

```csharp
Feature IGetFirstSubFeature()
```
## Parameters

None.

## Return Value

Pointer the first sub- feature of this feature

## Remarks

If no sub-features exist for this feature, then this method returns NULL.

## Examples

- Get Sketches (C++) (Get_Sketches_Example_CPlusPlus_COM.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetFirstSubFeature`
- `IFeature.GetNextFeature`
- `IFeature.GetNextSubFeature`
- `IFeature.IGetNextFeature`
- `IFeature.IGetNextSubFeature`
- `IFeature.MakeSubFeature`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`