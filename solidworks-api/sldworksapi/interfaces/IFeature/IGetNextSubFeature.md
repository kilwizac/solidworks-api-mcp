---
type: method
interface: IFeature
member: IGetNextSubFeature
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
  - IFeature.IGetNextFeature
  - IFeature.MakeSubFeature
  - IModelDoc2.FirstFeature
  - IModelDoc2.IFirstFeature
  - IPartDoc.FirstFeature
  - IPartDoc.IFirstFeature
keywords:
  - traverse
  - features
  - subfeatures
  - igetnextsubfeature
  - ifeature
  - feature
  - next
  - sub
  - sketches
---

# IFeature.IGetNextSubFeature

Gets the next sub-feature from the owner of this sub-feature.

## Signature

```csharp
Feature IGetNextSubFeature()
```
## Parameters

None.

## Return Value

Pointer the next sub- feature

## Remarks

If no sub-feature exists, then this method returns NULL.

## Examples

- Get Sketches (C++) (Get_Sketches_Example_CPlusPlus_COM.htm)

## See Also

- `IComponent2.FirstFeature`
- `IFeature.GetFirstSubFeature`
- `IFeature.GetNextFeature`
- `IFeature.GetNextSubFeature`
- `IFeature.IGetFirstSubFeature`
- `IFeature.IGetNextFeature`
- `IFeature.MakeSubFeature`
- `IModelDoc2.FirstFeature`
- `IModelDoc2.IFirstFeature`
- `IPartDoc.FirstFeature`
- `IPartDoc.IFirstFeature`