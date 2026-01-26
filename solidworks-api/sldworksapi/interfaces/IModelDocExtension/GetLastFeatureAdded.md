---
type: method
interface: IModelDocExtension
member: GetLastFeatureAdded
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - ui
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - last
  - added
  - getlastfeatureadded
  - imodeldocextension
  - model
  - doc
  - extension
---

# IModelDocExtension.GetLastFeatureAdded

Gets the last feature added to the model.

## Signature

```csharp
Feature GetLastFeatureAdded()
```
## Parameters

None.

## Return Value

Feature

## Remarks

This method can access subfeature types such as mates, drawing views, and so on. For example, if you just added the first coincident mate to MateGroup, then I
ModelDocExtension::GetLastFeatureAdded will return Coincident1.
IModelDoc2::FeatureByPositionReverse
and
IModelDoc2::IFeatureByPositionReverse
will return MateGroup.