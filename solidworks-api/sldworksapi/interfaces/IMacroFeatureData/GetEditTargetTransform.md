---
type: method
interface: IMacroFeatureData
member: GetEditTargetTransform
returns: MathTransform
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.FeatureTransform
  - IMacroFeatureData.PatternTransform
keywords:
  - getedittargettransform
  - imacrofeaturedata
  - macro
  - feature
  - data
  - edit
  - target
  - transform
  - math
---

# IMacroFeatureData.GetEditTargetTransform

Gets the transform of the component where the macro feature resides if at least one selection in the macro feature belongs to a different component.

## Signature

```csharp
MathTransform GetEditTargetTransform()
```
## Parameters

None.

## Return Value

Math transform of the component where the macro feature resides if at least one selection in the macro feature belongs to a different component, or NULL if all of the selections in the macro feature belong to the component where the macro feature resides

## Remarks

When
regenerating a macro feature
in a part that is a component in an assembly, you cannot get the component's transform where the macro feature resides because you cannot get the component using
IEntity::GetComponent
or
IEntity::IGetComponent2
in a part document. However, you may need the component's transform because references from other components to it often need to be transformed.
This method provides this transform. If there are no external references among the macro feature selections (
IMacroFeatureData::GetSelections3
or
IMacroFeatureData::IGetSelections3
), then this method returns NULL. If there are external references among the macro feature selections, then this method returns the transform of the component where the macro feature resides.
For example, if the macro feature includes a selection box in which the user can select a face, and the user selects a face on a different component, then this method can get the component's transform where the macro feature resides. However, if all of the selections in the macro feature belong to the component where the macro feature resides, then this method returns NULL because you probably will not need the transform. See also
Macro Features and Component Transforms
.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.FeatureTransform`
- `IMacroFeatureData.PatternTransform`