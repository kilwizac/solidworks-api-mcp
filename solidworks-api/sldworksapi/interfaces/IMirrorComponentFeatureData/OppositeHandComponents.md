---
type: property
interface: IMirrorComponentFeatureData
member: OppositeHandComponents
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IMirrorComponentFeatureData.CreateDerivedConfigurations
  - IMirrorComponentFeatureData.MirroredComponentFilenames
  - IMirrorComponentFeatureData.NameModifier
  - IMirrorComponentFeatureData.NameModifierType
  - IMirrorComponentFeatureData.ReplaceFileLocations
keywords:
  - oppositehandcomponents
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - opposite
  - hand
  - components
  - object
readonly: null
---

# IMirrorComponentFeatureData.OppositeHandComponents

Gets or sets the array of components for which to create opposite-hand versions.

## Signature

```csharp
System.Object OppositeHandComponents {get; set;}
```
## Parameters

None.

## Return Value

Array of IComponent2

## Remarks

Use
IMirrorComponentFeatureData::ComponentsToInstanceAlignToComponentOrigin
or
IMirrorComponentFeatureData::ComponentsToInstanceAlignToSelection
to create non-opposite-hand versions of selected components.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)

## See Also

- `IMirrorComponentFeatureData.CreateDerivedConfigurations`
- `IMirrorComponentFeatureData.MirroredComponentFilenames`
- `IMirrorComponentFeatureData.NameModifier`
- `IMirrorComponentFeatureData.NameModifierType`
- `IMirrorComponentFeatureData.ReplaceFileLocations`